"use client";

import React, { useState } from "react";
import { diagnosticQuestions } from "@/data/diagnostic";
import {
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Headphones,
  RotateCcw,
  Award,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function DiagnosticTool() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [isFinished, setIsFinished] = useState(false);

  const totalQuestions = diagnosticQuestions.length;
  const currentQuestion = diagnosticQuestions[currentStep];

  const handleSelectOption = (questionId: string, score: number) => {
    const updated = { ...selectedAnswers, [questionId]: score };
    setSelectedAnswers(updated);

    if (currentStep < totalQuestions - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const calculateTotalScore = () => {
    return Object.values(selectedAnswers).reduce((acc, curr) => acc + curr, 0);
  };

  const reset = () => {
    setSelectedAnswers({});
    setCurrentStep(0);
    setIsFinished(false);
  };

  const score = calculateTotalScore();

  const getMaturityDetails = () => {
    if (score >= 85) {
      return {
        level: "Nível Avançado / Padrão Internacional",
        color: "text-emerald-600 bg-emerald-50 border-emerald-200",
        description: "Sua infraestrutura possui governança madura e processos consolidados. O próximo passo é orquestração avançada, FinOps e automações de autorreparo (self-healing).",
        priority: "Otimização de Custos e Observabilidade Contínua",
      };
    } else if (score >= 60) {
      return {
        level: "Nível Intermediário / Parcialmente Protegido",
        color: "text-blue-600 bg-blue-50 border-blue-200",
        description: "Sua empresa possui proteções básicas, mas existem lacunas graves que podem ser exploradas por ransomware e causar paradas operacionais não planejadas.",
        priority: "Implementação de Backup Imutável e SOC 24x7",
      };
    } else if (score >= 35) {
      return {
        level: "Nível Básico / Reativo com Riscos Iminentes",
        color: "text-amber-600 bg-amber-50 border-amber-200",
        description: "Sua operação trabalha no modelo de 'apagar incêndios'. A falta de monitoramento contínuo e a vulnerabilidade na borda geram alto custo de paradas.",
        priority: "Migração urgente para MSP Proativo e Firewall de Próxima Geração",
      };
    } else {
      return {
        level: "Nível Crítico / Vulnerabilidade Severa",
        color: "text-red-600 bg-red-50 border-red-200",
        description: "Alerta Máximo: Sua empresa está altamente exposta a perda permanente de dados, sequestro de sistemas e paralisação completa de faturamento.",
        priority: "Auditoria Imediata e Estabilização Emergencial",
      };
    }
  };

  const maturity = getMaturityDetails();

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-10 max-w-4xl mx-auto">
      {!isFinished ? (
        <div>
          {/* Progress Header */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                Pergunta {currentStep + 1} de {totalQuestions}
              </span>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-brand-navy mt-1">
                {currentQuestion.category}
              </h3>
            </div>
            <div className="w-24 bg-slate-100 h-2 rounded-full overflow-hidden">
              <div
                className="bg-brand-blue h-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Text */}
          <div className="mb-8">
            <h4 className="font-heading font-bold text-lg sm:text-xl text-brand-navy mb-2">
              {currentQuestion.question}
            </h4>
            <p className="text-xs text-brand-navy/60 leading-relaxed">
              {currentQuestion.description}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectOption(currentQuestion.id, option.score)}
                className="w-full text-left p-5 rounded-2xl border-2 border-slate-200 hover:border-brand-blue hover:bg-brand-blue/5 transition-all flex items-start gap-4 group focus:outline-none"
              >
                <div className="w-6 h-6 rounded-full border-2 border-slate-300 group-hover:border-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex-1">
                  <span className="text-sm font-semibold text-brand-navy group-hover:text-brand-blue transition-colors block">
                    {option.label}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation Controls */}
          {currentStep > 0 && (
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="text-xs font-bold uppercase tracking-wider text-brand-navy/60 hover:text-brand-navy"
            >
              ← Voltar para a pergunta anterior
            </button>
          )}
        </div>
      ) : (
        /* Results View */
        <div className="animate-in fade-in duration-300">
          <div className="text-center pb-8 border-b border-slate-100 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-navy/5 text-brand-navy mb-4">
              <Award className="w-3.5 h-3.5 text-brand-blue" />
              <span>Diagnóstico de Maturidade Concluído</span>
            </div>

            <div className="font-heading font-black text-6xl text-brand-navy mb-2">
              {score}
              <span className="text-2xl text-brand-navy/40 font-normal"> / 100</span>
            </div>

            <div
              className={`inline-block px-4 py-1.5 rounded-xl border text-xs font-extrabold uppercase tracking-wider ${maturity.color} mb-4`}
            >
              {maturity.level}
            </div>

            <p className="text-sm text-brand-navy/70 max-w-xl mx-auto leading-relaxed">
              {maturity.description}
            </p>
          </div>

          {/* Priority Recommendation Box */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-1">
              Recomendação Prioritária da Engenharia
            </div>
            <div className="text-base font-bold text-brand-navy mb-2">
              {maturity.priority}
            </div>
            <p className="text-xs text-brand-navy/70 leading-relaxed">
              Nossa equipe consultiva pode conduzir um levantamento aprofundado sem custo para a sua empresa, identificando os gargalos exatos da sua infraestrutura e apresentando um plano de remediação.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsappClean}?text=${encodeURIComponent(
                `Olá! Fiz o Diagnóstico de Maturidade de TI no site da Inserti e tirei nota ${score}/100 (${maturity.level}). Gostaria de agendar uma reunião consultiva gratuita.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 btn-cta-green rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-glow-cta"
            >
              <Headphones className="w-4 h-4" />
              <span>Agendar Reunião com Especialista</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={reset}
              className="w-full sm:w-auto px-6 py-4 rounded-xl text-xs font-bold uppercase text-brand-navy bg-slate-100 hover:bg-slate-200 flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Refazer Diagnóstico</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

