"use client";

import React, { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
    __turnstileLoading?: Promise<void>;
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

function loadScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.turnstile) return Promise.resolve();
  if (window.__turnstileLoading) return window.__turnstileLoading;
  window.__turnstileLoading = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Falha ao carregar o Turnstile"));
    document.head.appendChild(script);
  });
  return window.__turnstileLoading;
}

export interface TurnstileHandle {
  reset: () => void;
}

interface TurnstileProps {
  onToken: (token: string) => void;
}

/** Verificação anti-robô do Cloudflare Turnstile (funciona com o domínio em qualquer provedor de DNS). */
export const Turnstile = forwardRef<TurnstileHandle, TurnstileProps>(function Turnstile({ onToken }, ref) {
  const container = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | undefined>(undefined);
  const onTokenRef = useRef(onToken);
  onTokenRef.current = onToken;

  useImperativeHandle(ref, () => ({
    reset: () => {
      onTokenRef.current("");
      if (window.turnstile && widgetId.current) window.turnstile.reset(widgetId.current);
    },
  }));

  useEffect(() => {
    if (!SITE_KEY) return;
    let cancelled = false;
    loadScript()
      .then(() => {
        if (cancelled || !container.current || !window.turnstile || widgetId.current) return;
        widgetId.current = window.turnstile.render(container.current, {
          sitekey: SITE_KEY,
          size: "flexible",
          language: "pt-br",
          callback: (token: string) => onTokenRef.current(token),
          "expired-callback": () => onTokenRef.current(""),
          "error-callback": () => onTokenRef.current(""),
        });
      })
      .catch(() => onTokenRef.current(""));
    return () => {
      cancelled = true;
      if (window.turnstile && widgetId.current) {
        window.turnstile.remove(widgetId.current);
        widgetId.current = undefined;
      }
    };
  }, []);

  if (!SITE_KEY) return null;
  return <div ref={container} className="min-h-[65px]" />;
});

export const turnstileEnabled = Boolean(SITE_KEY);
