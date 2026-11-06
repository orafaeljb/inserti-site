import React from "react";
import { Search, Wrench, Zap, Server, BarChart3, TrendingUp } from "lucide-react";

export function HowWeWork() {
  const steps = [
    { step: "01", icon: Search, title: "Diagnóstico", description: "Mapeamento do ambiente de TI e elaboração do Plano de Sucesso." },
    { step: "02", icon: Wrench, title: "Adequação", description: "Adequação técnica resolvendo conflitos e inconformidades." },
    { step: "03", icon: Zap, title: "Monitoramento", description: "Monitoramento constante 24/7 com correções preventivas." },
    { step: "04", icon: BarChart3, title: "Métricas", description: "Medição do impacto no negócio e acompanhamento de feedback." },
    { step: "05", icon: TrendingUp, title: "Evolução", description: "Alinhamento periódico para manter a constante evolução." },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue/10 text-brand-blue border border-brand-blue/20 mb-3">
            <Server className="w-3.5 h-3.5" />
            <span>Metodologia Consultiva</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-brand-navy tracking-tight">
            Como Trabalhamos: Do Caos à Estabilidade Absoluta
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-navy/70 leading-relaxed">
            Uma abordagem estruturada em frameworks internacionais (ITIL 4, CIS Controls) que garante previsibilidade, segurança e tranquilidade para sua diretoria.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 border border-brand-blue/40 shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading font-black text-3xl text-brand-blue">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading font-extrabold text-lg text-brand-blue mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs text-brand-navy/70 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

