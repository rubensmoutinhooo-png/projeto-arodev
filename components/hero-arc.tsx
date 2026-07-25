"use client";

import { useEffect, useRef } from "react";

// Arco de luz atrás do Hero, amarrado ao scroll (item 5).
// Listener passivo + rAF mutando CSS custom properties — só transform/opacity.
export function HeroArc() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const section = el.closest("section");
    if (!section) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = section.getBoundingClientRect();
      // progresso do scroll dentro da altura do próprio Hero, 0 → 1
      const progress = Math.min(Math.max(-rect.top / rect.height, 0), 1);
      el.style.setProperty("--hero-arc-scale", `${1 - progress * 0.4}`); // 1 → 0.6
      el.style.setProperty("--hero-arc-opacity", `${1 - progress * 0.7}`); // 1 → 0.3
      el.style.setProperty("--hero-arc-y", `${progress * 80}px`);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute top-8 left-1/2 h-[600px] w-[1100px] max-w-[170vw] will-change-transform"
      style={{
        transform:
          "translate(-50%, var(--hero-arc-y, 0px)) scale(var(--hero-arc-scale, 1))",
        opacity: "var(--hero-arc-opacity, 1)",
        // "glow sphere": meia-coroa (arco) de horizonte — um núcleo claro
        // (crista de luz) somado a um halo largo de aro-accent, os dois
        // desvanecendo para transparente. É a assinatura visual do hero.
        background:
          "radial-gradient(closest-side at 50% 100%, rgba(255,255,255,0.85) 0%, rgba(143,255,228,0.55) 5%, transparent 42%), " +
          "radial-gradient(closest-side at 50% 100%, transparent 46%, rgba(0,217,163,0.5) 62%, rgba(0,217,163,0.18) 76%, transparent 88%)",
        filter: "blur(90px)",
        clipPath: "inset(0 0 44% 0)",
      }}
    />
  );
}
