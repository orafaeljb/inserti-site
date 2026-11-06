import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Lock,
  Award,
} from "lucide-react";
import { SocialLinks } from "@/components/common/SocialLinks";
import { SITE_CONFIG } from "@/lib/constants";
import { serviceGroupsData, getServiceBySlug } from "@/data/services";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-12 border-t border-brand-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Links - 5 Groups + Institutional */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 py-14 border-b border-white/10">
          {/* Brand Info & Contacts */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo-branco.png" alt="Inserti Tecnologia" width={160} height={48} className="h-10 w-auto object-contain" />
            </Link>

            <p className="text-sm text-white/80">Tecnologia trabalhando pelo seu negócio.</p>

            <div className="space-y-2 pt-2 text-xs text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                <a href={`tel:${SITE_CONFIG.contact.phoneClean}`} className="hover:text-white">
                  {SITE_CONFIG.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-blue shrink-0" />
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-white">
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.address}</span>
              </div>
            </div>

            <div className="pt-2">
              <SocialLinks variant="dark" />
            </div>
          </div>

          {/* Group 1 & 2 */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-1">
                Cyber Protect
              </h4>
              <p className="text-[11px] text-white/50 italic mb-2">Proteção de dados</p>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <Link href="/servicos/backup-empresarial" className="text-white/75 hover:text-brand-blue transition-colors">
                    Backup empresarial
                  </Link>
                </li>
                <li>
                  <Link href="/servicos/disaster-recovery" className="text-white/75 hover:text-brand-blue transition-colors">
                    Disaster Recovery
                  </Link>
                </li>
                <li>
                  <Link href="/servicos/backup-microsoft-365-google-workspace" className="text-white/75 hover:text-brand-blue transition-colors">
                    Backup M365 e Google
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-1">
                Cyber Security
              </h4>
              <p className="text-[11px] text-white/50 italic mb-2">Segurança da informação</p>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <Link href="/servicos/firewall-como-servico" className="text-white/75 hover:text-brand-blue transition-colors">
                    Firewall como serviço (Fortinet)
                  </Link>
                </li>
                <li>
                  <Link href="/servicos/endpoint-security-edr" className="text-white/75 hover:text-brand-blue transition-colors">
                    Endpoint Security e EDR
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Group 3 & 4 */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-1">
                Serviços de TI
              </h4>
              <p className="text-[11px] text-white/50 italic mb-2">Gestão e suporte de tecnologia</p>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <Link href="/servicos/gestao-suporte-ti-msp" className="text-white/75 hover:text-brand-blue transition-colors">
                    Gestão e suporte de TI (MSP)
                  </Link>
                </li>
                <li>
                  <Link href="/servicos/suporte-avancado-n2-n3-especialistas" className="text-white/75 hover:text-brand-blue transition-colors">
                    Suporte N2, N3 e especialistas
                  </Link>
                </li>
                <li>
                  <Link href="/servicos/wifi-corporativo-redes-gerenciadas" className="text-white/75 hover:text-brand-blue transition-colors">
                    Wi-Fi corporativo e redes
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-1">
                Cloud e produtividade
              </h4>
              <p className="text-[11px] text-white/50 italic mb-2">Infraestrutura em nuvem</p>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <Link href="/servicos/cloud-corporativa" className="text-white/75 hover:text-brand-blue transition-colors">
                    Cloud corporativa
                  </Link>
                </li>
                <li>
                  <Link href="/servicos/armazenamento-em-nuvem" className="text-white/75 hover:text-brand-blue transition-colors">
                    Armazenamento em nuvem
                  </Link>
                </li>
                <li>
                  <Link href="/servicos/microsoft-365" className="text-white/75 hover:text-brand-blue transition-colors">
                    Microsoft 365
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Group 5 */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-1">
              Soluções digitais & automação
            </h4>
            <p className="text-[11px] text-white/50 italic mb-2">
              Desenvolvimento, automação e IA
            </p>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link href="/servicos/desenvolvimento-software-sob-demanda" className="text-white/75 hover:text-brand-blue transition-colors">
                  Software sob demanda
                </Link>
              </li>
              <li>
                <Link href="/servicos/automacao-processos-integracoes" className="text-white/75 hover:text-brand-blue transition-colors">
                  Automação e integrações
                </Link>
              </li>
              <li>
                <Link href="/servicos/agentes-ia-empresas" className="text-white/75 hover:text-brand-blue transition-colors">
                  Agentes de IA para empresas
                </Link>
              </li>
              <li>
                <Link href="/servicos/infraestrutura-hospedagem-aplicacoes" className="text-white/75 hover:text-brand-blue transition-colors">
                  Hospedagem de aplicações
                </Link>
              </li>
            </ul>
          </div>

          {/* Institutional & News */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              Institucional & News
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/sobre" className="text-white/75 hover:text-brand-blue transition-colors">
                  Sobre a Inserti
                </Link>
              </li>
              <li>
                <Link href="/cases" className="text-white/75 hover:text-brand-blue transition-colors">
                  News: Cases de Sucesso
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/75 hover:text-brand-blue transition-colors">
                  News: Blog & Artigos
                </Link>
              </li>
              <li>
                <Link href="/diagnostico" className="text-white/75 hover:text-brand-blue transition-colors">
                  Diagnóstico de TI
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-white/75 hover:text-brand-blue transition-colors">
                  Central de Atendimento
                </Link>
              </li>
              <li className="pt-2 border-t border-white/10">
                <Link
                  href="/politica-de-privacidade"
                  className="text-white/60 hover:text-brand-blue transition-colors"
                >
                  Política de Privacidade (LGPD)
                </Link>
              </li>
              <li>
                <Link
                  href="/termos-de-uso"
                  className="text-white/60 hover:text-brand-blue transition-colors"
                >
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>
            © {currentYear} {SITE_CONFIG.legalName} CNPJ {SITE_CONFIG.cnpj} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
