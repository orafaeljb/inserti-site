import React from "react";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const networks = [
  { name: "Instagram", href: SITE_CONFIG.social.instagram, Icon: Instagram },
  { name: "Facebook", href: SITE_CONFIG.social.facebook, Icon: Facebook },
  { name: "LinkedIn", href: SITE_CONFIG.social.linkedin, Icon: Linkedin },
];

interface SocialLinksProps {
  /** "dark" para fundos escuros (rodapé), "light" para fundos claros */
  variant?: "dark" | "light";
}

export function SocialLinks({ variant = "dark" }: SocialLinksProps) {
  const styles =
    variant === "dark"
      ? "bg-white/10 text-white hover:bg-brand-blue"
      : "bg-brand-navy/5 text-brand-navy hover:bg-brand-navy hover:text-white";
  return (
    <ul className="flex items-center gap-3">
      {networks.map(({ name, href, Icon }) => (
        <li key={name}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Inserti no ${name}`}
            title={name}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${styles}`}
          >
            <Icon className="w-[18px] h-[18px]" />
          </a>
        </li>
      ))}
    </ul>
  );
}
