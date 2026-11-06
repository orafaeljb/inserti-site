import React from "react";
import { AlertTriangle, XCircle } from "lucide-react";

interface ServiceProblemProps {
  problem: {
    eyebrow?: string;
    title: string;
    description: string;
    painPoints: { title: string; description: string }[];
  };
}

export function ServiceProblem({ problem }: ServiceProblemProps) {
  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-red-50/40 rounded-3xl p-8 sm:p-12 border border-red-100/80">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100/80 text-red-700 mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>{problem.eyebrow ?? "O Problema & As Dores do Negócio"}</span>
          </div>

          <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-brand-navy tracking-tight mb-4">
            {problem.title}
          </h2>

          <p className="text-base text-brand-navy/75 leading-relaxed mb-10 max-w-4xl">
            {problem.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {problem.painPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-red-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                    <h3 className="font-heading font-bold text-base text-brand-navy">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-navy/70 leading-relaxed pl-8">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
