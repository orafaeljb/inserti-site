import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, ArrowLeft } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: "/politica-de-privacidade" },
  title: "Política de Privacidade e LGPD",
  description:
    "Diretrizes de privacidade, segurança da informação e tratamento de dados pessoais da Inserti Tecnologia, em conformidade com a LGPD (Lei nº 13.709/2018).",
};

export default function PoliticaPrivacidadePage() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy/60 hover:text-brand-blue mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para a Página Inicial</span>
        </Link>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue/10 text-brand-blue mb-4">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Segurança da Informação & Governança</span>
        </div>

        <h1 className="font-heading font-black text-3xl sm:text-4xl text-brand-navy mb-4 tracking-tight">
          Política de Privacidade e Proteção de Dados (LGPD)
        </h1>
        <p className="text-xs text-brand-navy/60 mb-8">
          Última atualização: Outubro de 2026 • Em total conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018)
        </p>

        <div className="prose prose-slate max-w-none text-sm text-brand-navy/80 space-y-6 leading-relaxed">
          <p>
            A <strong>{SITE_CONFIG.legalName}</strong> (&quot;Inserti&quot;, &quot;nós&quot;) tem o compromisso inegociável de resguardar a privacidade, a confidencialidade e a segurança dos dados pessoais de seus clientes, parceiros, colaboradores e visitantes de nosso site ({SITE_CONFIG.url}).
          </p>

          <h2 className="font-heading font-bold text-xl text-brand-navy pt-4">
            1. Dados Pessoais que Coletamos
          </h2>
          <p>
            Coletamos apenas os dados estritamente necessários para viabilizar o atendimento consultivo, envio de diagnósticos técnicos e execução contratual de nossos serviços de tecnologia:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Dados de Identificação e Contato:</strong> Nome completo, endereço de e-mail corporativo, número de telefone/WhatsApp e cargo na empresa.</li>
            <li><strong>Dados da Organização:</strong> Razão social, quantidade estimada de computadores/servidores e serviços de interesse tecnológico.</li>
            <li><strong>Dados Técnicos de Navegação:</strong> Endereço IP, registros de data e hora de acesso, tipo de navegador e dados de telemetria agregada estritamente para segurança e prevenção contra ataques cibernéticos (Marco Civil da Internet, Art. 15).</li>
          </ul>

          <h2 className="font-heading font-bold text-xl text-brand-navy pt-4">
            2. Finalidade e Base Legal do Tratamento
          </h2>
          <p>
            O tratamento de dados pessoais realizado pela Inserti fundamenta-se nas hipóteses legais previstas no Art. 7º da LGPD:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Execução de Contrato ou Procedimentos Preliminares (Art. 7º, V):</strong> Para emitir propostas técnicas, formalizar contratos de MSP/MSSP e fornecer suporte ao cliente.</li>
            <li><strong>Legítimo Interesse (Art. 7º, IX):</strong> Para aprimoramento de nossos serviços, segurança de nossas redes e envio de comunicações técnicas relevantes.</li>
            <li><strong>Cumprimento de Obrigação Legal ou Regulatória (Art. 7º, II):</strong> Para guarda de registros de conexão e obrigações fiscais/tributárias.</li>
          </ul>

          <h2 className="font-heading font-bold text-xl text-brand-navy pt-4">
            3. Medidas Técnicas e Segurança da Informação
          </h2>
          <p>
            Como empresa especializada em cibersegurança (MSSP), adotamos os mais elevados padrões globais de segurança:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Criptografia de ponta a ponta (TLS 1.3) para tráfego web e comunicações de formulário.</li>
            <li>Armazenamento de dados em datacenters certificados ISO 27001 e SOC 2 Tipo II.</li>
            <li>Políticas rigorosas de controle de acesso fundamentadas no princípio do menor privilégio (PoLP) e autenticação de múltiplos fatores (MFA).</li>
            <li>Backups imutáveis à prova de ransomware e monitoramento contínuo de vulnerabilidades via SOC 24x7.</li>
          </ul>

          <h2 className="font-heading font-bold text-xl text-brand-navy pt-4">
            4. Seus Direitos como Titular de Dados
          </h2>
          <p>
            Em conformidade com o Art. 18 da LGPD, você pode a qualquer momento solicitar:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Confirmação da existência de tratamento e acesso aos seus dados pessoais.</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
            <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos.</li>
            <li>Revogação do consentimento previamente concedido.</li>
          </ul>

          <h2 className="font-heading font-bold text-xl text-brand-navy pt-4">
            5. Contato com Nosso Encarregado de Dados (DPO)
          </h2>
          <p>
            Para exercer seus direitos ou esclarecer qualquer dúvida sobre o tratamento de seus dados pessoais, entre em contato direto com o nosso Encarregado de Proteção de Dados:
          </p>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <div className="font-bold text-brand-navy">Canal do DPO / Privacidade Inserti</div>
            <div className="text-xs text-brand-navy/70 mt-1">
              E-mail: <a href="mailto:dpo@inserti.com.br" className="text-brand-blue font-semibold hover:underline">dpo@inserti.com.br</a>
            </div>
            <div className="text-xs text-brand-navy/70 mt-1">
              Endereço: {SITE_CONFIG.contact.address}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

