"use client";

import { useEffect, useRef } from "react";

// Linha fina no topo mostrando o quanto da página já foi percorrido.
// Escreve direto no style do elemento via rAF — nenhum re-render por scroll.
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frameId = 0;

    const updateProgress = () => {
      const bar = barRef.current;
      if (!bar) return;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;
      bar.style.transform = `scaleX(${progress})`;
    };

    const scheduleUpdate = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-0.5">
      <div
        ref={barRef}
        className="h-full origin-left scale-x-0 bg-gradient-to-r from-aro-accent/70 via-aro-accent to-[#8fffe4]"
      />
    </div>
  );
}
