import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface ServiceProcessProps {
  process: {
    step: number;
    title: string;
    description: string;
  }[];
}

export function ServiceProcess({ process }: ServiceProcessProps) {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue/10 text-brand-blue border border-brand-blue/20 mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-cta" />
            <span>Fases de Execução</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-brand-navy tracking-tight">
            Como Implementamos Este Serviço
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step) => (
            <div
              key={step.step}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="font-heading font-black text-3xl text-brand-blue/30 mb-4">
                  0{step.step}
                </div>
                <h3 className="font-heading font-bold text-base text-brand-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-brand-navy/70 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-bold text-brand-navy">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-cta shrink-0" />
                <span>Etapa Concluída & Homologada</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

