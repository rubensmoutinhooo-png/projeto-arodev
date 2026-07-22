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
      className="pointer-events-none absolute top-16 left-1/2 h-[520px] w-[1040px] max-w-[160vw] blur-[110px] will-change-transform"
      style={{
        transform:
          "translate(-50%, var(--hero-arc-y, 0px)) scale(var(--hero-arc-scale, 1))",
        opacity: "var(--hero-arc-opacity, 1)",
        // meia-coroa (arco) de aro-accent desvanecendo para transparente
        background:
          "radial-gradient(closest-side at 50% 100%, transparent 52%, rgba(0,217,163,0.26) 66%, rgba(0,217,163,0.05) 78%, transparent 86%)",
        clipPath: "inset(0 0 50% 0)",
      }}
    />
  );
}
