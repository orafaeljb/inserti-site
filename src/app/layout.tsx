import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { WhatsAppFloating } from "@/components/common/WhatsAppFloating";
import { SITE_CONFIG } from "@/lib/constants";
import { servicesData } from "@/data/services";

export const viewport: Viewport = {
  themeColor: "#003155",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Inserti Tecnologia | Gestão de TI, Segurança e Infraestrutura",
    template: "%s | Inserti",
  },
  description:
    "Serviços gerenciados de TI, segurança da informação, backup, firewall, nuvem, desenvolvimento, automação e agentes de IA para empresas. Fale com a Inserti.",
  keywords: [
    "serviços gerenciados de TI",
    "gestão de TI",
    "suporte de TI para empresas",
    "segurança da informação",
    "backup empresarial",
    "firewall Fortinet",
    "cloud corporativa",
    "Microsoft 365",
    "agentes de IA",
    "automação de processos",
    "Inserti Tecnologia",
    "TI Campo Grande MS",
  ],
  authors: [{ name: "Inserti Tecnologia", url: SITE_CONFIG.url }],
  creator: "Inserti Sistemas de Informatica Ltda",
  publisher: "Inserti Tecnologia",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.png", shortcut: "/favicon.png", apple: "/favicon.png" },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Inserti Tecnologia | Gestão de TI, Segurança e Infraestrutura",
    description:
      "Serviços gerenciados de TI, segurança da informação e infraestrutura para empresas que precisam de tecnologia estável e protegida.",
    url: SITE_CONFIG.url,
    siteName: "Inserti Tecnologia",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/logo.png", alt: "Inserti Tecnologia" }],
  },
  twitter: {
    card: "summary",
    title: "Inserti Tecnologia | Gestão de TI, Segurança e Infraestrutura",
    description: "Serviços gerenciados de TI, segurança da informação e infraestrutura para empresas.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ITService"],
        "@id": `${SITE_CONFIG.url}/#organization`,
        name: SITE_CONFIG.name,
        legalName: SITE_CONFIG.legalName,
        url: SITE_CONFIG.url,
        logo: `${SITE_CONFIG.url}/logo.png`,
        image: `${SITE_CONFIG.url}/logo.png`,
        description: SITE_CONFIG.shortDescription,
        telephone: SITE_CONFIG.contact.phone,
        email: SITE_CONFIG.contact.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rua Vitorio Zeola, 313 - Caranda Bosque",
          addressLocality: "Campo Grande",
          addressRegion: "MS",
          postalCode: "79032-360",
          addressCountry: "BR",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:30",
          closes: "17:30",
        },
        areaServed: { "@type": "Country", name: "Brasil" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Soluções em tecnologia da informação e segurança",
          itemListElement: servicesData.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              url: `${SITE_CONFIG.url}/servicos/${service.slug}`,
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.url}/#website`,
        url: SITE_CONFIG.url,
        name: SITE_CONFIG.name,
        inLanguage: "pt-BR",
        publisher: { "@id": `${SITE_CONFIG.url}/#organization` },
      },
    ],
  };

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased text-brand-navy bg-white selection:bg-brand-blue selection:text-white">
        <Navbar />
        <main className="flex-1 pt-[72px]">{children}</main>
        <WhatsAppFloating />
        <Footer />
      </body>
    </html>
  );
}
