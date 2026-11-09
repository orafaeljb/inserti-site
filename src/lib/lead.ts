export interface LeadPayload {
  name: string;
  email: string;
  phone: string;
  company: string;
  message?: string;
  extras?: { label: string; value: string }[];
  /** Aceite da Política de Privacidade (LGPD) */
  consent: boolean;
  /** Token do Cloudflare Turnstile */
  turnstileToken?: string;
  /** Campo isca contra robôs */
  website?: string;
}

/** Envia o contato ao servidor, que repassa para o WhatsApp da equipe. */
export async function sendLead(payload: LeadPayload): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, page: window.location.pathname }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) {
      return { ok: false, error: data.error ?? "Não foi possível enviar sua mensagem. Tente novamente." };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Sem conexão. Verifique sua internet e tente novamente." };
  }
}
