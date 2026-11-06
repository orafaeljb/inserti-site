import React from "react";
import { Metadata } from "next";
import { DiagnosticTool } from "@/components/diagnostic/DiagnosticTool";
import { FileSearch, ShieldCheck, CheckCircle2, Clock, Award } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/diagnostico" },
  title: "Diagnóstico Gratuito de TI e Segurança",
  description:
    "Descubra o nível de maturidade da TI e da segurança da sua empresa. Responda ao diagnóstico e receba recomendações práticas dos nossos especialistas.",
  keywords: [
    "Diagnóstico de TI",
    "Maturidade de TI",
    "Avaliação de Cibersegurança",
    "Auditoria Gratuita de TI",
    "Maturidade Digital",
    "Inserti Diagnóstico",
  ],
};

export default function DiagnosticoPage() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue/10 text-brand-blue border border-brand-blue/20 mb-6">
            <FileSearch className="w-3.5 h-3.5" />
            <span>Avaliação de Maturidade Corporativa</span>
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-5xl text-brand-navy tracking-tight leading-[1.15]">
            Diagnóstico de TI & Cibersegurança para Empresas
          </h1>

          <p className="mt-5 text-base sm:text-lg text-brand-navy/75 max-w-2xl mx-auto leading-relaxed">
            Responda a 4 perguntas estratégicas e descubra a pontuação de resiliência tecnológica do seu negócio, identificando pontos cegos antes que causem paradas ou vazamentos.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-brand-navy/70">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-brand-blue" />
              Tempo estimado: 2 minutos
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-blue" />
              100% Confidencial (LGPD)
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-brand-blue" />
              Resultado Imediato
            </span>
          </div>
        </div>
      </section>

      {/* Interactive Tool Section */}
      <section className="py-16 -mt-8 relative z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <DiagnosticTool />
        </div>
      </section>

      {/* Why Take the Assessment */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-brand-navy tracking-tight">
              O Que Avaliamos no Diagnóstico?
            </h2>
            <p className="mt-3 text-sm text-brand-navy/70">
              Pilares essenciais para assegurar que sua empresa opere sem riscos de paralisação.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand-navy/5 text-brand-blue flex items-center justify-center font-bold mb-4">
                1
              </div>
              <h3 className="font-heading font-bold text-base text-brand-navy mb-2">
                Resiliência de Backup
              </h3>
              <p className="text-xs text-brand-navy/70 leading-relaxed">
                Capacidade de restauração rápida e imunidade a ransomware através de imutabilidade WORM.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand-navy/5 text-brand-blue flex items-center justify-center font-bold mb-4">
                2
              </div>
              <h3 className="font-heading font-bold text-base text-brand-navy mb-2">
                Segurança de Borda
              </h3>
              <p className="text-xs text-brand-navy/70 leading-relaxed">
                Inspeção SSL profunda, contingência de links e firewall NGFW com alta disponibilidade.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand-navy/5 text-brand-blue flex items-center justify-center font-bold mb-4">
                3
              </div>
              <h3 className="font-heading font-bold text-base text-brand-navy mb-2">
                NOC & Proatividade
              </h3>
              <p className="text-xs text-brand-navy/70 leading-relaxed">
                Substituição do modelo &apos;apaga incêndios&apos; por monitoramento preditivo e patches contínuos.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand-navy/5 text-brand-blue flex items-center justify-center font-bold mb-4">
                4
              </div>
              <h3 className="font-heading font-bold text-base text-brand-navy mb-2">
                Cibersegurança & SOC
              </h3>
              <p className="text-xs text-brand-navy/70 leading-relaxed">
                Proteção comportamental em endpoints, gestão de privilégios mínimos e resposta rápida.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

