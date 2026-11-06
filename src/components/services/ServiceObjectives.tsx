import React from "react";
import { Target, Check } from "lucide-react";
import { ServiceItem } from "@/data/services";

interface ServiceObjectivesProps {
  section: NonNullable<ServiceItem["objectivesSection"]>;
}

export function ServiceObjectives({ section }: ServiceObjectivesProps) {
  return (
    <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue/10 text-brand-blue border border-brand-blue/20 mb-3">
            <Target className="w-3.5 h-3.5" />
            <span>{section.eyebrow}</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-brand-navy tracking-tight leading-tight">
            {section.title}
          </h2>
          {section.description && (
            <p className="mt-4 text-base sm:text-lg text-brand-navy/70 leading-relaxed">
              {section.description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {section.cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-card hover:border-brand-blue/30 transition-all"
            >
              <h3 className="font-heading font-bold text-lg text-brand-navy mb-2">{card.title}</h3>
              {card.description && (
                <p className="text-xs sm:text-sm text-brand-navy/70 leading-relaxed">{card.description}</p>
              )}
              {card.items && (
                <ul className="mt-4 space-y-2.5">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-brand-navy/85 font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {section.support && (
          <p className="mt-10 text-center text-sm sm:text-base text-brand-navy/80 max-w-3xl mx-auto leading-relaxed">
            {section.support}
          </p>
        )}
        {section.disclaimer && (
          <p className="mt-4 text-center text-xs text-brand-navy/55 italic max-w-3xl mx-auto leading-relaxed">
            {section.disclaimer}
          </p>
        )}
      </div>
    </section>
  );
}
