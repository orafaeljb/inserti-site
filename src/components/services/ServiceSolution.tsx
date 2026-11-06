import React from "react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

interface ServiceSolutionProps {
  solution: {
    eyebrow?: string;
    hideCardBadge?: boolean;
    title: string;
    description: string;
    features: { title: string; description: string }[];
  };
}

export function ServiceSolution({ solution }: ServiceSolutionProps) {
  return (
    <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue/10 text-brand-blue border border-brand-blue/20 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{solution.eyebrow ?? "Nossa Solução & Metodologia"}</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-brand-navy tracking-tight leading-tight">
            {solution.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-navy/70 leading-relaxed">
            {solution.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solution.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-card hover:border-brand-blue/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-navy/5 text-brand-blue flex items-center justify-center font-bold text-sm mb-4">
                  0{index + 1}
                </div>
                <h3 className="font-heading font-bold text-lg text-brand-navy mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-navy/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {!solution.hideCardBadge && (
              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-brand-navy">
                <CheckCircle2 className="w-4 h-4 text-brand-cta shrink-0" />
                <span>Padrão Corporativo Homologado</span>
              </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
