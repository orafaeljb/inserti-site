import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  theme?: "light" | "dark";
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  theme = "light",
}: SectionHeaderProps) {
  const isDark = theme === "dark";

  return (
    <div className={`max-w-3xl mb-12 lg:mb-16 ${centered ? "mx-auto text-center" : ""}`}>
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
            isDark
              ? "bg-brand-blue/20 text-brand-blue border border-brand-blue/30"
              : "bg-brand-blue/10 text-brand-blue border border-brand-blue/20"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse"></span>
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={`font-heading font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight ${
          isDark ? "text-white" : "text-brand-navy"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-white/70" : "text-brand-navy/70"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

