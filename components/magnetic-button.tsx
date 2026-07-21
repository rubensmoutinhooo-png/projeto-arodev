"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  /** 0 a 1 — quanto o elemento "gruda" no cursor */
  strength?: number;
}

// Wrapper magnético para botões/links (1c). Envolva qualquer <a> ou <button>.
// Em telas touch o efeito não dispara.
export function Magnetic({ children, className, strength = 0.25 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || !window.matchMedia("(hover: hover)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    el.style.setProperty("--mag-x", `${x * strength}px`);
    el.style.setProperty("--mag-y", `${y * strength * 1.4}px`);
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--mag-x", "0px");
    el.style.setProperty("--mag-y", "0px");
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: "translate(var(--mag-x, 0px), var(--mag-y, 0px))" }}
      className={cn(
        "inline-flex transition-transform duration-200 ease-out will-change-transform",
        className
      )}
    >
      {children}
    </div>
  );
}
