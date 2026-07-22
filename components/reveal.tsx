"use client";

import { type ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

type RevealVariant = "up" | "left" | "right" | "zoom" | "fade";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** atraso em ms para escalonar entradas dentro da mesma seção */
  delay?: number;
  variant?: RevealVariant;
}

const HIDDEN_BY_VARIANT: Record<RevealVariant, string> = {
  up: "translate-y-8 opacity-0 blur-[6px]",
  left: "-translate-x-8 opacity-0 blur-[6px]",
  right: "translate-x-8 opacity-0 blur-[6px]",
  zoom: "scale-[0.955] opacity-0 blur-[6px]",
  fade: "opacity-0",
};

// Entrada padrão de todo elemento do site: mesma curva, mesma duração e o
// mesmo desfoque saindo de cena — é isso que deixa as trocas de seção
// homogêneas. O atributo data-inview também dispara os `.draw-on-reveal`
// (linhas que se desenham) dos filhos, via CSS.
export function Reveal({ children, className, delay = 0, variant = "up" }: RevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>(0.12);

  return (
    <div
      ref={ref}
      data-inview={isInView}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-[opacity,transform,filter] duration-[950ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        isInView
          ? "translate-x-0 translate-y-0 scale-100 opacity-100 blur-[0px]"
          : HIDDEN_BY_VARIANT[variant],
        className
      )}
    >
      {children}
    </div>
  );
}
