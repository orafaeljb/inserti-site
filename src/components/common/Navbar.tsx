"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ShieldCheck,
  Lock,
  ServerCog,
  Cloud,
  Cpu,
  ArrowRight,
  Headphones,
  CheckCircle2,
  Newspaper,
  Award,
  BookOpen,
} from "lucide-react";
import { serviceGroupsData, servicesData, getServiceBySlug } from "@/data/services";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isNewsOpen, setIsNewsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsNewsOpen(false);
  }, [pathname]);

  const groupIcons: Record<string, React.ElementType> = {
    "cyber-protect": ShieldCheck,
    "cyber-security": Lock,
    "servicos-ti": ServerCog,
    "cloud-produtividade": Cloud,
    "solucoes-digitais-automacao": Cpu,
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-brand-navy/10"
            : "bg-white border-b border-brand-navy/5"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group focus:outline-none"
              aria-label="Inserti Tecnologia Home"
            >
              <Image
                src="/logo.png"
                alt="Inserti Tecnologia"
                width={160}
                height={48}
                className="h-10 w-auto object-contain group-hover:opacity-90 transition-opacity duration-200"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 ml-8 mr-8 xl:ml-12 xl:mr-12" aria-label="Navegação Principal">
              {/* Services Dropdown (5 Groups with descriptions + Clickable specific services) */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link
                  href="/servicos"
                  className={`px-3 py-2 text-sm font-medium rounded-lg inline-flex items-center gap-1 transition-colors ${
                    pathname.startsWith("/servicos")
                      ? "text-brand-blue font-semibold"
                      : "text-brand-navy/80 hover:text-brand-blue"
                  }`}
                  aria-expanded={isServicesOpen}
                >
                  <span>Soluções</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isServicesOpen ? "rotate-180 text-brand-blue" : ""
                    }`}
                  />
                </Link>

                {/* Mega Menu Panel (5 Structured Groups) */}
                {isServicesOpen && (
                  <>
                  {/* Invisible bridge so hover isn't lost between link and full-width panel */}
                  <div className="absolute top-full left-0 right-0 h-6" aria-hidden="true" />
                  <div className="fixed top-[72px] left-0 right-0 w-full bg-white shadow-lg animate-in fade-in duration-200">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-5 gap-8">
                    {serviceGroupsData.map((group) => {
                      return (
                        <div key={group.id} className="space-y-3">
                          {/* Group Header (*) */}
                          <div className="border-b border-slate-100 pb-2.5">
                            <div className="flex items-center gap-1.5 mb-1">
                              <h3 className="font-heading font-extrabold text-xs text-brand-navy uppercase tracking-wider">
                                {group.name}
                              </h3>
                            </div>
                            {/* Group Subtitle / Description */}
                            <p className="text-[11px] text-brand-navy/60 font-normal leading-tight">
                              {group.description}
                            </p>
                          </div>

                          {/* Specific Clickable Services (-) */}
                          <ul className="space-y-1.5">
                            {group.serviceSlugs.map((slug) => {
                              const s = getServiceBySlug(slug);
                              if (!s) return null;
                              return (
                                <li key={slug}>
                                  <Link
                                    href={`/servicos/${s.slug}`}
                                    className="block py-1.5 text-xs font-semibold text-brand-navy/80 hover:text-brand-blue transition-all leading-snug group/link"
                                  >
                                    {s.title}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                  </div>
                  </>
                )}
              </div>

              <Link
                href="/sobre"
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  pathname === "/sobre"
                    ? "text-brand-blue font-semibold"
                    : "text-brand-navy/80 hover:text-brand-blue"
                }`}
              >
                A Inserti
              </Link>


              {/* News Dropdown (Submenus: Cases e Blog) */}
              <div
                className="relative"
                onMouseEnter={() => setIsNewsOpen(true)}
                onMouseLeave={() => setIsNewsOpen(false)}
              >
                <button
                  type="button"
                  className={`px-3 py-2 text-sm font-medium rounded-lg inline-flex items-center gap-1 transition-colors ${
                    pathname.startsWith("/cases") || pathname.startsWith("/blog")
                      ? "text-brand-blue font-semibold"
                      : "text-brand-navy/80 hover:text-brand-blue"
                  }`}
                  aria-expanded={isNewsOpen}
                >
                  <span>News</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isNewsOpen ? "rotate-180 text-brand-blue" : ""
                    }`}
                  />
                </button>

                {/* Submenu Dropdown */}
                {isNewsOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-brand-navy/10 p-3 space-y-1 animate-in fade-in zoom-in-95 duration-200">
                    <Link
                      href="/cases"
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-brand-blue/5 transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-brand-navy/5 text-brand-blue flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                          Cases de Sucesso
                        </div>
                        <div className="text-[10px] text-brand-navy/60">
                          Resultados reais de clientes
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/blog"
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-brand-blue/5 transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-brand-navy/5 text-brand-blue flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                          Blog & Artigos
                        </div>
                        <div className="text-[10px] text-brand-navy/60">
                          Conhecimento técnico e guias
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contato"
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  pathname === "/contato"
                    ? "text-brand-blue font-semibold"
                    : "text-brand-navy/80 hover:text-brand-blue"
                }`}
              >
                Contato
              </Link>
            </nav>

            {/* Desktop Single Action Button: Falar com Especialista (WhatsApp) */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/diagnostico"
                className="bg-brand-blue-300 hover:bg-brand-blue-400 text-brand-navy px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase inline-flex items-center transition-colors"
              >
                <span>Diagnóstico de TI</span>
              </Link>
              <Link
                href="/contato"
                                className="bg-brand-navy hover:bg-brand-navy-600 text-white transition-colors px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase inline-flex items-center gap-2"
              >
                <Headphones className="w-4 h-4" />
                <span>Falar com Especialista</span>
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-brand-navy hover:bg-slate-100 focus:outline-none"
                aria-label={isMobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 w-full bg-white border-b border-brand-navy/10 shadow-lg px-4 pt-3 pb-6 space-y-3 max-h-[calc(100vh-72px)] overflow-y-auto">
            <Link
              href="/"
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-brand-navy hover:bg-brand-blue/5 hover:text-brand-blue"
            >
              Home
            </Link>
            <Link
              href="/sobre"
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-brand-navy hover:bg-brand-blue/5 hover:text-brand-blue"
            >
              Sobre a Inserti
            </Link>

            {/* Mobile Services Accordion */}
            <div className="border border-slate-200 rounded-2xl p-3 bg-slate-50/50 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-blue pb-1 border-b border-slate-200">
                Serviços Especializados
              </div>
              {serviceGroupsData.map((group) => (
                <div key={group.id} className="space-y-1">
                  <div className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                    {group.name}
                  </div>
                  <div className="text-[11px] text-brand-navy/60 italic pb-1">
                    {group.description}
                  </div>
                  <div className="pl-3 space-y-1">
                    {group.serviceSlugs.map((slug) => {
                      const s = getServiceBySlug(slug);
                      if (!s) return null;
                      return (
                        <Link
                          key={slug}
                          href={`/servicos/${s.slug}`}
                          className="block py-1 text-xs text-brand-navy/80 hover:text-brand-blue font-medium"
                        >
                          {s.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile News (Cases & Blog) */}
            <div className="border border-slate-200 rounded-2xl p-3 bg-slate-50/50 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                News
              </div>
              <Link
                href="/cases"
                className="block pl-2 py-1 text-xs text-brand-navy/80 hover:text-brand-blue font-semibold"
              >
                Cases de Sucesso
              </Link>
              <Link
                href="/blog"
                className="block pl-2 py-1 text-xs text-brand-navy/80 hover:text-brand-blue font-semibold"
              >
                Blog & Artigos Técnicos
              </Link>
            </div>

            <Link
              href="/diagnostico"
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-brand-navy hover:bg-brand-blue/5 hover:text-brand-blue"
            >
              Diagnóstico de TI
            </Link>

            <Link
              href="/contato"
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-brand-navy hover:bg-brand-blue/5 hover:text-brand-blue"
            >
              Contato & Suporte
            </Link>

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <Link
                href="/diagnostico"
                className="w-full text-center py-3 bg-brand-blue-300 hover:bg-brand-blue-400 text-brand-navy transition-colors text-xs font-bold uppercase tracking-wider rounded-xl"
              >
                Solicitar Diagnóstico Gratuito
              </Link>
              <Link
                href="/contato"
                                className="w-full text-center py-3 bg-brand-navy hover:bg-brand-navy-600 text-white transition-colors text-xs font-bold uppercase tracking-wider rounded-xl"
              >
                Falar com Especialista
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
