import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { casesData } from "@/data/cases";
import {
  Award,
  CheckCircle2,
  Quote,
  TrendingUp,
  ShieldCheck,
  Building2,
  ArrowRight,
  Headphones,
} from "lucide-react";
import { CTASection } from "@/components/common/CTASection";

export const metadata: Metadata = {
  alternates: { canonical: "/cases" },
  title: "Cases de Sucesso em TI e Segurança",
  description:
    "Conheça projetos da Inserti em infraestrutura, segurança da informação e proteção de dados para empresas de diferentes segmentos.",
  keywords: [
    "Cases de Sucesso TI",
    "Estudo de Caso MSP",
    "Resultados Cibersegurança",
    "Migração Proxmox",
    "Fortinet Case",
    "Inserti Cases",
  ],
};

export default function CasesPage() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue/10 text-brand-blue border border-brand-blue/20 mb-6">
            <Award className="w-3.5 h-3.5" />
            <span>Resultados Comprovados</span>
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-brand-navy tracking-tight leading-[1.15]">
            Histórias de Sucesso em Ambientes de Missão Crítica
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-brand-navy/75 max-w-3xl mx-auto leading-relaxed">
            Conheça os desafios reais enfrentados por nossos clientes e como nossa engenharia entregou estabilidade, redução drástica de custos e cibersegurança inabalável.
          </p>
        </div>
      </section>

      {/* Cases List */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {casesData.map((cs, idx) => (
            <div
              key={cs.slug}
              className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-card transition-all p-8 sm:p-12 overflow-hidden"
            >
              {/* Top Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-brand-navy">
                      {cs.client}
                    </h3>
                    <div className="text-xs text-brand-navy/60 font-medium">
                      Segmento: <strong className="text-brand-navy">{cs.segment}</strong>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cs.servicesUsed.map((svc, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-bold uppercase tracking-wider bg-brand-blue/10 text-brand-blue px-2.5 py-1 rounded-md"
                    >
                      {svc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title */}
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-brand-navy mb-8 leading-tight">
                {cs.title}
              </h2>

              {/* 3 Metrics Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200/80 mb-8">
                {cs.results.map((res, rIdx) => (
                  <div key={rIdx} className="text-center sm:text-left">
                    <div className="font-heading font-black text-3xl sm:text-4xl text-brand-navy">
                      {res.metric}
                    </div>
                    <div className="text-xs font-semibold text-brand-navy/70 mt-1">
                      {res.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Challenge vs Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-red-50/40 p-6 rounded-2xl border border-red-100/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-red-700 mb-2">
                    O Desafio do Cliente
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-navy/80 leading-relaxed">
                    {cs.challenge}
                  </p>
                </div>

                <div className="bg-emerald-50/40 p-6 rounded-2xl border border-emerald-100/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
                    A Solução da Inserti
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-navy/80 leading-relaxed">
                    {cs.solution}
                  </p>
                </div>
              </div>

              {/* Client Quote */}
              <div className="border-l-4 border-brand-blue pl-6 py-2 my-8 bg-slate-50/60 rounded-r-2xl">
                <p className="text-sm italic text-brand-navy/80 leading-relaxed mb-3">
                  &ldquo;{cs.quote.text}&rdquo;
                </p>
                <div className="text-xs font-bold text-brand-navy">
                  {cs.quote.author}
                </div>
                <div className="text-[11px] text-brand-navy/60">
                  {cs.quote.role}
                </div>
              </div>

              {/* Technologies footer */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-brand-navy/60">Tecnologias:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {cs.technologies.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-semibold text-brand-navy bg-slate-100 px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contato"
                  className="text-xs font-bold text-brand-blue hover:text-brand-navy inline-flex items-center gap-1.5"
                >
                  <span>Quero Resultados Semelhantes na Minha Empresa</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Sua Empresa Também Pode Ter uma TI Estável e Segura"
        subtitle="Agende uma conversa técnica e descubra como implementar um plano de modernização sob medida."
        badge="Casos de Sucesso Comprovados"
      />
    </div>
  );
}

