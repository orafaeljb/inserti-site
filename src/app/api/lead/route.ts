import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Configuração do envio (plataforma de WhatsApp Ceci), toda em variáveis de ambiente
const WTS_ENDPOINT = process.env.WTS_API_URL;
const WTS_TOKEN = process.env.WTS_API_TOKEN;
const WTS_TO = process.env.WTS_TO;
const WTS_FROM = process.env.WTS_FROM;
const WTS_TEMPLATE_ID = process.env.WTS_TEMPLATE_ID;
const WTS_TECNICO = process.env.WTS_TECNICO;
const WTS_NOME = process.env.WTS_NOME;

const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY;
const MAX_ASSUNTO = 900;

// Limite simples por IP (em memória): 5 envios a cada 10 minutos
const hits = new Map<string, number[]>();
function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60 * 1000);
  if (recent.length >= 5) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

/** Parâmetros de template do WhatsApp não aceitam quebras de linha, tabs ou muitos espaços seguidos. */
function clean(value: unknown, max = 300): string {
  return String(value ?? "")
    // eslint-disable-next-line no-control-regex
    .replace(/[\u0000-\u001f\u007f]+/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim()
    .slice(0, max);
}

interface LeadBody {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  /** Outros campos do formulário, no formato rótulo/valor */
  extras?: { label?: string; value?: string }[];
  /** Página de origem */
  page?: string;
  /** Aceite da Política de Privacidade (LGPD) */
  consent?: boolean;
  /** Token do Cloudflare Turnstile */
  turnstileToken?: string;
  /** Campo isca contra robôs: deve vir vazio */
  website?: string;
}

export async function POST(request: Request) {
  let body: LeadBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Requisição inválida." }, { status: 400 });
  }

  // Robôs preenchem o campo isca: responde como sucesso, mas não envia nada
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "desconhecido";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Muitas tentativas. Aguarde alguns minutos e tente novamente." },
      { status: 429 }
    );
  }

  if (body.consent !== true) {
    return NextResponse.json(
      { ok: false, error: "É necessário aceitar a Política de Privacidade para enviar." },
      { status: 400 }
    );
  }

  // Verificação anti-robô (Cloudflare Turnstile)
  if (TURNSTILE_SECRET) {
    const token = clean(body.turnstileToken, 2048);
    if (!token) {
      return NextResponse.json({ ok: false, error: "Confirme que você não é um robô." }, { status: 400 });
    }
    try {
      const verify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret: TURNSTILE_SECRET, response: token, remoteip: ip }),
      });
      const result = (await verify.json()) as { success?: boolean };
      if (!result.success) {
        return NextResponse.json(
          { ok: false, error: "Não foi possível validar a verificação anti-robô. Tente novamente." },
          { status: 400 }
        );
      }
    } catch (err) {
      console.error("[lead] Erro ao validar o Turnstile:", err);
      return NextResponse.json({ ok: false, error: "Serviço indisponível no momento." }, { status: 502 });
    }
  } else if (process.env.NODE_ENV === "production") {
    console.error("[lead] TURNSTILE_SECRET_KEY não configurado em produção.");
    return NextResponse.json({ ok: false, error: "Serviço indisponível no momento." }, { status: 500 });
  }

  const name = clean(body.name, 100);
  const email = clean(body.email, 120);
  const phone = clean(body.phone, 30);
  const company = clean(body.company, 120);
  const message = clean(body.message, 400);
  const page = clean(body.page, 100);

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validPhone = phone.replace(/\D/g, "").length >= 10;
  if (name.length < 2 || !validEmail || !validPhone) {
    return NextResponse.json(
      { ok: false, error: "Confira nome, e-mail e telefone e tente novamente." },
      { status: 400 }
    );
  }

  if (!WTS_ENDPOINT || !WTS_TOKEN || !WTS_TO || !WTS_FROM || !WTS_TEMPLATE_ID || !WTS_TECNICO || !WTS_NOME) {
    console.error("[lead] Variáveis WTS_* não configuradas por completo.");
    return NextResponse.json({ ok: false, error: "Serviço indisponível no momento." }, { status: 500 });
  }

  const parts = [
    `Novo contato recebido de: ${name}`,
    company && `Empresa: ${company}`,
    `E-mail: ${email}`,
    `WhatsApp: ${phone}`,
    "Aceite LGPD: sim",
    ...(body.extras ?? [])
      .map((e) => {
        const label = clean(e.label, 80);
        const value = clean(e.value, 200);
        return label && value ? `${label}: ${value}` : "";
      })
      .filter(Boolean),
    message && `Mensagem: ${message}`,
    page && `Página: ${page}`,
  ].filter(Boolean) as string[];

  const assunto = parts.join(" | ").slice(0, MAX_ASSUNTO);

  try {
    const res = await fetch(WTS_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: WTS_TOKEN,
        accept: "application/json",
        "content-type": "application/*+json",
      },
      body: JSON.stringify({
        to: WTS_TO,
        from: WTS_FROM,
        templateId: WTS_TEMPLATE_ID,
        parameters: {
          TECNICO: WTS_TECNICO,
          NOME: WTS_NOME,
          ASSUNTO: assunto,
        },
      }),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("[lead] Falha no envio:", res.status, text.slice(0, 300));
      return NextResponse.json(
        { ok: false, error: "Não foi possível enviar sua mensagem agora. Tente novamente em instantes." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[lead] Erro de rede:", err);
    return NextResponse.json(
      { ok: false, error: "Não foi possível enviar sua mensagem agora. Tente novamente em instantes." },
      { status: 502 }
    );
  }
}
