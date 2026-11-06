import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Headphones,
  FileSearch,
  ArrowRight,
  Activity,
  Server,
  Lock,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

export function HeroHome() {
  return (
    <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Background Decorative Tech Elements */}
      <div className="absolute inset-0 bg-mesh-light pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-brand-blue/10 via-brand-navy/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-navy/5 text-brand-navy border border-brand-navy/10 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-cta animate-ping"></span>
              <span className="text-brand-blue font-extrabold">MSP & MSSP DE ELITE</span>
              <span className="text-brand-navy/40">•</span>
              <span>14+ Anos de Excelência Corporativa</span>
            </div>

            {/* Impactful Title */}
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-brand-navy tracking-tight leading-[1.1]">
              Sua TI Gerenciada com{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-navy">
                Padrão Internacional
              </span>{" "}
              e Resiliência Absoluta
            </h1>

            {/* Convincing Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-brand-navy/75 leading-relaxed font-normal max-w-2xl">
              Elimine a instabilidade de sistemas, o risco de ransomware e despesas imprevisíveis de suporte. A Inserti assume a governança proativa da sua infraestrutura com <strong className="text-brand-navy font-semibold">NOC & SOC 24x7</strong>, especialistas certificados e atendimento consultivo contínuo.
            </p>

            {/* Two Compulsory CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/diagnostico"
                className="px-7 py-4 rounded-xl text-sm font-bold tracking-wider uppercase text-brand-navy bg-white hover:bg-slate-50 border-2 border-brand-navy/15 hover:border-brand-blue transition-all inline-flex items-center justify-center gap-2.5 shadow-sm group"
              >
                <FileSearch className="w-5 h-5 text-brand-blue group-hover:scale-110 transition-transform" />
                <span>Diagnóstico Gratuito</span>
              </Link>

              <Link
                href="/contato"
                className="px-7 py-4 rounded-xl text-sm font-bold tracking-wider uppercase btn-cta-green inline-flex items-center justify-center gap-2.5 shadow-glow-cta group"
              >
                <Headphones className="w-5 h-5" />
                <span>Falar com Especialista</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Fast Highlights Bar */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4">
              <div>
                <div className="font-heading font-extrabold text-lg text-brand-navy">99.98%</div>
                <div className="text-xs text-brand-navy/60 font-medium">Uptime Contratual</div>
              </div>
              <div>
                <div className="font-heading font-extrabold text-lg text-brand-navy">&lt; 15 min</div>
                <div className="text-xs text-brand-navy/60 font-medium">SLA de Resposta</div>
              </div>
              <div>
                <div className="font-heading font-extrabold text-lg text-brand-navy">24x7x365</div>
                <div className="text-xs text-brand-navy/60 font-medium">Operação Ininterrupta</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Enterprise Command Center Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Card: Live Operation Status */}
              <div className="glass-card rounded-3xl p-6 lg:p-8 shadow-2xl border border-brand-navy/10 relative overflow-hidden">
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center font-bold">
                      <Activity className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-brand-navy">NOC & SOC INSERTI</div>
                      <div className="text-[11px] text-brand-navy/60 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-brand-cta animate-pulse"></span>
                        Monitoramento Ativo em Tempo Real
                      </div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase bg-brand-blue/10 text-brand-blue border border-brand-blue/20">
                    Tier III Standards
                  </span>
                </div>

                {/* Metrics Stack */}
                <div className="py-6 space-y-4">
                  <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                        <Server className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-brand-navy">Servidores e VMs</div>
                        <div className="text-[11px] text-brand-navy/60">Cluster Proxmox & VMware</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      100% Saudável
                    </span>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-navy/10 text-brand-navy flex items-center justify-center">
                        <ShieldCheck className="w-4 h-4 text-brand-blue" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-brand-navy">Firewall & Borda</div>
                        <div className="text-[11px] text-brand-navy/60">Fortinet FortiGate Cluster HA</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded">
                      0 Ameaças
                    </span>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                        <Lock className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-brand-navy">Backup Imutável</div>
                        <div className="text-[11px] text-brand-navy/60">Retenção WORM em Nuvem</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      Sincronizado
                    </span>
                  </div>
                </div>

                {/* Card Footer Quote */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-brand-navy/70">
                  <span className="flex items-center gap-1 font-semibold text-brand-navy">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-cta" />
                    Engenharia Preditiva ITIL
                  </span>
                  <span>SLA Auditado</span>
                </div>
              </div>

              {/* Floating Badge Bottom Right */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-brand-navy text-white p-4 rounded-2xl shadow-xl border border-white/10 hidden sm:flex items-center gap-3 max-w-xs animate-in fade-in duration-300">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/20 border border-brand-blue/40 flex items-center justify-center text-brand-blue shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">-92% Incidentes Críticos</div>
                  <div className="text-[10px] text-white/70">Redução média nos primeiros 90 dias</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

