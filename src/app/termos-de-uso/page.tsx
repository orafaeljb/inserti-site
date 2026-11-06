import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: "/termos-de-uso" },
  title: "Termos de Uso do Site",
  description:
    "Termos e condições gerais de uso do site institucional e das ferramentas de diagnóstico da Inserti Tecnologia.",
};

export default function TermosUsoPage() {
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
          <FileText className="w-3.5 h-3.5" />
          <span>Termos & Condições Legais</span>
        </div>

        <h1 className="font-heading font-black text-3xl sm:text-4xl text-brand-navy mb-4 tracking-tight">
          Termos de Uso do Website
        </h1>
        <p className="text-xs text-brand-navy/60 mb-8">
          Vigência: Outubro de 2026 • {SITE_CONFIG.legalName}
        </p>

        <div className="prose prose-slate max-w-none text-sm text-brand-navy/80 space-y-6 leading-relaxed">
          <p>
            Bem-vindo ao website da <strong>{SITE_CONFIG.legalName}</strong>. Ao acessar e navegar por este portal ({SITE_CONFIG.url}) e utilizar nossas ferramentas interativas (como o Diagnóstico de Maturidade de TI), você concorda expressamente com os presentes Termos de Uso.
          </p>

          <h2 className="font-heading font-bold text-xl text-brand-navy pt-4">
            1. Propriedade Intelectual
          </h2>
          <p>
            Todos os textos, marcas, logotipos, ilustrações, diagramas técnicos e códigos fontes presentes neste portal são de propriedade exclusiva da Inserti ou de seus parceiros licenciadores, sendo estritamente vedada a reprodução total ou parcial sem autorização prévia por escrito.
          </p>

          <h2 className="font-heading font-bold text-xl text-brand-navy pt-4">
            2. Natureza das Informações e Diagnósticos
          </h2>
          <p>
            Os artigos do blog e as simulações fornecidas pela ferramenta de diagnóstico online possuem caráter meramente informativo e preliminar, não substituindo uma auditoria técnica formal in-loco conduzida por engenheiros credenciados. As propostas comerciais definitivas são sempre formalizadas mediante Acordo de Nível de Serviço (SLA) específico.
          </p>

          <h2 className="font-heading font-bold text-xl text-brand-navy pt-4">
            3. Limitação de Responsabilidade e Disponibilidade
          </h2>
          <p>
            Empenhamos os melhores esforços de engenharia para assegurar a disponibilidade contínua e a segurança deste portal. No entanto, não nos responsabilizamos por instabilidades decorrentes de falhas em operadoras públicas de telecomunicação ou ataques de negação de serviço (DDoS) globais na rede externa.
          </p>

          <h2 className="font-heading font-bold text-xl text-brand-navy pt-4">
            4. Foro e Legislação Aplicável
          </h2>
          <p>
            Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o Foro da Comarca de São Paulo/SP como o único competente para dirimir quaisquer controvérsias oriundas deste termo, com expressa renúncia a qualquer outro.
          </p>
        </div>
      </div>
    </div>
  );
}

