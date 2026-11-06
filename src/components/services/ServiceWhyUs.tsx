import React from "react";
import { Award, CheckCircle2, ShieldCheck } from "lucide-react";

interface ServiceWhyUsProps {
  whyInserti: {
    title: string;
    description: string;
  }[];
}

export function ServiceWhyUs({ whyInserti }: ServiceWhyUsProps) {
  return (
    <section className="py-20 bg-brand-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-dark pointer-events-none opacity-50" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue/20 text-brand-blue border border-brand-blue/30 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Diferenciais Estratégicos</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
            Por Que Escolher a Inserti?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyInserti.map((item, index) => (
            <div
              key={index}
              className="glass-card-dark rounded-2xl p-7 border border-white/10 hover:border-brand-blue/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-blue/20 border border-brand-blue/40 text-brand-blue flex items-center justify-center font-bold mb-5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-white/90">
                <CheckCircle2 className="w-4 h-4 text-brand-cta shrink-0" />
                <span>Padrão Internacional</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

