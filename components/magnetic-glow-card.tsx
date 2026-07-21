"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagneticGlowCardProps {
  children: ReactNode;
  className?: string;
  glowClassName?: string;
  /** cor do brilho radial (rgba/hex), permite tingir o glow por card */
  glowColor?: string;
  strength?: number;
}

// Cartão com dois efeitos: um leve "puxão" magnético em direção ao cursor e
// um brilho radial que acompanha o mouse. Ambos via CSS custom properties
// mutadas diretamente no elemento, sem re-render do React a cada movimento.
export function MagneticGlowCard({
  children,
  className,
  glowClassName,
  glowColor = "rgba(99,102,241,0.16)",
  strength = 10,
}: MagneticGlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const relX = x / rect.width - 0.5;
    const relY = y / rect.height - 0.5;

    el.style.setProperty("--glow-x", `${x}px`);
    el.style.setProperty("--glow-y", `${y}px`);
    el.style.setProperty("--magnet-x", `${relX * strength * 2}px`);
    el.style.setProperty("--magnet-y", `${relY * strength * 2}px`);
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--magnet-x", "0px");
    el.style.setProperty("--magnet-y", "0px");
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: "translate(var(--magnet-x, 0px), var(--magnet-y, 0px))" }}
      className={cn(
        "group/magnetic relative transition-transform duration-300 ease-out will-change-transform",
        className
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/magnetic:opacity-100",
          glowClassName
        )}
        style={{
          background: `radial-gradient(360px circle at var(--glow-x, 50%) var(--glow-y, 50%), ${glowColor}, transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
}
