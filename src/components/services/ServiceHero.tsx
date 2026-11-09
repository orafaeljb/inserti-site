"use client";

import React, { useRef, useState } from "react";
import { sendLead } from "@/lib/lead";
import { Turnstile, TurnstileHandle, turnstileEnabled } from "@/components/common/Turnstile";
import { ServiceItem } from "@/data/services";
import { SITE_CONFIG } from "@/lib/constants";
import {
  ShieldCheck,
  CheckCircle2,
  Headphones,
  Send,
  Lock,
  Sparkles,
  DatabaseBackup,
  ShieldAlert,
  CloudRain,
  ServerCog,
  Users,
  Wifi,
  Cloud,
  HardDrive,
  Boxes,
  Code,
  Workflow,
  Bot,
  Server,
} from "lucide-react";

// Fundos escuros por grupo de serviço: degradês sutis com os azuis da paleta do site
const groupThemes: Record<string, string> = {
  "Cyber Protect":
    "radial-gradient(circle at 85% 15%, rgba(0,139,224,0.30), transparent 55%), linear-gradient(135deg, #001f36 0%, #003155 55%, #075985 100%)",
  "Cyber Security":
    "radial-gradient(circle at 10% 90%, rgba(0,139,224,0.26), transparent 55%), linear-gradient(160deg, #000f1a 0%, #003155 60%, #0369a1 100%)",
  "Serviços de TI":
    "radial-gradient(circle at 90% 85%, rgba(56,189,248,0.22), transparent 55%), linear-gradient(130deg, #001f36 0%, #003155 60%, #0284c7 130%)",
  "Cloud e produtividade":
    "radial-gradient(circle at 50% -10%, rgba(56,189,248,0.28), transparent 60%), linear-gradient(120deg, #003155 0%, #075985 70%, #0c4a6e 100%)",
  "Soluções digitais e automação":
    "radial-gradient(circle at 80% 20%, rgba(0,139,224,0.28), transparent 55%), linear-gradient(145deg, #001728 0%, #003155 55%, #0369a1 120%)",
};
const defaultTheme = groupThemes["Serviços de TI"];

// Marca d'água discreta, conforme o ícone do serviço
const watermarkIcons: Record<string, React.ElementType> = {
  DatabaseBackup, ShieldAlert, CloudRain, ShieldCheck, ServerCog, Users, Wifi, Cloud, HardDrive, Boxes, Code, Workflow, Bot, Server,
};

interface ServiceHeroProps {
  service: ServiceItem;
}

export function ServiceHero({ service }: ServiceHeroProps) {
  const theme = { background: groupThemes[service.groupName] ?? defaultTheme };
  const WatermarkIcon = watermarkIcons[service.icon];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    website: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [consent, setConsent] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef<TurnstileHandle>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (turnstileEnabled && !turnstileToken) {
      setError("Confirme que você não é um robô.");
      return;
    }
    setLoading(true);
    setError("");
    const result = await sendLead({
      consent,
      turnstileToken,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      message: formData.message,
      website: formData.website,
      extras: [
        { label: "Serviço", value: service.title },
        ...(service.hero.form?.messageLabel
          ? [{ label: "Pergunta do formulário", value: service.hero.form.messageLabel }]
          : []),
      ],
    });
    setLoading(false);
    if (result.ok) setSubmitted(true);
    else {
      setError(result.error ?? "Não foi possível enviar. Tente novamente.");
      turnstileRef.current?.reset();
    }
  };

  return (
    <section
      className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden text-white"
      style={{ background: theme.background }}
    >
      {WatermarkIcon && (
        <WatermarkIcon
          aria-hidden="true"
          strokeWidth={1}
          className="absolute -right-16 top-1/2 -translate-y-1/2 w-[460px] h-[460px] text-white/[0.04] pointer-events-none hidden lg:block"
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 2-Column Grid: Copy (Left) + Lead Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Solution Presentation */}
          <div className="lg:col-span-7 space-y-6">
            {/* Group & Badge */}
            {service.hero.eyebrow ? (
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-blue-300">
                {service.hero.eyebrow}
              </span>
            ) : (
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-white border border-white/20">
                <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
                {service.groupName}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-white border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-brand-blue-300" />
                {service.badge}
              </span>
            </div>
            )}

            {/* H1 Title */}
            <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15]">
              {service.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal whitespace-pre-line">
              {service.hero.subtitle}
            </p>

            {service.hero.chips && (
              <div className="flex flex-wrap gap-2">
                {service.hero.chips.map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white border border-white/20"
                  >
                    {c}
                  </span>
                ))}
              </div>
            )}

            {/* Highlight Banner */}
            {service.hero.highlight && (
              <div className="p-3.5 bg-white/10 rounded-2xl border border-white/15 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-blue-300 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-white">
                  {service.hero.highlight}
                </span>
              </div>
            )}

            {service.hero.differentials ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {service.hero.differentials.map((d) => (
                  <div
                    key={d}
                    className="bg-white/10 p-3.5 rounded-2xl border border-white/15 flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-cta shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-white leading-snug">{d}</span>
                  </div>
                ))}
              </div>
            ) : service.hero.metrics.length === 0 ? null : (
              <>
            <div className="grid grid-cols-3 gap-3 pt-2">
              {service.hero.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 p-3.5 rounded-2xl border border-white/15"
                >
                  <div className="font-heading font-black text-lg sm:text-xl text-white">
                    {m.value}
                  </div>
                  <div className="text-[11px] text-white/70 font-medium leading-tight mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

              </>
            )}
          </div>

          {/* Right Column: High-Converting Lead Form Aligned to the Right */}
          <div className="lg:col-span-5 scroll-mt-24" id="form-lead">
            <div className="bg-white text-brand-navy rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200/90 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-brand-blue/10 blur-xl pointer-events-none" />

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                  <div className="border-b border-slate-100 pb-3">
                    <h2 className="font-heading font-normal text-lg sm:text-xl text-brand-navy leading-tight">
                      Falar com um especialista
                    </h2>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Carlos Mendes"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-brand-navy focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                        E-mail Corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="carlos@empresa.com.br"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-brand-navy focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                        WhatsApp / Celular *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(11) 98765-4321"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-brand-navy focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                      Nome da Empresa *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Sua Empresa Ltda"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-brand-navy focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                      {service.hero.form?.messageLabel ?? "Qual a principal necessidade hoje? (Opcional)"}
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Descreva brevemente o ambiente atual, dores ou objetivo..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-brand-navy focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Campo isca contra robôs (invisível para pessoas) */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="absolute -left-[9999px] h-0 w-0 opacity-0"
                  />

                  <label className="flex items-start gap-2.5 text-[11px] text-brand-navy/70 leading-snug cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 accent-brand-navy"
                    />
                    <span>
                      Li e concordo com a{" "}
                      <a href="/politica-de-privacidade" target="_blank" rel="noopener noreferrer" className="underline text-brand-navy hover:text-brand-blue">
                        Política de Privacidade
                      </a>{" "}
                      e autorizo o uso dos meus dados para que a Inserti entre em contato. *
                    </span>
                  </label>

                  {turnstileEnabled && <Turnstile ref={turnstileRef} onToken={setTurnstileToken} />}

                  {error && (
                    <p role="alert" className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                      {error}
                    </p>
                  )}

                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase bg-brand-navy hover:bg-brand-navy-600 text-white transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Enviando dados...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{service.hero.form?.button ?? "Solicitar Proposta e Diagnóstico"}</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Trust Signals Under Form */}
                  <div className="pt-2 flex items-center justify-between text-[10px] text-brand-navy/60">
                    <span className="flex items-center gap-1">
                      <Lock className="w-3 h-3 text-brand-blue" />
                      100% Seguro (LGPD)
                    </span>
                  </div>
                </form>
              ) : (
                <div className="text-center py-8 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-brand-navy mb-2">
                    Solicitação Recebida com Sucesso!
                  </h3>
                  <p className="text-xs text-brand-navy/70 leading-relaxed mb-6">
                    Obrigado, <strong>{formData.name}</strong>. Recebemos sua solicitação para {service.title} e nossa equipe entrará em contato em breve.
                  </p>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.contact.whatsappClean}?text=${encodeURIComponent(
                      `Olá! Acabei de enviar meus dados no site da Inserti para o serviço de ${service.title}. Meu nome é ${formData.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 btn-cta-green rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <Headphones className="w-4 h-4" />
                    <span>Agilizar Atendimento no WhatsApp</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
