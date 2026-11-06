import React from "react";
import { TrendingUp, CheckCircle2 } from "lucide-react";

interface ServiceBenefitsProps {
  benefits: {
    title: string;
    description: string;
    metric?: string;
  }[];
  section?: { eyebrow: string; title: string };
}

export function ServiceBenefits({ benefits, section }: ServiceBenefitsProps) {
  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue/10 text-brand-blue border border-brand-blue/20 mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{section?.eyebrow ?? "Resultados para o Negócio"}</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-brand-navy tracking-tight leading-tight">
            {section?.title ?? "Benefícios Estratégicos & Retorno Sobre o Investimento"}
          </h2>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 ${benefits.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-6`}>
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-card hover:bg-white transition-all flex flex-col justify-between"
            >
              <div>
                {item.metric && (
                  <div className="font-heading font-black text-2xl text-brand-blue mb-3">
                    {item.metric}
                  </div>
                )}
                <h3 className="font-heading font-bold text-lg text-brand-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-navy/70 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {!section && (
              <div className="pt-4 mt-6 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-brand-navy">
                <CheckCircle2 className="w-4 h-4 text-brand-cta shrink-0" />
                <span>Garantia de Entrega</span>
              </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
