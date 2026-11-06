import React from "react";
import { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Headphones,
} from "lucide-react";
import { SocialLinks } from "@/components/common/SocialLinks";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: "/contato" },
  title: "Contato e Atendimento Comercial",
  description:
    "Fale com a Inserti: telefone, e-mail e formulário para solicitar atendimento de um especialista em TI, segurança e infraestrutura.",
  keywords: [
    "Contato Inserti",
    "Telefone Inserti",
    "WhatsApp Inserti",
    "Suporte de TI",
    "TI Campo Grande MS",
  ],
};

export default function ContatoPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue/10 text-brand-blue border border-brand-blue/20 mb-6">
            <Headphones className="w-3.5 h-3.5" />
            <span>Canais Oficiais de Atendimento</span>
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-5xl text-brand-navy tracking-tight leading-[1.15]">
            Fale com um Especialista em Tecnologia Corporativa
          </h1>

          <p className="mt-5 text-base sm:text-lg text-brand-navy/75 max-w-2xl mx-auto leading-relaxed">
            Estamos prontos para atender a sua empresa com atendimento consultivo, diagnóstico rápido e propostas transparentes.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Contact Cards */}
      <section className="py-16 -mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right: Direct Contacts & Operating Info */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Info Box */}
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
                <h4 className="font-heading font-bold text-lg text-brand-navy">
                  Contatos
                </h4>

                <div className="space-y-4 text-xs sm:text-sm text-brand-navy/80">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <a href={`tel:${SITE_CONFIG.contact.phoneClean}`} className="hover:text-brand-blue">
                      {SITE_CONFIG.contact.phone}
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-brand-blue">
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <span>{SITE_CONFIG.contact.address}</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <span>Segunda a Sexta, 07:30h às 17:30h</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200">
                  <div className="pt-4">
                    <SocialLinks variant="light" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

