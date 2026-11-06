import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  Target,
  Eye,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";
import { CTASection } from "@/components/common/CTASection";

export const metadata: Metadata = {
  alternates: { canonical: "/sobre" },
  title: "Sobre a Inserti: serviços gerenciados de TI",
  description:
    "A Inserti é uma empresa de tecnologia especializada em serviços gerenciados de TI, segurança da informação e infraestrutura tecnológica.",
  keywords: [
    "Sobre a Inserti",
    "Inserti Tecnologia",
    "serviços gerenciados de TI",
    "segurança da informação",
    "infraestrutura tecnológica",
  ],
};

const stats = [
  { value: "12+", label: "Anos de mercado", description: "Experiência em tecnologia e infraestrutura empresarial" },
  { value: "24x7", label: "Monitoramento contínuo", description: "Ambientes monitorados continuamente, com geração de alertas" },
  { value: "1.500+", label: "Dispositivos gerenciados", description: "Ativos sob gestão e acompanhamento da Inserti" },
  { value: "360°", label: "Segurança e proteção", description: "Atuação integrada em segurança, infraestrutura e proteção de dados." },
];

const values = [
  { title: "Ética e transparência", description: "Agimos com honestidade, responsabilidade e clareza em todas as nossas relações." },
  { title: "Respeito às pessoas", description: "Valorizamos clientes, colaboradores e parceiros, reconhecendo a importância de cada pessoa na construção dos resultados." },
  { title: "Compromisso com a excelência", description: "Buscamos qualidade em cada atendimento, projeto e entrega, sem deixar de aprender e evoluir." },
  { title: "Responsabilidade e pontualidade", description: "Respeitamos compromissos, prazos e responsabilidades assumidas." },
  { title: "Colaboração e trabalho em equipe", description: "Acreditamos que bons resultados são construídos com cooperação, troca de conhecimento e dedicação coletiva." },
  { title: "Evolução contínua", description: "Acompanhamos a transformação da tecnologia e buscamos aprimorar constantemente nossas soluções, processos e conhecimentos." },
];

export default function SobrePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue/10 text-brand-blue border border-brand-blue/20 mb-6">
            <Award className="w-3.5 h-3.5" />
            <span>Sobre a Inserti</span>
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-brand-navy tracking-tight leading-[1.15]">
            Tecnologia que mantém empresas em movimento.
          </h1>

          <div className="mt-6 space-y-4 text-base sm:text-lg text-brand-navy/75 leading-relaxed">
            <p>
              A Inserti é uma empresa de tecnologia especializada em serviços gerenciados de TI, segurança da informação e infraestrutura tecnológica.
            </p>
            <p>
              Atuamos ao lado das empresas para manter seus ambientes de tecnologia seguros, estáveis e preparados para acompanhar a evolução dos negócios.
            </p>
            <p>
              Mais do que resolver problemas, trabalhamos para antecipá-los. Por meio de monitoramento, gestão preventiva e suporte especializado, buscamos reduzir interrupções, proteger informações e garantir que a tecnologia seja uma aliada da operação empresarial.
            </p>
            <p>
              Acreditamos que uma boa TI não deve ser lembrada apenas quando algo deixa de funcionar. Ela precisa estar presente todos os dias, trabalhando nos bastidores para que as pessoas e os negócios possam avançar.
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center">
            <Link
              href="/contato"
              className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-brand-navy hover:bg-brand-navy-600 transition-colors shadow-sm"
            >
              Falar com um especialista
            </Link>
          </div>
        </div>
      </section>

      {/* Nossa forma de trabalhar */}
      <section className="py-20 lg:py-24 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue/10 text-brand-blue border border-brand-blue/20">
                <span>Nossa forma de trabalhar</span>
              </div>

              <div className="space-y-4">
                <h2 className="font-heading font-black text-3xl sm:text-4xl text-brand-navy tracking-tight leading-tight">
                  Prevenir é melhor do que remediar.
                </h2>
                <div className="text-sm sm:text-base text-brand-navy/75 space-y-4 leading-relaxed">
                  <p>Nossa atuação combina tecnologia, processos e conhecimento técnico para cuidar da infraestrutura dos nossos clientes.</p>
                  <p>Monitoramos ambientes, acompanhamos a disponibilidade dos recursos, administramos servidores e redes, gerenciamos soluções de segurança e backup e prestamos suporte especializado.</p>
                  <p>Não dependemos apenas de ferramentas. Contamos com profissionais que analisam cenários, identificam riscos e trabalham para manter a operação funcionando.</p>
                  <p>Nosso compromisso é estar atentos ao que acontece na infraestrutura dos clientes, agindo de forma proativa sempre que identificamos situações que possam comprometer seu funcionamento.</p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-heading font-black text-2xl sm:text-3xl text-brand-navy tracking-tight leading-tight">
                  Mais do que tecnologia, uma parceria.
                </h2>
                <div className="text-sm sm:text-base text-brand-navy/75 space-y-4 leading-relaxed">
                  <p>Entendemos que cada empresa possui necessidades, desafios e objetivos diferentes.</p>
                  <p>Por isso, buscamos compreender a realidade de cada cliente e oferecer soluções adequadas ao seu ambiente, considerando segurança, desempenho, disponibilidade e crescimento.</p>
                  <p>Nosso trabalho não termina na implantação de uma solução. Acompanhamos os ambientes e buscamos evoluí-los continuamente.</p>
                </div>
              </div>
            </div>

            {/* Right Card Numbers */}
            <div className="lg:col-span-6">
              <div className="bg-brand-navy text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-brand-blue/20 blur-3xl pointer-events-none" />

                <h3 className="font-heading font-black text-2xl text-white mb-6">
                  Nossa Solidez em Números
                </h3>

                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat) => (
                    <div key={stat.label} className="border-b border-white/10 pb-4">
                      <div className="font-heading font-black text-4xl text-brand-blue">{stat.value}</div>
                      <div className="text-sm font-bold text-white mt-1">{stat.label}</div>
                      <div className="text-xs text-white/70 mt-1 leading-relaxed">{stat.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-black text-2xl text-brand-navy mb-3">Nossa missão</h3>
              <p className="text-sm sm:text-base text-brand-navy/75 leading-relaxed">
                Oferecer serviços de tecnologia com excelência, proximidade e responsabilidade, ajudando nossos clientes a manter seus negócios seguros, produtivos e em funcionamento.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-black text-2xl text-brand-navy mb-3">Nossa visão</h3>
              <p className="text-sm sm:text-base text-brand-navy/75 leading-relaxed">
                Ser reconhecida pela qualidade dos serviços, confiança nas relações e capacidade de entregar soluções tecnológicas que geram valor real para os negócios de nossos clientes.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
            <h3 className="font-heading font-black text-2xl text-brand-navy mb-8 text-center sm:text-left">
              Nossos valores
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((val) => (
                <div key={val.title} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                    <h4 className="font-heading font-bold text-base text-brand-navy">{val.title}</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-navy/70 leading-relaxed pl-6">{val.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nosso compromisso */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue/10 text-brand-blue border border-brand-blue/20 mb-4">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Nosso compromisso</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-brand-navy tracking-tight leading-tight">
            A tecnologia muda. Os negócios evoluem. E a infraestrutura precisa acompanhar esse movimento.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-brand-navy/75 leading-relaxed">
            A Inserti existe para cuidar dessa estrutura, oferecendo experiência, conhecimento técnico e comprometimento para que nossos clientes possam concentrar sua energia no que realmente importa: fazer seus negócios crescerem.
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="Inserti. Tecnologia trabalhando pelo seu negócio."
        subtitle="Converse com a Inserti e conheça como podemos cuidar da infraestrutura da sua empresa."
        badge="Fale com a Inserti"
      />
    </div>
  );
}
