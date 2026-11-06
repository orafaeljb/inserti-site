import React from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { Check, PackageCheck, Layers } from "lucide-react";

interface ServiceIncludedScopeProps {
  includedScope: {
    category: string;
    intro?: string;
    items: string[];
  }[];
  section?: {
    eyebrow: string;
    title: string;
    description?: string;
    note?: string;
    highlight?: { title: string; paragraphs: string[]; cta: string; whatsappMessage: string };
  };
}

export function ServiceIncludedScope({ includedScope, section }: ServiceIncludedScopeProps) {
  return (
    <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue/10 text-brand-blue border border-brand-blue/20 mb-3">
            <PackageCheck className="w-3.5 h-3.5" />
            <span>{section?.eyebrow ?? "Escopo da Contratação"}</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-brand-navy tracking-tight leading-tight">
            {section?.title ?? "O Que Está Incluído no Serviço"}
          </h2>
          {section?.description && (
            <p className="mt-4 text-base sm:text-lg text-brand-navy/70 leading-relaxed">
              {section.description}
            </p>
          )}
          {!section && (
            <p className="mt-4 text-base sm:text-lg text-brand-navy/70 leading-relaxed">
              Transparência total. Conheça exatamente tudo o que sua empresa recebe com a contratação da Inserti.
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {includedScope.map((block, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-card transition-all"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-navy">
                  {block.category}
                </h3>
              </div>

              {block.intro && (
                <p className="text-xs sm:text-sm text-brand-navy/70 mb-4">{block.intro}</p>
              )}

              <ul className="space-y-4">
                {block.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-brand-navy/85 font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {section?.highlight && (
          <div className="mt-10 bg-brand-navy text-white rounded-3xl p-8 sm:p-10 text-center">
            <h3 className="font-heading font-black text-2xl sm:text-3xl tracking-tight max-w-3xl mx-auto leading-tight">
              {section.highlight.title}
            </h3>
            <div className="mt-4 space-y-3 max-w-3xl mx-auto">
              {section.highlight.paragraphs.map((para, i) => (
                <p key={i} className="text-sm sm:text-base text-white/75 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsappClean}?text=${encodeURIComponent(
                section.highlight.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 btn-cta-green inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase"
            >
              {section.highlight.cta}
            </a>
          </div>
        )}

        {section?.note && (
          <p className="mt-8 text-center text-xs sm:text-sm text-brand-navy/60">{section.note}</p>
        )}
      </div>
    </section>
  );
}

