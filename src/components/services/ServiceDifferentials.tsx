import React from "react";
import { Award, CheckCircle2, ShieldCheck, HeartHandshake } from "lucide-react";

interface ServiceDifferentialsProps {
  differentials: {
    title: string;
    description: string;
  }[];
  section?: { eyebrow: string; title: string; description?: string };
  visualSuggestion?: {
    badge: string;
    title: string;
    description: string;
    elements: string[];
  };
}

export function ServiceDifferentials({
  differentials,
  section,
  visualSuggestion,
}: ServiceDifferentialsProps) {
  return (
    <section className="py-20 lg:py-24 bg-brand-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-dark pointer-events-none opacity-50" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue/20 text-brand-blue border border-brand-blue/30 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{section?.eyebrow ?? "Autoridade & Confiança"}</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            {section?.title ?? "Por Que Escolher a Inserti?"}
          </h2>
          {section?.description && (
            <p className="mt-4 text-base text-white/70">{section.description}</p>
          )}
          {!section && (
            <p className="mt-4 text-base text-white/70">
              Diferenciais que asseguram tranquilidade, governança e conformidade técnica para sua diretoria.
            </p>
          )}
        </div>

        {/* 3 Core Differentials Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 ${differentials.length === 4 ? "lg:grid-cols-4" : "md:grid-cols-3"} gap-6 mb-12`}>
          {differentials.map((item, index) => (
            <div
              key={index}
              className="glass-card-dark rounded-3xl p-8 border border-white/10 hover:border-brand-blue/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-blue/20 border border-brand-blue/40 text-brand-blue flex items-center justify-center font-bold mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {!section && (
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-white/90">
                <CheckCircle2 className="w-4 h-4 text-brand-cta shrink-0" />
                <span>Padrão Internacional</span>
              </div>
              )}
            </div>
          ))}
        </div>

        {/* Visual Architecture Suggestion Box */}
        {visualSuggestion && (
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10 mb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-blue/20 text-brand-blue px-2.5 py-1 rounded-md mb-2 inline-block">
                  {visualSuggestion.badge}
                </span>
                <h4 className="font-heading font-bold text-lg text-white">
                  {visualSuggestion.title}
                </h4>
              </div>
              <p className="text-xs text-white/60 max-w-md sm:text-right">
                {visualSuggestion.description}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {visualSuggestion.elements.map((el, eIdx) => (
                <div
                  key={eIdx}
                  className="bg-white/5 border border-white/10 p-3.5 rounded-xl text-center text-xs font-semibold text-white/80"
                >
                  {el}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

