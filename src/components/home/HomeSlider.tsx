"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Server, Cloud, Bot, Monitor, Layers, Mail, Check, DatabaseBackup, RotateCcw, ShieldCheck } from "lucide-react";

/* ─── Slide data ─────────────────────────────────────────── */
const slides = [
  {
    id: "slide-1",
    eyebrow: "Cyber Protect | Proteção de dados",
    title: "Backup empresarial",
    titleHighlight: "gerenciado pela Inserti",
    subtitle:
      "Proteja servidores, computadores, máquinas virtuais e informações essenciais da sua empresa com backup e recuperação de dados baseados na tecnologia Acronis.",
    highlightWords: ["backup e recuperação de dados", "Acronis"],
    chips: ["Proteção de servidores", "Recuperação de dados", "Gestão e acompanhamento"],
    ctaLabel: "Conheça a solução",
    ctaHref: "/servicos/backup-empresarial",
    visual: <BackupVisual />,
  },
  {
    id: "slide-2",
    eyebrow: "Cyber Security | Segurança da informação",
    title: "Firewall como Serviço",
    titleHighlight: "Fortinet",
    subtitle:
      "Proteja a rede da sua empresa com tecnologia Fortinet e gestão especializada: políticas de acesso, controle do tráfego e acompanhamento contínuo da infraestrutura.",
    highlightWords: ["tecnologia Fortinet", "gestão especializada"],
    chips: ["Firewall empresarial", "Administração especializada", "Controle do tráfego de rede"],
    ctaLabel: "Conheça a solução",
    ctaHref: "/servicos/firewall-como-servico",
    visual: <FirewallVisual />,
  },
  {
    id: "slide-3",
    eyebrow: "Serviços de TI | MSP",
    title: "Gestão e suporte de TI",
    titleHighlight: "para sua empresa",
    subtitle:
      "Cuidamos da infraestrutura, dos sistemas e do suporte aos usuários para que sua empresa tenha uma operação de TI mais estável, segura e produtiva.",
    highlightWords: ["infraestrutura", "suporte aos usuários"],
    chips: ["Gestão proativa", "Suporte remoto e presencial", "Monitoramento contínuo"],
    ctaLabel: "Conheça a solução",
    ctaHref: "/servicos/gestao-suporte-ti-msp",
    visual: <MspVisual />,
  },
  {
    id: "slide-4",
    eyebrow: "Cloud e produtividade | Infraestrutura em nuvem",
    title: "Cloud corporativa",
    titleHighlight: "com custos previsíveis",
    subtitle:
      "Tenha servidores, aplicações e sistemas corporativos em uma infraestrutura hospedada no Brasil, em data center com certificação Tier III, com recursos personalizados e tráfego de rede ilimitado.",
    highlightWords: ["certificação Tier III", "tráfego de rede ilimitado"],
    chips: ["Data center Tier III no Brasil", "Tráfego de rede ilimitado", "Infra personalizada"],
    ctaLabel: "Conheça a solução",
    ctaHref: "/servicos/cloud-corporativa",
    visual: <CloudVisual />,
  },
  {
    id: "slide-5",
    eyebrow: "Soluções digitais e automação | Inteligência artificial",
    title: "Agentes de IA",
    titleHighlight: "para empresas",
    subtitle:
      "Agentes inteligentes integrados aos processos e ferramentas do seu negócio: atendem clientes, consultam informações e executam tarefas diretamente nos sistemas da empresa.",
    highlightWords: ["atendem clientes", "executam tarefas"],
    chips: ["Agentes personalizados", "WhatsApp, CRM e ERP", "Automação de processos"],
    ctaLabel: "Conheça a solução",
    ctaHref: "/servicos/agentes-ia-empresas",
    visual: <AiVisual />,
  },
];

/* ─── Visual Components (isometric-style illustrations) ──── */

function BackupVisual() {
  const monitoring = [
    "Execução dos backups acompanhada",
    "Integridade dos dados verificada",
    "Falhas e alertas tratados pela Inserti",
  ];
  return (
    <div className="relative w-full h-full max-w-md select-none">
      <div className="absolute -inset-6 rounded-[2rem] bg-brand-blue/10 blur-3xl" aria-hidden="true" />
      <div className="relative h-full flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-brand-blue/20 flex items-center justify-center">
              <DatabaseBackup className="w-5 h-5 text-[#00d4ff]" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white leading-tight">Proteção de dados</div>
              <div className="text-[11px] text-white/50">Backup gerenciado</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Ativo
          </div>
        </div>

        {/* Animação: dados saindo dos ambientes para o storage e a nuvem */}
        <svg
          viewBox="0 0 400 230"
          className="flex-1 min-h-0 w-full px-2 pt-2"
          role="img"
          aria-label="Animação mostrando dados de servidores, máquinas virtuais, estações e Microsoft 365 sendo enviados por um agente de backup para o storage e para a nuvem"
        >
          <text x="56" y="18" textAnchor="middle" fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.6)">AMBIENTES</text>
          <text x="190" y="18" textAnchor="middle" fontSize="10" fontWeight="600" fill="#00d4ff">BACKUP</text>
          <text x="346" y="18" textAnchor="middle" fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.6)">DESTINOS</text>

          <g>
            <rect x="4" y="36" width="104" height="28" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.18)" />
            <text x="56" y="54" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.85)">Servidores</text>
            <path id="bk-in-0" d="M108 50 C 145 50, 140 112, 170 112" fill="none" stroke="rgba(0,212,255,0.25)" strokeDasharray="3 4" />
            <circle r="3.5" fill="#00d4ff" opacity="0">
              <animateMotion dur="3s" begin="0.0s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                <mpath href="#bk-in-0" />
              </animateMotion>
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="3s" begin="0.0s" repeatCount="indefinite" />
            </circle>
          </g>
          <g>
            <rect x="4" y="86" width="104" height="28" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.18)" />
            <text x="56" y="104" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.85)">Máquinas virtuais</text>
            <path id="bk-in-1" d="M108 100 C 145 100, 140 112, 170 112" fill="none" stroke="rgba(0,212,255,0.25)" strokeDasharray="3 4" />
            <circle r="3.5" fill="#00d4ff" opacity="0">
              <animateMotion dur="3s" begin="0.6s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                <mpath href="#bk-in-1" />
              </animateMotion>
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="3s" begin="0.6s" repeatCount="indefinite" />
            </circle>
          </g>
          <g>
            <rect x="4" y="136" width="104" height="28" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.18)" />
            <text x="56" y="154" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.85)">Estações de trabalho</text>
            <path id="bk-in-2" d="M108 150 C 145 150, 140 112, 170 112" fill="none" stroke="rgba(0,212,255,0.25)" strokeDasharray="3 4" />
            <circle r="3.5" fill="#00d4ff" opacity="0">
              <animateMotion dur="3s" begin="1.2s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                <mpath href="#bk-in-2" />
              </animateMotion>
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="3s" begin="1.2s" repeatCount="indefinite" />
            </circle>
          </g>
          <g>
            <rect x="4" y="186" width="104" height="28" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.18)" />
            <text x="56" y="204" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.85)">Microsoft 365</text>
            <path id="bk-in-3" d="M108 200 C 145 200, 140 112, 170 112" fill="none" stroke="rgba(0,212,255,0.25)" strokeDasharray="3 4" />
            <circle r="3.5" fill="#00d4ff" opacity="0">
              <animateMotion dur="3s" begin="1.7999999999999998s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                <mpath href="#bk-in-3" />
              </animateMotion>
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="3s" begin="1.7999999999999998s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Agente de backup (centro) */}
          <circle cx="190" cy="112" r="26" fill="rgba(0,139,224,0.2)" stroke="#008be0" strokeWidth="1.5" />
          <circle cx="190" cy="112" r="26" fill="none" stroke="#00d4ff" strokeWidth="1">
            <animate attributeName="r" values="26;38;26" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
          </circle>
          <text x="190" y="110" textAnchor="middle" fontSize="8.5" fontWeight="600" fill="#fff">Backup</text>
          <text x="190" y="121" textAnchor="middle" fontSize="8.5" fontWeight="600" fill="#fff">gerenciado</text>

          {/* Destinos */}
          {[
            { id: "bk-out-0", y: 60, label: "Storage local", begin: 1.2 },
            { id: "bk-out-1", y: 164, label: "Nuvem", begin: 2.2 },
          ].map((d) => (
            <g key={d.id}>
              <path id={d.id} d={`M216 112 C 255 112, 255 ${d.y}, 292 ${d.y}`} fill="none" stroke="rgba(52,211,153,0.3)" strokeDasharray="3 4" />
              <rect x="292" y={d.y - 18} width="104" height="36" rx="8" fill="rgba(52,211,153,0.1)" stroke="rgba(52,211,153,0.45)" />
              <text x="344" y={d.y - 2} textAnchor="middle" fontSize="9.5" fontWeight="600" fill="rgba(255,255,255,0.9)">{d.label}</text>
              <text x="344" y={d.y + 11} textAnchor="middle" fontSize="8" fill="rgba(52,211,153,0.9)">Cópia recebida</text>
              <circle r="3.5" fill="#34d399" opacity="0">
                <animateMotion dur="2.4s" begin={`${d.begin}s`} repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                  <mpath href={`#${d.id}`} />
                </animateMotion>
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="2.4s" begin={`${d.begin}s`} repeatCount="indefinite" />
              </circle>
              <circle r="3.5" fill="#34d399" opacity="0">
                <animateMotion dur="2.4s" begin={`${d.begin + 1.2}s`} repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                  <mpath href={`#${d.id}`} />
                </animateMotion>
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="2.4s" begin={`${d.begin + 1.2}s`} repeatCount="indefinite" />
              </circle>
            </g>
          ))}
        </svg>

        {/* Monitoramento e gestão */}
        <div className="border-t border-white/10 bg-white/[0.03] px-5 py-3.5">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-white/50 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Monitoramento e gestão
          </div>
          <ul className="space-y-1.5">
            {monitoring.map((m) => (
              <li key={m} className="flex items-center gap-2 text-xs text-white/75">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function FirewallVisual() {
  const DUR = 4;
  // Cada pista: origem, se o pacote é permitido e quando começa (segundos)
  const lanes = [
    { y: 55, label: "Usuário remoto", allowed: true, begins: [0, 2] },
    { y: 100, label: "Ameaça externa", allowed: false, begins: [1, 3] },
    { y: 145, label: "Aplicação autorizada", allowed: true, begins: [2, 0] },
    { y: 190, label: "Tráfego suspeito", allowed: false, begins: [3, 1] },
  ];
  return (
    <div className="relative w-full h-full max-w-md select-none">
      <div className="absolute -inset-6 rounded-[2rem] bg-brand-blue/10 blur-3xl" aria-hidden="true" />
      <div className="relative h-full flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-brand-blue/20 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-[#00d4ff]" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white leading-tight">Segurança de rede</div>
              <div className="text-[11px] text-white/50">Firewall gerenciado</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Ativo
          </div>
        </div>

        {/* Animação: fluxo de pacotes sendo filtrados */}
        <svg
          viewBox="0 0 400 250"
          className="flex-1 min-h-0 w-full px-2 pt-2"
          role="img"
          aria-label="Animação mostrando o firewall permitindo o tráfego legítimo e bloqueando o tráfego malicioso"
        >
          {/* Títulos das zonas */}
          <text x="52" y="18" textAnchor="middle" fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.6)">INTERNET</text>
          <text x="200" y="18" textAnchor="middle" fontSize="10" fontWeight="600" fill="#00d4ff">FIREWALL</text>
          <text x="348" y="18" textAnchor="middle" fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.6)">REDE DA EMPRESA</text>

          {/* Barreira do firewall */}
          <rect x="194" y="28" width="12" height="190" rx="6" fill="rgba(0,139,224,0.35)" stroke="#008be0" strokeWidth="1.5" />
          <rect x="194" y="28" width="12" height="190" rx="6" fill="none" stroke="#00d4ff" strokeWidth="1">
            <animate attributeName="opacity" values="0.2;0.9;0.2" dur="2.5s" repeatCount="indefinite" />
          </rect>

          {/* Pistas */}
          {lanes.map((lane) => (
            <g key={lane.y}>
              <line x1="0" y1={lane.y} x2="400" y2={lane.y} stroke="rgba(255,255,255,0.07)" strokeDasharray="3 5" />
              <text x="4" y={lane.y - 9} fontSize="8.5" fill="rgba(255,255,255,0.5)">{lane.label}</text>

              {/* Destino na rede interna (apenas pistas permitidas) */}
              {lane.allowed && (
                <g>
                  <rect x="318" y={lane.y - 14} width="62" height="28" rx="6" fill="rgba(52,211,153,0.1)" stroke="rgba(52,211,153,0.4)" />
                  <text x="349" y={lane.y + 3} textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.8)">
                    {lane.y === 55 ? "Servidores" : "Sistemas"}
                  </text>
                </g>
              )}

              {/* Marca de bloqueio (X) no firewall */}
              {!lane.allowed &&
                lane.begins.map((b) => (
                  <path
                    key={`x-${b}`}
                    d={`M181 ${lane.y - 6} l12 12 M193 ${lane.y - 6} l-12 12`}
                    stroke="#f87171"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0"
                  >
                    <animate
                      attributeName="opacity"
                      values="0;0;1;1;0;0"
                      keyTimes="0;0.44;0.5;0.68;0.76;1"
                      dur={`${DUR}s`}
                      begin={`${b}s`}
                      repeatCount="indefinite"
                    />
                  </path>
                ))}

              {/* Pacotes */}
              {lane.begins.map((b) =>
                lane.allowed ? (
                  <rect key={`p-${b}`} y={lane.y - 5} width="16" height="10" rx="3" fill="#34d399" opacity="0">
                    <animate attributeName="x" values="70;302" dur={`${DUR}s`} begin={`${b}s`} repeatCount="indefinite" />
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0"
                      keyTimes="0;0.08;0.9;1"
                      dur={`${DUR}s`}
                      begin={`${b}s`}
                      repeatCount="indefinite"
                    />
                  </rect>
                ) : (
                  <rect key={`p-${b}`} y={lane.y - 5} width="16" height="10" rx="3" fill="#f87171" opacity="0">
                    <animate
                      attributeName="x"
                      values="70;164;164"
                      keyTimes="0;0.46;1"
                      dur={`${DUR}s`}
                      begin={`${b}s`}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0;0"
                      keyTimes="0;0.08;0.46;0.54;1"
                      dur={`${DUR}s`}
                      begin={`${b}s`}
                      repeatCount="indefinite"
                    />
                  </rect>
                )
              )}
            </g>
          ))}

          {/* Legenda */}
          <g transform="translate(70 238)">
            <rect x="0" y="-8" width="12" height="8" rx="2" fill="#34d399" />
            <text x="18" y="0" fontSize="9" fill="rgba(255,255,255,0.7)">Tráfego permitido</text>
            <rect x="130" y="-8" width="12" height="8" rx="2" fill="#f87171" />
            <text x="148" y="0" fontSize="9" fill="rgba(255,255,255,0.7)">Tráfego bloqueado</text>
          </g>
        </svg>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-white/10 bg-white/[0.03] text-xs text-white/65 leading-relaxed">
          O firewall inspeciona cada pacote e aplica as políticas de acesso da sua empresa: o que é legítimo passa, o que é suspeito é barrado.
        </div>
      </div>
    </div>
  );
}

function MspVisual() {
  const coverage = [
    "Infraestrutura e sistemas acompanhados",
    "Suporte remoto e presencial aos usuários",
    "Gestão preventiva do ambiente de TI",
  ];
  return (
    <div className="relative w-full h-full max-w-md select-none">
      <div className="absolute -inset-6 rounded-[2rem] bg-brand-blue/10 blur-3xl" aria-hidden="true" />
      <div className="relative h-full flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-brand-blue/20 flex items-center justify-center">
              <Server className="w-5 h-5 text-[#00d4ff]" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white leading-tight">Gestão de TI</div>
              <div className="text-[11px] text-white/50">Operação gerenciada</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Ativo
          </div>
        </div>

        {/* Animação: ciclo de acompanhamento e atendimento */}
        <svg
          viewBox="0 0 400 230"
          className="flex-1 min-h-0 w-full px-2 pt-2"
          role="img"
          aria-label="Animação do ciclo de gestão de TI: monitoramento, alerta, atendimento especializado e ambiente estável"
        >
          <text x="200" y="22" textAnchor="middle" fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.6)" letterSpacing="1.5">CICLO DE ACOMPANHAMENTO</text>
          <line x1="76" y1="95" x2="324" y2="95" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 5" />
          <g transform="translate(50 95)">
            <circle r="26" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.18)" />
            <circle r="26" fill="rgba(255,255,255,0.08)" stroke="#00d4ff" strokeWidth="2" opacity="0">
              <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.000;0.030;0.220;0.250;1" dur="8s" repeatCount="indefinite" />
            </circle>
            <circle r="26" fill="none" stroke="#00d4ff" strokeWidth="1" opacity="0">
              <animate attributeName="r" values="26;38" dur="2s" begin="0s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0" dur="2s" begin="0s" repeatCount="indefinite" />
            </circle>
            <polyline points="-10,0 -4,0 -1,-8 3,8 6,0 10,0" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <text x="50" y="143" textAnchor="middle" fontSize="10" fontWeight="600" fill="#fff">Monitoramento</text>
          <text x="50" y="157" textAnchor="middle" fontSize="8.5" fill="rgba(255,255,255,0.55)">Ambiente acompanhado</text>
          <g transform="translate(150 95)">
            <circle r="26" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.18)" />
            <circle r="26" fill="rgba(255,255,255,0.08)" stroke="#fbbf24" strokeWidth="2" opacity="0">
              <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.250;0.280;0.470;0.500;1" dur="8s" repeatCount="indefinite" />
            </circle>
            <circle r="26" fill="none" stroke="#fbbf24" strokeWidth="1" opacity="0">
              <animate attributeName="r" values="26;38" dur="2s" begin="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0" dur="2s" begin="2s" repeatCount="indefinite" />
            </circle>
            <path d="M0 -9 L9 7 H-9 Z" fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round" /><line x1="0" y1="-3" x2="0" y2="2" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          </g>
          <text x="150" y="143" textAnchor="middle" fontSize="10" fontWeight="600" fill="#fff">Alerta</text>
          <text x="150" y="157" textAnchor="middle" fontSize="8.5" fill="rgba(255,255,255,0.55)">Ocorrência identificada</text>
          <g transform="translate(250 95)">
            <circle r="26" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.18)" />
            <circle r="26" fill="rgba(255,255,255,0.08)" stroke="#00d4ff" strokeWidth="2" opacity="0">
              <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.500;0.530;0.720;0.750;1" dur="8s" repeatCount="indefinite" />
            </circle>
            <circle r="26" fill="none" stroke="#00d4ff" strokeWidth="1" opacity="0">
              <animate attributeName="r" values="26;38" dur="2s" begin="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0" dur="2s" begin="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="0" cy="-4" r="4.5" fill="none" stroke="#fff" strokeWidth="2" /><path d="M-9 9 C-9 2, 9 2, 9 9" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          </g>
          <text x="250" y="143" textAnchor="middle" fontSize="10" fontWeight="600" fill="#fff">Atendimento</text>
          <text x="250" y="157" textAnchor="middle" fontSize="8.5" fill="rgba(255,255,255,0.55)">Equipe especializada</text>
          <g transform="translate(350 95)">
            <circle r="26" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.18)" />
            <circle r="26" fill="rgba(255,255,255,0.08)" stroke="#34d399" strokeWidth="2" opacity="0">
              <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.750;0.780;0.970;1.000;1" dur="8s" repeatCount="indefinite" />
            </circle>
            <circle r="26" fill="none" stroke="#34d399" strokeWidth="1" opacity="0">
              <animate attributeName="r" values="26;38" dur="2s" begin="6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0" dur="2s" begin="6s" repeatCount="indefinite" />
            </circle>
            <polyline points="-8,0 -2,6 8,-6" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <text x="350" y="143" textAnchor="middle" fontSize="10" fontWeight="600" fill="#fff">Resolvido</text>
          <text x="350" y="157" textAnchor="middle" fontSize="8.5" fill="rgba(255,255,255,0.55)">Operação estável</text>
          {/* Seta de recomeço: o ciclo é contínuo */}
          <path d="M350 130 C 350 205, 50 205, 50 130" fill="none" stroke="rgba(255,255,255,0.12)" strokeDasharray="3 5" />
          <text x="200" y="200" textAnchor="middle" fontSize="8.5" fill="rgba(255,255,255,0.45)">acompanhamento contínuo</text>
        </svg>

        {/* Escopo da gestão */}
        <div className="border-t border-white/10 bg-white/[0.03] px-5 py-3.5">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-white/50 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            O que a Inserti cuida
          </div>
          <ul className="space-y-1.5">
            {coverage.map((c) => (
              <li key={c} className="flex items-center gap-2 text-xs text-white/75">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function CloudVisual() {
  const points = [
    "Mensalidade definida pelos recursos contratados",
    "Sem cobrança adicional por volume de tráfego",
    "Gestão completa de TI disponível",
  ];
  return (
    <div className="relative w-full h-full max-w-md select-none">
      <div className="absolute -inset-6 rounded-[2rem] bg-brand-blue/10 blur-3xl" aria-hidden="true" />
      <div className="relative h-full flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-brand-blue/20 flex items-center justify-center">
              <Cloud className="w-5 h-5 text-[#00d4ff]" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white leading-tight">Cloud corporativa</div>
              <div className="text-[11px] text-white/50">Infraestrutura em nuvem</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Online
          </div>
        </div>

        {/* Animação: empresa conectada à cloud, com recursos dimensionáveis */}
        <svg
          viewBox="0 0 400 230"
          className="flex-1 min-h-0 w-full px-2 pt-2"
          role="img"
          aria-label="Animação mostrando a empresa trocando dados com a cloud sem limite de tráfego e os recursos de CPU, memória e armazenamento sendo dimensionados"
        >
          <text x="56" y="22" textAnchor="middle" fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.6)">SUA EMPRESA</text>
          <text x="300" y="22" textAnchor="middle" fontSize="10" fontWeight="600" fill="#00d4ff">CLOUD INSERTI</text>

          {/* Empresa */}
          <rect x="6" y="40" width="102" height="150" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.18)" />
          {[58, 100, 142].map((y) => (
            <g key={y}>
              <rect x="30" y={y} width="54" height="30" rx="4" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
              <line x1="48" y1={y + 38} x2="66" y2={y + 38} stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
            </g>
          ))}
          <text x="57" y="206" textAnchor="middle" fontSize="8.5" fill="rgba(255,255,255,0.5)">Sistemas e usuários</text>

          {/* Conexão: tráfego nos dois sentidos */}
          <text x="158" y="76" textAnchor="middle" fontSize="8.5" fill="rgba(255,255,255,0.6)">tráfego ilimitado</text>
          <line x1="108" y1="95" x2="208" y2="95" stroke="rgba(0,212,255,0.2)" strokeDasharray="3 5" />
          <line x1="108" y1="135" x2="208" y2="135" stroke="rgba(52,211,153,0.2)" strokeDasharray="3 5" />
          <rect y="91" width="12" height="8" rx="2" fill="#00d4ff" opacity="0">
            <animate attributeName="x" values="108;208" dur="2.4s" begin="0s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="2.4s" begin="0s" repeatCount="indefinite" />
          </rect>
          <rect y="91" width="12" height="8" rx="2" fill="#00d4ff" opacity="0">
            <animate attributeName="x" values="108;208" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
          </rect>
          <rect y="91" width="12" height="8" rx="2" fill="#00d4ff" opacity="0">
            <animate attributeName="x" values="108;208" dur="2.4s" begin="1.6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="2.4s" begin="1.6s" repeatCount="indefinite" />
          </rect>
          <rect y="131" width="12" height="8" rx="2" fill="#34d399" opacity="0">
            <animate attributeName="x" values="208;108" dur="2.4s" begin="0.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="2.4s" begin="0.4s" repeatCount="indefinite" />
          </rect>
          <rect y="131" width="12" height="8" rx="2" fill="#34d399" opacity="0">
            <animate attributeName="x" values="208;108" dur="2.4s" begin="1.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="2.4s" begin="1.2s" repeatCount="indefinite" />
          </rect>
          <rect y="131" width="12" height="8" rx="2" fill="#34d399" opacity="0">
            <animate attributeName="x" values="208;108" dur="2.4s" begin="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="2.4s" begin="2s" repeatCount="indefinite" />
          </rect>

          {/* Cloud */}
          <rect x="212" y="40" width="182" height="150" rx="10" fill="rgba(0,139,224,0.1)" stroke="rgba(0,139,224,0.5)" />
          <text x="224" y="62" fontSize="9" fontWeight="600" fill="#fff">Recursos dimensionados</text>
          <text x="224" y="100" fontSize="8.5" fill="rgba(255,255,255,0.7)">vCPU</text>
          <rect x="224" y="105" width="152" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
          <rect x="224" y="105" width="60" height="6" rx="3" fill="#00d4ff">
            <animate attributeName="width" values="35;90;35" dur="7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.2 1;0.4 0 0.2 1" />
          </rect>
          <text x="224" y="132" fontSize="8.5" fill="rgba(255,255,255,0.7)">Memória RAM</text>
          <rect x="224" y="137" width="152" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
          <rect x="224" y="137" width="60" height="6" rx="3" fill="#00d4ff">
            <animate attributeName="width" values="50;100;50" dur="9s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.2 1;0.4 0 0.2 1" />
          </rect>
          <text x="224" y="164" fontSize="8.5" fill="rgba(255,255,255,0.7)">Armazenamento</text>
          <rect x="224" y="169" width="152" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
          <rect x="224" y="169" width="60" height="6" rx="3" fill="#00d4ff">
            <animate attributeName="width" values="60;130;60" dur="11s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.2 1;0.4 0 0.2 1" />
          </rect>
          <text x="303" y="206" textAnchor="middle" fontSize="8.5" fill="rgba(255,255,255,0.5)">Data center Tier III · Brasil</text>
        </svg>

        {/* Pontos-chave */}
        <div className="border-t border-white/10 bg-white/[0.03] px-5 py-3.5">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-white/50 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Custo previsível
          </div>
          <ul className="space-y-1.5">
            {points.map((c) => (
              <li key={c} className="flex items-center gap-2 text-xs text-white/75">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function AiVisual() {
  const points = [
    "Integração com WhatsApp, CRM e ERP",
    "Acessos e limites de atuação definidos pela empresa",
    "Supervisão humana quando necessário",
  ];
  return (
    <div className="relative w-full h-full max-w-md select-none">
      <div className="absolute -inset-6 rounded-[2rem] bg-brand-blue/10 blur-3xl" aria-hidden="true" />
      <div className="relative h-full flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-brand-blue/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-[#00d4ff]" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white leading-tight">Agente de IA</div>
              <div className="text-[11px] text-white/50">Integrado aos seus sistemas</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Ativo
          </div>
        </div>

        {/* Animação: solicitação, consulta aos sistemas e resposta */}
        <svg
          viewBox="0 0 400 230"
          className="flex-1 min-h-0 w-full px-2 pt-2"
          role="img"
          aria-label="Animação de um agente de IA recebendo a solicitação de um cliente, consultando CRM, ERP e documentos e devolvendo a resposta"
        >
          <text x="53" y="22" textAnchor="middle" fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.6)">CLIENTE</text>
          <text x="190" y="22" textAnchor="middle" fontSize="10" fontWeight="600" fill="#00d4ff">AGENTE DE IA</text>
          <text x="345" y="22" textAnchor="middle" fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.6)">SISTEMAS</text>

          {/* Mensagem do cliente */}
          <g opacity="0">
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.02;0.92;0.99" dur="8s" repeatCount="indefinite" />
            <rect x="6" y="48" width="94" height="38" rx="9" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" />
            <line x1="16" y1="60" x2="84" y2="60" stroke="rgba(255,255,255,0.45)" strokeWidth="3" strokeLinecap="round" />
            <line x1="16" y1="72" x2="62" y2="72" stroke="rgba(255,255,255,0.3)" strokeWidth="3" strokeLinecap="round" />
          </g>
          <text x="53" y="102" textAnchor="middle" fontSize="8.5" fill="rgba(255,255,255,0.5)">solicitação</text>

          {/* Resposta ao cliente */}
          <g opacity="0">
            <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.8;0.84;0.97;1" dur="8s" repeatCount="indefinite" />
            <rect x="6" y="140" width="94" height="38" rx="9" fill="rgba(52,211,153,0.12)" stroke="rgba(52,211,153,0.55)" />
            <line x1="16" y1="152" x2="84" y2="152" stroke="rgba(52,211,153,0.9)" strokeWidth="3" strokeLinecap="round" />
            <line x1="16" y1="164" x2="70" y2="164" stroke="rgba(52,211,153,0.6)" strokeWidth="3" strokeLinecap="round" />
          </g>
          <text x="53" y="194" textAnchor="middle" fontSize="8.5" fill="rgba(255,255,255,0.5)">resposta</text>

          <path id="ai-in" d="M100 67 C 135 67, 135 105, 160 108" fill="none" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 4" />
          <path id="ai-out" d="M162 118 C 135 125, 135 159, 100 159" fill="none" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 4" />
          <circle r="3.5" fill="#00d4ff" opacity="0">
            <animateMotion dur="8s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0;1;1" keyTimes="0;0.040;0.180;1">
              <mpath href="#ai-in" />
            </animateMotion>
            <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.040;0.055;0.165;0.180;1" dur="8s" repeatCount="indefinite" />
          </circle>
          <circle r="3.5" fill="#34d399" opacity="0">
            <animateMotion dur="8s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0;1;1" keyTimes="0;0.720;0.840;1">
              <mpath href="#ai-out" />
            </animateMotion>
            <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.720;0.735;0.825;0.840;1" dur="8s" repeatCount="indefinite" />
          </circle>

          {/* Agente (centro) */}
          <circle cx="190" cy="112" r="28" fill="rgba(0,139,224,0.2)" stroke="#008be0" strokeWidth="1.5" />
          <circle cx="190" cy="112" r="28" fill="none" stroke="#00d4ff" strokeWidth="1">
            <animate attributeName="r" values="28;40;28" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0;0.6" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <text x="190" y="110" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">Agente</text>
          <text x="190" y="122" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">de IA</text>
          <text x="190" y="156" textAnchor="middle" fontSize="8.5" fill="rgba(255,255,255,0.5)">interpreta e decide</text>

          <path id="ai-t-0" d="M218 112 C 255 112, 255 55, 296 55" fill="none" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 4" />
          <rect x="296" y="40" width="98" height="30" rx="7" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.18)" />
          <rect x="296" y="40" width="98" height="30" rx="7" fill="rgba(0,212,255,0.12)" stroke="#00d4ff" opacity="0">
            <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.220;0.240;0.460;0.480;1" dur="8s" repeatCount="indefinite" />
          </rect>
          <text x="345" y="59" textAnchor="middle" fontSize="10" fontWeight="600" fill="#fff">CRM</text>
          <circle r="3.5" fill="#00d4ff" opacity="0">
            <animateMotion dur="8s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0;1;1" keyTimes="0;0.220;0.360;1">
              <mpath href="#ai-t-0" />
            </animateMotion>
            <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.220;0.235;0.345;0.360;1" dur="8s" repeatCount="indefinite" />
          </circle>
          <circle r="3.5" fill="#34d399" opacity="0">
            <animateMotion dur="8s" repeatCount="indefinite" calcMode="linear" keyPoints="1;1;0;0" keyTimes="0;0.400;0.540;1">
              <mpath href="#ai-t-0" />
            </animateMotion>
            <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.400;0.415;0.525;0.540;1" dur="8s" repeatCount="indefinite" />
          </circle>
          <path id="ai-t-1" d="M218 112 C 255 112, 255 112, 296 112" fill="none" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 4" />
          <rect x="296" y="97" width="98" height="30" rx="7" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.18)" />
          <rect x="296" y="97" width="98" height="30" rx="7" fill="rgba(0,212,255,0.12)" stroke="#00d4ff" opacity="0">
            <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.260;0.280;0.500;0.520;1" dur="8s" repeatCount="indefinite" />
          </rect>
          <text x="345" y="116" textAnchor="middle" fontSize="10" fontWeight="600" fill="#fff">ERP</text>
          <circle r="3.5" fill="#00d4ff" opacity="0">
            <animateMotion dur="8s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0;1;1" keyTimes="0;0.260;0.400;1">
              <mpath href="#ai-t-1" />
            </animateMotion>
            <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.260;0.275;0.385;0.400;1" dur="8s" repeatCount="indefinite" />
          </circle>
          <circle r="3.5" fill="#34d399" opacity="0">
            <animateMotion dur="8s" repeatCount="indefinite" calcMode="linear" keyPoints="1;1;0;0" keyTimes="0;0.440;0.580;1">
              <mpath href="#ai-t-1" />
            </animateMotion>
            <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.440;0.455;0.565;0.580;1" dur="8s" repeatCount="indefinite" />
          </circle>
          <path id="ai-t-2" d="M218 112 C 255 112, 255 169, 296 169" fill="none" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 4" />
          <rect x="296" y="154" width="98" height="30" rx="7" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.18)" />
          <rect x="296" y="154" width="98" height="30" rx="7" fill="rgba(0,212,255,0.12)" stroke="#00d4ff" opacity="0">
            <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.300;0.320;0.540;0.560;1" dur="8s" repeatCount="indefinite" />
          </rect>
          <text x="345" y="173" textAnchor="middle" fontSize="10" fontWeight="600" fill="#fff">Documentos</text>
          <circle r="3.5" fill="#00d4ff" opacity="0">
            <animateMotion dur="8s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0;1;1" keyTimes="0;0.300;0.440;1">
              <mpath href="#ai-t-2" />
            </animateMotion>
            <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.300;0.315;0.425;0.440;1" dur="8s" repeatCount="indefinite" />
          </circle>
          <circle r="3.5" fill="#34d399" opacity="0">
            <animateMotion dur="8s" repeatCount="indefinite" calcMode="linear" keyPoints="1;1;0;0" keyTimes="0;0.480;0.620;1">
              <mpath href="#ai-t-2" />
            </animateMotion>
            <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.480;0.495;0.605;0.620;1" dur="8s" repeatCount="indefinite" />
          </circle>
        </svg>

        {/* Pontos-chave */}
        <div className="border-t border-white/10 bg-white/[0.03] px-5 py-3.5">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-white/50 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            IA com controle
          </div>
          <ul className="space-y-1.5">
            {points.map((c) => (
              <li key={c} className="flex items-center gap-2 text-xs text-white/75">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ─── Utility: highlight specific words in a string ─────── */
function HighlightedText({
  text,
  keywords,
}: {
  text: string;
  keywords: string[];
}) {
  if (!keywords.length) return <>{text}</>;
  const escaped = keywords.map((k) =>
    k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const regex = new RegExp(`(${escaped.join("|")})`, "gi");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        keywords.some((k) => k.toLowerCase() === part.toLowerCase()) ? (
          <span key={i} className="text-[#00d4ff] font-semibold">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

/* ─── Main Component ─────────────────────────────────────── */
export function HomeSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchX, setTouchX] = useState<number | null>(null);

  const total = slides.length;

  const goTo = useCallback(
    (idx: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(idx);
      setTimeout(() => setIsAnimating(false), 400);
    },
    [isAnimating]
  );

  const prev = useCallback(() => {
    goTo((current - 1 + total) % total);
  }, [current, total, goTo]);

  const next = useCallback(() => {
    goTo((current + 1) % total);
  }, [current, total, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, 6500);
    return () => clearInterval(id);
  }, [isPaused, next]);

  const slide = slides[current];

  return (
    <section
      className="relative w-full overflow-hidden h-[520px] sm:h-[560px]"
      style={{ background: "#080f1e" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX === null) return;
        const dx = e.changedTouches[0].clientX - touchX;
        setTouchX(null);
        if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
      }}
      aria-label="Destaques da Inserti"
    >
      {/* ── Background diagonal accent ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, transparent 55%, rgba(0,49,85,0.55) 100%)",
        }}
      />
      {/* ── LEFT LATERAL ARROW ────────────────────────────── */}
      <button
        onClick={prev}
        aria-label="Slide anterior"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-10 h-14 hidden sm:flex items-center justify-center transition-colors"
        style={{ background: "rgba(255,255,255,0.08)" }}
        onMouseEnter={(e) =>
        ((e.currentTarget as HTMLButtonElement).style.background =
          "rgba(255,255,255,0.15)")
        }
        onMouseLeave={(e) =>
        ((e.currentTarget as HTMLButtonElement).style.background =
          "rgba(255,255,255,0.08)")
        }
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>

      {/* ── SLIDE CONTENT ─────────────────────────────────── */}
      <div
        className="max-w-7xl mx-auto h-full px-5 sm:px-14 lg:px-20 pt-8 pb-14 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
      >
        {/* Left: text */}
        <div
          className="space-y-4 sm:space-y-6 text-white"
          style={{
            opacity: isAnimating ? 0 : 1,
            transform: isAnimating ? "translateY(10px)" : "translateY(0)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
          }}
        >
          {"eyebrow" in slide && slide.eyebrow && (
            <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[#00d4ff]">
              {slide.eyebrow}
            </div>
          )}

          <h2 className="font-heading font-black leading-tight" style={{ fontSize: "clamp(1.75rem, 4vw, 3.4rem)" }}>
            {slide.title}
            {slide.titleHighlight && (
              <>
                {" "}
                <span className="text-[#00d4ff]">{slide.titleHighlight}</span>
              </>
            )}
          </h2>

          <p className="text-white/75 leading-relaxed text-sm sm:text-base lg:text-lg max-w-lg">
            <HighlightedText text={slide.subtitle} keywords={slide.highlightWords} />
          </p>

          {"chips" in slide && slide.chips && (
            <ul className="hidden sm:flex flex-wrap xl:flex-nowrap gap-1.5">
              {slide.chips.map((c) => (
                <li key={c} className="text-[11px] whitespace-nowrap text-white/80 border border-white/15 rounded-full px-2.5 py-1">
                  {c}
                </li>
              ))}
            </ul>
          )}

          <div>
            <Link
              href={slide.ctaHref}
              className="inline-block border border-white/30 text-white text-sm font-semibold px-8 py-3 rounded transition-all hover:bg-white/10 hover:border-white/60"
            >
              {slide.ctaLabel}
            </Link>
          </div>
        </div>

        {/* Right: visual */}
        <div
          className="hidden lg:flex items-center justify-center"
          style={{
            height: 440,
            opacity: isAnimating ? 0 : 1,
            transition: "opacity 0.35s ease",
          }}
        >
          <div className="w-full max-w-md h-full flex items-center justify-center">
            {slide.visual}
          </div>
        </div>
      </div>

      {/* ── BOTTOM DOTS ───────────────────────────────────── */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ir para slide ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? 28 : 10,
              height: 10,
              background: i === current ? "#008be0" : "rgba(255,255,255,0.3)",
            }}
          />
        ))}
      </div>

      {/* ── RIGHT LATERAL ARROW ───────────────────────────── */}
      <button
        onClick={next}
        aria-label="Próximo slide"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-10 h-14 hidden sm:flex items-center justify-center transition-colors"
        style={{ background: "rgba(255,255,255,0.08)" }}
        onMouseEnter={(e) =>
        ((e.currentTarget as HTMLButtonElement).style.background =
          "rgba(255,255,255,0.15)")
        }
        onMouseLeave={(e) =>
        ((e.currentTarget as HTMLButtonElement).style.background =
          "rgba(255,255,255,0.08)")
        }
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>
    </section>
  );
}
