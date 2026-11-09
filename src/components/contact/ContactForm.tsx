"use client";

import React, { useRef, useState } from "react";
import { Send, CheckCircle2, Headphones, AlertCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { sendLead } from "@/lib/lead";
import { Turnstile, TurnstileHandle, turnstileEnabled } from "@/components/common/Turnstile";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    companySize: "30-100 computadores",
    service: "Proteção de dados",
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
        { label: "Interesse", value: formData.service },
        { label: "Porte", value: formData.companySize },
      ],
    });
    setLoading(false);
    if (result.ok) setSubmitted(true);
    else {
      setError(result.error ?? "Não foi possível enviar. Tente novamente.");
      turnstileRef.current?.reset();
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl text-center">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-heading font-black text-2xl text-brand-navy mb-3">
          Solicitação Recebida com Sucesso!
        </h3>
        <p className="text-sm text-brand-navy/70 leading-relaxed max-w-md mx-auto mb-8">
          Obrigado pelo contato, <strong>{formData.name}</strong>. Recebemos sua solicitação e nossa equipe entrará em contato em breve.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/${SITE_CONFIG.contact.whatsappClean}?text=${encodeURIComponent(
              `Olá! Acabei de enviar um formulário no site e gostaria de agilizar o contato. Meu nome é ${formData.name} da empresa ${formData.company}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 btn-cta-green rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2"
          >
            <Headphones className="w-4 h-4" />
            <span>Falar Agora no WhatsApp</span>
          </a>
          <button
            onClick={() => setSubmitted(false)}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-bold uppercase text-brand-navy bg-slate-100 hover:bg-slate-200"
          >
            Enviar Nova Mensagem
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl space-y-6"
    >
      <div className="border-b border-slate-100 pb-4">
        <h3 className="font-heading font-black text-xl text-brand-navy">
          Solicitar Diagnóstico ou Atendimento
        </h3>
        <p className="text-xs text-brand-navy/60 mt-1">
          Preencha os dados da sua empresa para falar diretamente com nossa equipe de engenharia.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
            Nome Completo *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Ex: Carlos Mendes"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-brand-navy focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
            E-mail Corporativo *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="carlos@suaempresa.com.br"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-brand-navy focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
            Telefone / WhatsApp *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="(11) 98765-4321"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-brand-navy focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
            Nome da Empresa *
          </label>
          <input
            type="text"
            required
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Sua Empresa Ltda"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-brand-navy focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
            Porte da Empresa (Computadores)
          </label>
          <select
            value={formData.companySize}
            onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-brand-navy focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all bg-white"
          >
            <option value="10-30 computadores">10 a 30 computadores</option>
            <option value="30-100 computadores">30 a 100 computadores</option>
            <option value="100-300 computadores">100 a 300 computadores</option>
            <option value="300+ computadores">Mais de 300 computadores</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
            Interesse Principal
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-brand-navy focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all bg-white"
          >
            <option value="Proteção de dados">Proteção de dados</option>
            <option value="Segurança da informação">Segurança da informação</option>
            <option value="Gestão e suporte de tecnologia">Gestão e suporte de tecnologia</option>
            <option value="Infraestrutura e soluções em nuvem">Infraestrutura e soluções em nuvem</option>
            <option value="Desenvolvimento, automação e inteligência artificial">Desenvolvimento, automação e inteligência artificial</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
          Como Podemos Ajudar? (Descreva a dor ou objetivo)
        </label>
        <textarea
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Ex: Estamos com problemas frequentes de lentidão nos servidores e queremos migrar para firewall Fortinet com suporte 24x7..."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-brand-navy focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all resize-none"
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

      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-xl text-xs font-bold tracking-wider uppercase bg-brand-navy hover:bg-brand-navy-600 text-white transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          {loading ? (
            <span>Processando solicitação...</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Falar com um especialista</span>
            </>
          )}
        </button>
      </div>

      <p className="text-[11px] text-center text-brand-navy/60">
        🔒 Seus dados estão seguros conosco sob a LGPD. Não enviamos spam.
      </p>
    </form>
  );
}

