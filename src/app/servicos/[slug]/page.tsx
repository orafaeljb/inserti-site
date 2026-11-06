import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData, getServiceBySlug } from "@/data/services";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProblem } from "@/components/services/ServiceProblem";
import { ServiceSolution } from "@/components/services/ServiceSolution";
import { ServiceObjectives } from "@/components/services/ServiceObjectives";
import { ServiceTechBanner } from "@/components/services/ServiceTechBanner";
import { ServiceBenefits } from "@/components/services/ServiceBenefits";
import { ServiceIncludedScope } from "@/components/services/ServiceIncludedScope";
import { ServiceDifferentials } from "@/components/services/ServiceDifferentials";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { CTASection } from "@/components/common/CTASection";
import { SITE_CONFIG } from "@/lib/constants";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    return {
      title: "Serviço Não Encontrado | Inserti",
    };
  }

  const url = `${SITE_CONFIG.url}/servicos/${service.slug}`;

  return {
    title: { absolute: service.seo.metaTitle },
    description: service.seo.metaDescription,
    keywords: service.seo.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: service.seo.metaTitle,
      description: service.seo.metaDescription,
      url: url,
      siteName: "Inserti Tecnologia",
      locale: "pt_BR",
      type: "website",
      images: [{ url: "/logo.png", alt: "Inserti Tecnologia" }],
    },
    twitter: {
      card: "summary",
      title: service.seo.metaTitle,
      description: service.seo.metaDescription,
      images: ["/logo.png"],
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  // Schema.org JSON-LD for Service + FAQPage
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE_CONFIG.url}/servicos/${service.slug}#service`,
        name: service.title,
        description: service.seo.metaDescription,
        url: `${SITE_CONFIG.url}/servicos/${service.slug}`,
        serviceType: service.groupName,
        provider: {
          "@type": "Organization",
          "@id": `${SITE_CONFIG.url}/#organization`,
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.url,
        },
        areaServed: {
          "@type": "Country",
          name: "Brasil",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: service.groupName,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.url },
          { "@type": "ListItem", position: 2, name: "Serviços", item: `${SITE_CONFIG.url}/servicos` },
          { "@type": "ListItem", position: 3, name: service.title, item: `${SITE_CONFIG.url}/servicos/${service.slug}` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <article className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero: Apresentar a solução e despertar interesse (com formulário alinhado a direita) */}
      <ServiceHero service={service} />

      {/* 2. O Problema: Mostrar as dores que o cliente enfrenta */}
      <ServiceProblem problem={service.problem} />

      {/* 3. Nossa Solução: Explicar como a Inserti resolve */}
      <ServiceSolution solution={service.solution} />

      {/* 4. Benefícios: Mostrar os resultados para o negócio */}
      {service.benefits.length > 0 && (
        <ServiceBenefits benefits={service.benefits} section={service.benefitsSection} />
      )}

      {service.objectivesSection && <ServiceObjectives section={service.objectivesSection} />}

      {service.scopeBeforeBanner ? (
        <>
          {/* 5. O Que Está Incluído: Explicar o escopo da contratação */}
          <ServiceIncludedScope includedScope={service.includedScope} section={service.scopeSection} />

          {service.techBanner && <ServiceTechBanner banner={service.techBanner} />}
        </>
      ) : (
        <>
          {service.techBanner && <ServiceTechBanner banner={service.techBanner} />}

          {/* 5. O Que Está Incluído: Explicar o escopo da contratação */}
          <ServiceIncludedScope includedScope={service.includedScope} section={service.scopeSection} />

        </>
      )}

      {service.managementSection && <ServiceObjectives section={service.managementSection} />}

      {service.comparisonSection && <ServiceObjectives section={service.comparisonSection} />}

      {/* 6. Diferenciais Inserti: Construir confiança e autoridade */}
      <ServiceDifferentials
        differentials={service.differentials}
        section={service.differentialsSection}
        visualSuggestion={service.visualSuggestion}
      />

      {/* 7. FAQ: Responder às principais objeções */}
      <ServiceFAQ faqs={service.faqs} title={service.faqTitle} />

      {/* 8. CTA Final: Converter o visitante em oportunidade */}
      {service.finalCta ? (
        <CTASection
          title={service.finalCta.title}
          subtitle={service.finalCta.subtitle}
          badge={service.finalCta.badge}
          simpleButtonLabel="Falar com um especialista"
          primaryHref="#form-lead"
        />
      ) : (
        <CTASection
          title={`Pronto para Implementar ${service.title} com Segurança?`}
          subtitle="Agende uma análise técnica sem compromisso com nossos engenheiros certificados e receba uma proposta estruturada para sua empresa."
          badge={`Especialização em ${service.groupName}`}
        />
      )}
    </article>
  );
}
