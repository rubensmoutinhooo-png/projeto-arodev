"use client";

import { useEffect, useState } from "react";
import { ShoppingCart, TrendingUp } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useCountUp } from "@/hooks/use-count-up";
import { cn } from "@/lib/utils";

interface HeroMockupProps {
  className?: string;
}

const BARRAS = [38, 52, 45, 68, 60, 82, 74, 95];

// Ilustração de um painel de vendas dentro de um frame de navegador — as
// barras "sobem" quando entram na tela. É uma ilustração estilizada, não um
// screenshot real de cliente (ainda não temos um pra mostrar com orgulho).
export function HeroMockup({ className }: HeroMockupProps) {
  const { ref, isInView } = useInView<HTMLDivElement>(0.4);
  const conversoes = useCountUp(38, isInView, 1400);
  const pedidosBase = useCountUp(127, isInView, 1600);
  const [pedidosExtras, setPedidosExtras] = useState(0);
  const pedidos = pedidosBase + pedidosExtras;

  useEffect(() => {
    if (pedidosBase < 127) return;
    const interval = setInterval(
      () => {
        setPedidosExtras((current) => current + 1);
      },
      3500 + Math.random() * 2500
    );
    return () => clearInterval(interval);
  }, [pedidosBase]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <div
        className="pointer-events-none absolute -inset-10 -z-10 rounded-[2.5rem] bg-aro-accent/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] shadow-2xl backdrop-blur-sm">
        <div className="flex items-center gap-1.5 border-b border-white/[0.08] px-4 py-3">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <div className="ml-3 h-5 flex-1 rounded-md bg-white/[0.06]" />
        </div>

        <div className="space-y-5 p-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-white/40">Painel de vendas</span>
            <span className="flex items-center gap-1.5 text-[11px] text-white/40">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-aro-accent opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-aro-accent" />
              </span>
              Ao vivo
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-3 backdrop-blur-md">
              <TrendingUp className="size-4 text-aro-accent" strokeWidth={1.75} />
              <div className="mt-2 font-heading text-lg font-extrabold text-white">+{conversoes}%</div>
              <div className="text-[10px] tracking-wide text-white/40 uppercase">Conversões</div>
            </div>
            <div className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-3 backdrop-blur-md">
              <ShoppingCart className="size-4 text-aro-accent" strokeWidth={1.75} />
              <div className="mt-2 font-heading text-lg font-extrabold text-white tabular-nums">{pedidos}</div>
              <div className="text-[10px] tracking-wide text-white/40 uppercase">Pedidos hoje</div>
            </div>
          </div>

          <div className="flex h-24 items-end gap-2">
            {BARRAS.map((altura, index) => (
              <div
                key={index}
                className={cn(
                  "flex-1 rounded-t-sm bg-gradient-to-b from-aro-accent to-aro-accent/0 transition-all duration-700 ease-out",
                  index === BARRAS.length - 1 && "to-aro-accent/60"
                )}
                style={{
                  height: isInView ? `${altura}%` : "4%",
                  transitionDelay: `${index * 70}ms`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
