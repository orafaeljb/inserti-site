"use client";

import React, { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  value: string; // e.g. "14+", "99.98%", "8500+", "24x7"
  duration?: number;
}

export function AnimatedCounter({ value, duration = 1500 }: AnimatedCounterProps) {
  const [displayed, setDisplayed] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Extract number and suffix
          const numericMatch = value.match(/(\d+[\.,]?\d*)/);
          if (!numericMatch) {
            setDisplayed(value);
            return;
          }

          // "1.500" (ponto + 3 dígitos) é separador de milhar, não decimal
          const isThousands = /^\d{1,3}\.\d{3}$/.test(numericMatch[0]);
          const rawNumberStr = isThousands ? numericMatch[0].replace(".", "") : numericMatch[0].replace(",", ".");
          const targetNum = parseFloat(rawNumberStr);
          const prefix = value.substring(0, numericMatch.index);
          const suffix = value.substring((numericMatch.index || 0) + numericMatch[0].length);

          const startTime = performance.now();
          const isDecimal = rawNumberStr.includes(".");
          const decimalPlaces = isDecimal ? rawNumberStr.split(".")[1].length : 0;

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = targetNum * easeProgress;

            if (isDecimal) {
              setDisplayed(`${prefix}${currentVal.toFixed(decimalPlaces)}${suffix}`);
            } else {
              const whole = Math.floor(currentVal);
              setDisplayed(`${prefix}${isThousands ? whole.toLocaleString("pt-BR") : whole}${suffix}`);
            }

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayed(value);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return <span ref={elementRef}>{displayed}</span>;
}

