"use client";

import { useEffect, useRef } from "react";

interface InteractiveParticlesProps {
  className?: string;
  /** quantidade de partículas — ajuste aqui pra mudar a densidade */
  count?: number;
  /** cor base das partículas, como "r, g, b" */
  color?: string;
  /** raio de influência do cursor, em px */
  radius?: number;
}

const BASE_COLOR = "0, 217, 163"; // aro-accent em rgb
const SPRING = 0.02; // força que puxa a partícula de volta pra casa
const DAMPING = 0.9; // atrito da velocidade a cada frame
const REPEL_STRENGTH = 2.4; // deslocamento máx. por frame quando o cursor está bem em cima
const ORBIT_STRENGTH = 0.35; // componente perpendicular — dá a sensação de "orbitar" o cursor

interface Particle {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
}

// Campo de partículas reativo ao cursor: perto do mouse cada ponto é
// empurrado (repulsão) mais um leve componente perpendicular (giro/rastro),
// e volta sozinho pra posição de origem (spring) quando o cursor se afasta.
// Densidade maior nas bordas/cantos, centro mais livre pro conteúdo. Canvas
// puro, sem lib de partículas — o projeto não usa framer-motion/gsap.
export function InteractiveParticles({
  className = "pointer-events-none absolute inset-0 size-full",
  count = 90,
  color = BASE_COLOR,
  radius = 140,
}: InteractiveParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    // Posição do canvas em relação à viewport, cacheada — só recalculada no
    // resize/scroll (rAF-throttled), nunca dentro do handler de mousemove.
    // Chamar getBoundingClientRect() a cada mousemove força reflow síncrono
    // a cada evento (que pode disparar centenas de vezes/seg) e foi a causa
    // do delay percebido na animação do cursor.
    let rectLeft = 0;
    let rectTop = 0;

    // Sorteia no espaço todo, mas re-sorteia (a maior parte das vezes) os
    // pontos que caem perto do centro — empurra a densidade pras bordas e
    // cantos sem excluir o centro por completo.
    const randomPointBiasedToEdges = () => {
      let x = Math.random();
      const y = Math.random();
      const dx = x - 0.5;
      const dy = y - 0.5;
      const distFromCenter = Math.sqrt(dx * dx + dy * dy);
      if (distFromCenter < 0.32 && Math.random() < 0.75) {
        x = Math.random() < 0.5 ? Math.random() * 0.22 : 1 - Math.random() * 0.22;
      }
      return { x, y };
    };

    const buildParticles = () => {
      particles = Array.from({ length: count }, () => {
        const { x, y } = randomPointBiasedToEdges();
        const baseX = x * width;
        const baseY = y * height;
        return {
          baseX,
          baseY,
          x: baseX,
          y: baseY,
          vx: 0,
          vy: 0,
          r: 1 + Math.random() * 1.8,
          alpha: 0.25 + Math.random() * 0.55,
        };
      });
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      rectLeft = rect.left;
      rectTop = rect.top;
      buildParticles();
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.baseX, p.baseY, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${p.alpha})`;
        ctx.fill();
      }
    };

    const mouse = { x: -9999, y: -9999, active: false };

    // Sem getBoundingClientRect aqui — só a subtração usando o rect
    // cacheado, pra não travar o mousemove com reflow síncrono.
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX - rectLeft;
      mouse.y = event.clientY - rectTop;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    // A posição do canvas muda com o scroll da página (ele fica dentro do
    // fluxo normal do documento) — recacheia o rect, mas sem forçar reflow
    // a cada pixel rolado (mesmo padrão rAF-throttle do hero-arc.tsx).
    let scrollRaf = 0;
    const handleScroll = () => {
      if (scrollRaf) return;
      scrollRaf = requestAnimationFrame(() => {
        scrollRaf = 0;
        const rect = canvas.getBoundingClientRect();
        rectLeft = rect.left;
        rectTop = rect.top;
      });
    };

    let raf = 0;

    const tick = () => {
      raf = requestAnimationFrame(tick);
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        let fx = (p.baseX - p.x) * SPRING;
        let fy = (p.baseY - p.y) * SPRING;

        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          if (dist < radius) {
            const force = (1 - dist / radius) * REPEL_STRENGTH;
            const nx = dx / dist;
            const ny = dy / dist;
            fx += nx * force - ny * force * ORBIT_STRENGTH;
            fy += ny * force + nx * force * ORBIT_STRENGTH;
          }
        }

        p.vx = (p.vx + fx) * DAMPING;
        p.vy = (p.vy + fy) * DAMPING;
        p.x += p.vx;
        p.y += p.vy;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${p.alpha})`;
        ctx.fill();
      }
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    if (reduceMotion) {
      drawStatic();
    } else {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseleave", handleMouseLeave);
      raf = requestAnimationFrame(tick);
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (raf) cancelAnimationFrame(raf);
      if (scrollRaf) cancelAnimationFrame(scrollRaf);
    };
  }, [count, color, radius]);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}
