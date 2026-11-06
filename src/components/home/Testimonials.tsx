import React from "react";
import { testimonials } from "@/data/testimonials";
import { Quote, Star, CheckCircle2 } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue/10 text-brand-blue border border-brand-blue/20 mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-cta" />
            <span>Casos Reais & Depoimentos</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-brand-navy tracking-tight">
            A Confiança de Quem Opera em Missão Crítica
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-navy/70 leading-relaxed">
            Veja como a governança e o atendimento consultivo da Inserti transformaram a operação de líderes em setores com tolerância zero para falhas.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                {/* Metric and Stars */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
                  <div>
                    <div className="font-heading font-black text-3xl text-brand-navy">
                      {item.metric}
                    </div>
                    <div className="text-xs font-semibold text-brand-blue">
                      {item.metricLabel}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-sm text-brand-navy/80 leading-relaxed italic mb-8 relative">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-heading font-bold text-sm text-brand-navy">
                    {item.name}
                  </div>
                  <div className="text-xs text-brand-navy/60 font-medium">
                    {item.role} • <span className="text-brand-navy font-semibold">{item.company}</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-brand-navy/70 px-2.5 py-1 rounded-md">
                  {item.segment}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

