import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { serviceGroupsData, getServiceBySlug } from "@/data/services";
import {
  Layers,
  ShieldCheck,
  Lock,
  ServerCog,
  Cloud,
  Cpu,
  CheckCircle2,
  Headphones,
  FileSearch,
} from "lucide-react";
import { CTASection } from "@/components/common/CTASection";

export const metadata: Metadata = {
  alternates: { canonical: "/servicos" },
  title: "Serviços de TI, Segurança e Nuvem para Empresas",
  description:
    "Soluções da Inserti em proteção de dados, segurança da informação, gestão e suporte de TI, infraestrutura em nuvem, desenvolvimento, automação e IA.",
  keywords: [
    "Serviços de TI",
    "Cyber Protect",
    "Cyber Security",
    "MSP",
    "Cloud Corporativa",
    "Agentes de IA",
    "Inserti Tecnologia",
  ],
};

export default function ServicosPage() {
  const groupIcons: Record<string, React.ElementType> = {
    "cyber-protect": ShieldCheck,
    "cyber-security": Lock,
    "servicos-ti": ServerCog,
    "cloud-produtividade": Cloud,
    "solucoes-digitais-automacao": Cpu,
  };

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue/10 text-brand-blue border border-brand-blue/20 mb-6">
            <Layers className="w-3.5 h-3.5" />
            <span>Portfólio de Soluções Corporativas</span>
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-brand-navy tracking-tight leading-[1.15]">
            Estrutura Completa de Serviços em Tecnologia e Segurança
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-brand-navy/75 max-w-3xl mx-auto leading-relaxed">
            Soluções estruturadas em 5 núcleos de excelência: proteção de dados, cibersegurança, gestão de TI proativa, computação em nuvem e inovação com agentes de IA.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/diagnostico"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase text-brand-navy bg-white hover:bg-slate-50 border-2 border-brand-navy/15 transition-all inline-flex items-center justify-center gap-2 shadow-sm"
            >
              <FileSearch className="w-4 h-4 text-brand-blue" />
              <span>Diagnóstico de TI Gratuito</span>
            </Link>
            <Link
              href="/contato"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase btn-cta-green inline-flex items-center justify-center gap-2 shadow-glow-cta"
            >
              <Headphones className="w-4 h-4" />
              <span>Falar com Especialista</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5 Service Groups */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {serviceGroupsData.map((group) => {
            const Icon = groupIcons[group.id] || ShieldCheck;
            return (
              <div key={group.id} className="space-y-8">
                {/* Group Header */}
                <div className="border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <h2 className="font-heading font-black text-2xl sm:text-3xl text-brand-navy">
                        {group.name}
                      </h2>
                      <p className="text-sm font-semibold text-brand-blue">
                        {group.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Specific Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.serviceSlugs.map((slug) => {
                    const service = getServiceBySlug(slug);
                    if (!service) return null;
                    return (
                      <div
                        key={service.slug}
                        className="bg-white rounded-3xl p-7 border border-slate-200 hover:border-brand-blue/40 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                      >
                        <div>
                          <h3 className="font-heading font-extrabold text-xl text-brand-navy group-hover:text-brand-blue transition-colors mb-3">
                            {service.title}
                          </h3>

                          <p className="text-xs text-brand-navy/70 leading-relaxed mb-6 line-clamp-3">
                            {service.shortDescription}
                          </p>

                          <div className="space-y-2 border-t border-slate-100 pt-4 mb-6">
                            {service.benefits.slice(0, 2).map((b, bIdx) => (
                              <div key={bIdx} className="flex items-center gap-2 text-[11px] text-brand-navy/80">
                                <CheckCircle2 className="w-3.5 h-3.5 text-brand-cta shrink-0" />
                                <span className="font-semibold line-clamp-1">{b.title}</span>
                                {b.metric && (
                                  <span className="ml-auto text-[10px] font-bold text-brand-blue bg-brand-blue/5 px-1.5 py-0.5 rounded shrink-0">
                                    {b.metric}
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        <Link
                          href={`/servicos/${service.slug}`}
                          className="w-full py-3 rounded-xl text-xs font-bold tracking-wider text-brand-navy bg-slate-50 hover:bg-brand-blue hover:text-white transition-all flex items-center justify-center border border-slate-200 group-hover:border-brand-blue"
                        >
                          <span>Detalhes</span>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Precisa de uma Solução Estruturada para sua Empresa?"
        subtitle="Nossos arquitetos sêniores desenham projetos sob medida integrando cibersegurança, nuvem, gestão de TI e automação com IA."
        badge="Projetos Personalizados"
      />
    </div>
  );
}
