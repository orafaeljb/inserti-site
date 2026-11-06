import React from "react";
import Link from "next/link";
import { Headphones, ArrowRight, FileSearch } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  /** Versão simplificada: apenas o botão de WhatsApp (com este rótulo) e sem selos de confiança */
  simpleButtonLabel?: string;
  /** Segundo botão (WhatsApp) na versão simplificada; o primeiro passa a levar a primaryHref */
  secondaryButtonLabel?: string;
  primaryHref?: string;
}

export function CTASection({
  title = "Pronto para Elevar o Padrão de Tecnologia da sua Empresa?",
  subtitle = "Elimine paradas não planejadas, blinde sua operação contra ransomware e conte com engenheiros seniores cuidando da sua infraestrutura 24x7.",
  badge = "Diagnóstico Gratuito & Atendimento Consultivo",
  simpleButtonLabel,
  secondaryButtonLabel,
  primaryHref,
}: CTASectionProps) {
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden bg-brand-navy">
      {/* Background Decorative Mesh Gradients */}
      <div className="absolute inset-0 bg-mesh-dark pointer-events-none opacity-60" />
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-brand-blue/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-brand-navy-800 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue/20 text-brand-blue border border-brand-blue/30 mb-6">
          <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
          <span>{badge}</span>
        </div>

        {/* Title */}
        <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {/* CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {!simpleButtonLabel && (
          <Link
            href="/diagnostico"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold tracking-wider uppercase text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all inline-flex items-center justify-center gap-2.5 shadow-lg"
          >
            <FileSearch className="w-5 h-5 text-brand-blue" />
            <span>Solicitar Diagnóstico</span>
          </Link>
          )}

          {simpleButtonLabel && secondaryButtonLabel ? (
            <>
              <a
                href={primaryHref ?? "/contato"}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold tracking-wider uppercase btn-cta-green inline-flex items-center justify-center gap-2.5 shadow-glow-cta"
              >
                <span>{simpleButtonLabel}</span>
              </a>
              <Link
                href={`https://wa.me/${SITE_CONFIG.contact.whatsappClean}?text=${encodeURIComponent(
                  SITE_CONFIG.contact.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold tracking-wider uppercase text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all inline-flex items-center justify-center gap-2.5 shadow-lg"
              >
                <Headphones className="w-5 h-5 text-brand-blue" />
                <span>{secondaryButtonLabel}</span>
              </Link>
            </>
          ) : simpleButtonLabel && primaryHref ? (
            <a
              href={primaryHref}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold tracking-wider uppercase btn-cta-green inline-flex items-center justify-center gap-2.5 shadow-glow-cta"
            >
              <span>{simpleButtonLabel}</span>
            </a>
          ) : (
            <Link
              href="/contato"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold tracking-wider uppercase btn-cta-green inline-flex items-center justify-center gap-2.5 shadow-glow-cta"
            >
              <Headphones className="w-5 h-5" />
              <span>{simpleButtonLabel ?? "Falar com Especialista"}</span>
              {!simpleButtonLabel && <ArrowRight className="w-4 h-4" />}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

