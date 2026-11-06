import React from "react";
import { techPartners } from "@/data/partners";
import { ShieldCheck } from "lucide-react";

export function TechLogos() {
  // Lista repetida 4x: o loop é contínuo mesmo em telas largas
  const loop = [...techPartners, ...techPartners, ...techPartners, ...techPartners];

  return (
    <section className="pt-16 pb-20 bg-slate-50 border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue/10 text-brand-blue border border-brand-blue/20 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-blue" />
            <span>Ecossistema Global de Parceiros</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-brand-navy tracking-tight">
            Tecnologias Líderes Mundiais Homologadas pela Inserti
          </h2>
          <p className="mt-3 text-base text-brand-navy/70 leading-relaxed">
            Não improvisamos. Sustentamos sua operação com as fabricantes mais conceituadas do mundo, operando com arquiteturas recomendadas pelos próprios fabricantes.
          </p>
        </div>
      </div>

      <div className="relative [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused]">
          {loop.map((tech, i) => (
            <div
              key={`${tech.id}-${i}`}
              className="w-56 h-28 shrink-0 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center p-6"
            >
              {tech.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={tech.logo} alt={tech.name} className="max-h-full max-w-full object-contain" />
              ) : (
                <span className="font-heading font-extrabold text-lg text-brand-navy/70">{tech.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
