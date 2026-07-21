"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** inclinação máxima em graus */
  maxTilt?: number;
}

// Card com tilt 3D seguindo o cursor (1c). Mesmo padrão do MagneticGlowCard:
// muta CSS custom properties direto no elemento, sem re-render.
// Em telas touch (sem hover) o efeito não dispara.
export function TiltCard({ children, className, maxTilt = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || !window.matchMedia("(hover: hover)").matches) return;
    const rect = el.getBoundingClientRect();
    const relX = (event.clientX - rect.left) / rect.width - 0.5;
    const relY = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--tilt-y", `${relX * maxTilt}deg`);
    el.style.setProperty("--tilt-x", `${-relY * maxTilt}deg`);
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tilt-y", "0deg");
    el.style.setProperty("--tilt-x", "0deg");
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform:
          "perspective(700px) rotateY(var(--tilt-y, 0deg)) rotateX(var(--tilt-x, 0deg))",
      }}
      className={cn(
        "transition-transform duration-200 ease-out will-change-transform",
        className
      )}
    >
      {children}
    </div>
  );
}
