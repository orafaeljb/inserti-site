import React from "react";
import type { Metadata } from "next";
import { HomeSlider } from "@/components/home/HomeSlider";
import { StatsSection } from "@/components/home/StatsSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { TechLogos } from "@/components/home/TechLogos";
import { HowWeWork } from "@/components/home/HowWeWork";
import { CTASection } from "@/components/common/CTASection";

export const metadata: Metadata = {
  title: { absolute: "Inserti Tecnologia | Gestão de TI, Segurança e Infraestrutura" },
  description:
    "Serviços gerenciados de TI, segurança da informação, backup, firewall, nuvem, desenvolvimento, automação e agentes de IA para empresas. Fale com a Inserti.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <h1 className="sr-only">
        Inserti Tecnologia: gestão de TI, segurança da informação e infraestrutura para empresas
      </h1>

      {/* 1. Slide Moderno no Topo (5 Slides de Alto Impacto) */}
      <HomeSlider />

      {/* 2. Nossos Números (14+ anos, certificados, 24x7, segmentos) */}
      <StatsSection />

      {/* 4. Portfólio de Serviços Estruturado (5 Grupos / 15 Soluções) */}
      <ServicesGrid />

      {/* 5. Tecnologias Líderes Mundiais Homologadas */}
      <TechLogos />

      {/* 6. Como Trabalhamos (Metodologia Consultiva) */}
      <HowWeWork />

      {/* 8. CTA Final */}
      <CTASection
        title="Transforme a Tecnologia da Sua Empresa com Quem Opera em Nível Internacional"
        subtitle="Agende uma conversa estratégica com nossos especialistas e descubra como garantir estabilidade, segurança e eficiência operacional."
        badge="Consultoria Inicial Sem Custo"
      />
    </>
  );
}
