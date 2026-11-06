import React from "react";
import { Cpu, ShieldCheck } from "lucide-react";

interface ServiceTechStackProps {
  technologies: {
    name: string;
    description: string;
  }[];
}

export function ServiceTechStack({ technologies }: ServiceTechStackProps) {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue/10 text-brand-blue border border-brand-blue/20 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Stack de Tecnologias</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-brand-navy tracking-tight">
            Ferramentas e Plataformas Homologadas
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-navy/5 text-brand-blue flex items-center justify-center font-bold mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-base text-brand-navy mb-2">
                  {tech.name}
                </h3>
                <p className="text-xs text-brand-navy/70 leading-relaxed">
                  {tech.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[10px] font-bold text-brand-blue uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Certificação Oficial</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

