import React from "react";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import { Award, Shield, Clock, Monitor, CheckCircle2 } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      value: "12+",
      label: "Anos de mercado",
      sublabel: "Experiência em tecnologia e infraestrutura empresarial",
      icon: Award,
    },
    {
      value: "24x7",
      label: "Monitoramento contínuo",
      sublabel: "Ambientes monitorados continuamente, com geração de alertas",
      icon: Clock,
    },
    {
      value: "1.500+",
      label: "Dispositivos gerenciados",
      sublabel: "Ativos sob gestão e acompanhamento da Inserti",
      icon: Monitor,
    },
    {
      value: "360°",
      label: "Segurança e proteção",
      sublabel: "Atuação integrada em segurança, infraestrutura e proteção de dados.",
      icon: Shield,
    },
  ];

  return (
    <section className="py-16 bg-brand-navy relative overflow-hidden border-y border-brand-blue/20">
      <div className="absolute inset-0 bg-mesh-dark pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue/20 text-brand-blue border border-brand-blue/30 mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-cta" />
            <span>Nossos Números</span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
            Experiência e escala para cuidar da sua TI.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="glass-card-dark p-6 rounded-2xl border border-white/10 hover:border-brand-blue/40 transition-all text-center flex flex-col items-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center text-brand-blue mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight mb-2">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-base font-bold text-white mb-1">{stat.label}</div>
                <div className="text-xs text-white/60 leading-relaxed">{stat.sublabel}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

