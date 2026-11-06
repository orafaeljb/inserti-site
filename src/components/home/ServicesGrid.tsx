"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  ServerCog,
  Cloud,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Layers,
} from "lucide-react";
import { servicesData, serviceGroupsData } from "@/data/services";

export function ServicesGrid() {
  const featured = [
    { groupId: "cyber-protect", slug: "backup-empresarial" },
    { groupId: "cyber-security", slug: "firewall-como-servico" },
    { groupId: "servicos-ti", slug: "gestao-suporte-ti-msp" },
    { groupId: "cloud-produtividade", slug: "cloud-corporativa" },
    { groupId: "cloud-produtividade", slug: "microsoft-365" },
    { groupId: "solucoes-digitais-automacao", slug: "desenvolvimento-software-sob-demanda" },
  ].map(({ groupId, slug }) => ({
    group: serviceGroupsData.find((g) => g.id === groupId)!,
    service: servicesData.find((x) => x.slug === slug)!,
  }));

  return (
    <section className="pt-20 pb-16 lg:pt-24 lg:pb-16 bg-white relative overflow-hidden" id="servicos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue/10 text-brand-blue border border-brand-blue/20 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Portfólio de Soluções</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-brand-navy tracking-tight leading-tight">
            Especialidades Tecnológicas Estruturadas
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-navy/70 leading-relaxed">
            Proteção de dados, segurança da informação, suporte consultivo, soluções em nuvem e inteligência artificial aplicadas ao crescimento do seu negócio.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(({ group, service }) => (
            <div
              key={service.slug}
              className="bg-white rounded-3xl p-7 border border-slate-200 hover:border-brand-blue/40 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header Group & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue">
                    {group.name}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-extrabold text-xl text-brand-navy group-hover:text-brand-blue transition-colors mb-3">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-brand-navy/70 leading-relaxed mb-6 line-clamp-3">
                  {service.shortDescription}
                </p>

                {/* Key Benefits Preview */}
                <div className="space-y-2 border-t border-slate-100 pt-4 mb-6">
                  {service.benefits.slice(0, 2).map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-brand-navy/80">
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

              {/* Bottom Action Link to dedicated landing page */}
              <Link
                href={`/servicos/${service.slug}`}
                className="w-full py-3 rounded-xl text-xs font-bold tracking-wider text-brand-navy bg-slate-50 hover:bg-brand-blue hover:text-white transition-all flex items-center justify-center border border-slate-200 group-hover:border-brand-blue"
              >
                <span>Detalhes</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Catalog Action */}
        <div className="mt-14 text-center">
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs font-bold tracking-wider uppercase text-white bg-brand-navy hover:bg-brand-navy-600 transition-colors shadow-lg"
          >
            <span>Ver todas as soluções</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
