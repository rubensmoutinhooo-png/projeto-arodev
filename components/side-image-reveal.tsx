"use client";

import { type CSSProperties, type ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

interface SideImageRevealProps {
  children: ReactNode;
  /** de que lado a peça entra — define o sinal do deslocamento/skew */
  direction: "left" | "right";
  className?: string;
  delay?: number;
  /** deslocamento inicial, em px (a peça começa fora da viewport nesse eixo) */
  offset?: number;
}

// Entrada lateral com "motion blur" direcional: a peça começa deslocada pra
// fora da tela, borrada e levemente inclinada no eixo do movimento (skew), e
// assume a posição final desfocando e "endireitando" ao mesmo tempo — como se
// o próprio blur estivesse sendo arrastado atrás dela. CSS puro, disparado
// pelo mesmo IntersectionObserver hand-rolled do Reveal/garantia.tsx
// (useInView). prefers-reduced-motion já é tratado globalmente em
// globals.css (zera duration/transition-delay), então aqui não precisa de
// lógica extra: a peça só aparece direto, sem blur nem deslocamento visível.
export function SideImageReveal({
  children,
  direction,
  className,
  delay = 0,
  offset = 120,
}: SideImageRevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>(0.15);
  const sign = direction === "left" ? -1 : 1;

  const style: CSSProperties = isInView
    ? {
        transitionDelay: `${delay}ms`,
        transform: "translateX(0) scaleX(1) skewX(0deg)",
        filter: "blur(0px)",
        opacity: 1,
      }
    : {
        transitionDelay: `${delay}ms`,
        transform: `translateX(${sign * offset}px) scaleX(1.08) skewX(${sign * 6}deg)`,
        filter: "blur(20px)",
        opacity: 0,
      };

  return (
    <div
      ref={ref}
      style={style}
      className={cn(
        "transition-[transform,filter,opacity] duration-[750ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform",
        className
      )}
    >
      {children}
    </div>
  );
}
