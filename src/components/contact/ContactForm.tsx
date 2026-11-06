"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Headphones, AlertCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    companySize: "30-100 computadores",
    service: "Proteção de dados",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate reliable submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
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
          Obrigado pelo contato, <strong>{formData.name}</strong>. Nosso especialista sênior entrará em contato em menos de 15 minutos úteis para apresentar o diagnóstico preliminar.
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
      className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl space-y-6"
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

