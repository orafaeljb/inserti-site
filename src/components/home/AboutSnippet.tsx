import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Shield, Award, Users, Cpu } from "lucide-react";
import { aboutData } from "@/data/about";

export function AboutSnippet() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="bg-gradient-to-br from-brand-navy to-brand-navy-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-brand-blue/20 blur-2xl" />

                <div className="relative z-10 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue/20 text-brand-blue border border-brand-blue/30">
                    <Award className="w-3.5 h-3.5" />
                    <span>Nossa Trajetória</span>
                  </div>

                  <h3 className="font-heading font-black text-3xl tracking-tight leading-tight">
                    Mais de 14 Anos Redefinindo o Suporte de TI no Brasil
                  </h3>

                  <p className="text-sm text-white/75 leading-relaxed">
                    Nascemos para extinguir o modelo reativo de &apos;apagar incêndios&apos;. Hoje atuamos como a diretoria de tecnologia e o batalhão de segurança das organizações mais exigentes do país.
                  </p>

                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-blue/20 flex items-center justify-center text-brand-blue shrink-0">
                        <Shield className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold text-white/90">
                        SOC 24x7 e Proteção Avançada contra Ransomware
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-blue/20 flex items-center justify-center text-brand-blue shrink-0">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold text-white/90">
                        NOC Preditivo com Zabbix, Grafana e Telemetria
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-blue/20 flex items-center justify-center text-brand-blue shrink-0">
                        <Users className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold text-white/90">
                        vCIO e Consultoria Estratégica para Diretoria
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stat card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-2xl p-4 shadow-xl border border-brand-navy/10 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center font-heading font-black text-xl">
                  14+
                </div>
                <div>
                  <div className="text-xs font-bold text-brand-navy">Anos de Mercado</div>
                  <div className="text-[11px] text-brand-navy/60">Governança consolidada</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue/10 text-brand-blue border border-brand-blue/20">
              <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
              <span>Quem Somos</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-4xl text-brand-navy tracking-tight leading-tight">
              A Parceria Tecnológica que Sua Empresa Precisa para Escalar com Segurança
            </h2>

            <p className="text-base text-brand-navy/75 leading-relaxed">
              A <strong>Inserti</strong> é uma empresa especializada em serviços gerenciados de TI (MSP) e cibersegurança (MSSP). Não tratamos a tecnologia como um conjunto desconexo de máquinas, mas como o sistema circulatório que mantém seu faturamento ativo e sua equipe produtiva.
            </p>

            <p className="text-base text-brand-navy/75 leading-relaxed">
              Combinamos o rigor das certificações internacionais com um atendimento consultivo e próximo aos tomadores de decisão. Nossos clientes não lidam com robôs impessoais nem esperam dias por um retorno técnico: contam com engenheiros dedicados e um SLA rigoroso contratual.
            </p>

            {/* Core Values check list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-cta shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-brand-navy">
                  Metodologia estruturada em ITIL & CIS Controls
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-cta shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-brand-navy">
                  Transparência total sem multas contratuais abusivas
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-cta shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-brand-navy">
                  Monitoramento contínuo 24 horas por dia, 365 dias
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-cta shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-brand-navy">
                  Liderança com visão executiva de negócios (vCIO)
                </span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/sobre"
                className="px-6 py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase text-white bg-brand-navy hover:bg-brand-navy-600 transition-colors inline-flex items-center gap-2 shadow-sm"
              >
                <span>Conheça Nossa História e Valores</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

