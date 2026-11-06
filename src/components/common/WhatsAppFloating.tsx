"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function WhatsAppFloating() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Bubble */}
      {isOpen && (
        <div className="mb-3 w-72 bg-white rounded-2xl shadow-2xl border border-brand-navy/10 p-4 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-cta animate-ping" />
              <span className="text-xs font-bold text-brand-navy">Especialista Online</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1"
              aria-label="Fechar balão do WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-brand-navy/70 my-3 leading-relaxed">
            Olá! Precisa de apoio com a infraestrutura, suporte ou cibersegurança da sua empresa? Fale diretamente com nossa engenharia.
          </p>
          <a
            href={`https://wa.me/${SITE_CONFIG.contact.whatsappClean}?text=${encodeURIComponent(
              SITE_CONFIG.contact.whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-2.5 btn-cta-green rounded-xl text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-glow-cta"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Iniciar Conversa</span>
          </a>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full btn-cta-green flex items-center justify-center text-white shadow-xl hover:scale-105 active:scale-95 transition-all group focus:outline-none"
        aria-label="Conversar com a Inserti no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform duration-200" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-brand-blue border-2 border-white flex items-center justify-center text-[9px] font-bold">
          1
        </span>
      </button>
    </div>
  );
}

