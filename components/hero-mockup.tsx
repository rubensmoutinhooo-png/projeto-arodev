"use client";

import { useEffect, useRef, useState } from "react";
import { ShoppingCart, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroMockupProps {
  className?: string;
}

const BARRAS = [38, 52, 45, 68, 60, 82, 74, 95];
const CONVERSOES_ALVO = 38;
const PEDIDOS_ALVO = 127;

// Ilustração de um painel de vendas dentro de um frame de navegador. Os
// números e as barras sobem junto com o scroll do Hero (não num timer fixo
// ao entrar na tela) — é isso que faz o painel parecer "vivo" com a rolagem.
// Estilizada, não é um screenshot real de cliente (ainda não temos um pra
// mostrar com orgulho).
export function HeroMockup({ className }: HeroMockupProps) {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [pedidosExtras, setPedidosExtras] = useState(0);

  const conversoes = Math.round(CONVERSOES_ALVO * progress);
  const pedidosBase = Math.round(PEDIDOS_ALVO * progress);
  const pedidos = pedidosBase + pedidosExtras;

  // Depois que o scroll "completa" o painel, alguns pedidos extras chegam
  // sozinhos de tempos em tempos — só de vida, sem depender mais do scroll.
  useEffect(() => {
    if (progress < 1) return;
    const interval = setInterval(
      () => {
        setPedidosExtras((current) => current + 1);
      },
      3500 + Math.random() * 2500
    );
    return () => clearInterval(interval);
  }, [progress]);

  // Parallax + contadores amarrados ao scroll: o card "levita" e recua
  // sutilmente, e os números/barras sobem junto conforme o Hero sai de cena
  // — mesmo padrão de scroll passivo + rAF do hero-arc.tsx, sem libs de
  // animação. Só a leitura do progresso muda estado React (para os números);
  // o transform em si vai direto por CSS var, sem re-render.
  useEffect(() => {
    const el = parallaxRef.current;
    if (!el) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const section = el.closest("section");
    if (!section) return;

    // Distância fixa de scroll para completar o efeito (não a altura toda da
    // seção) — é o que deixa a resposta rápida/sensível em vez de exigir
    // rolar o Hero inteiro para perceber alguma coisa.
    const SCROLL_RANGE = 300;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = section.getBoundingClientRect();
      const scrollProgress = Math.min(Math.max(-rect.top / SCROLL_RANGE, 0), 1);
      setProgress(scrollProgress);
      if (reduceMotion) return;
      el.style.setProperty("--mockup-y", `${-scrollProgress * 204}px`);
      el.style.setProperty("--mockup-opacity", `${1 - scrollProgress}`);
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
    <div className={cn("relative", className)}>
      <div
        className="pointer-events-none absolute -inset-10 -z-10 rounded-[2.5rem] bg-aro-accent/20 blur-3xl"
        aria-hidden="true"
      />

      <div
        ref={parallaxRef}
        className="overflow-hidden rounded-xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] shadow-2xl backdrop-blur-sm will-change-transform"
        style={{
          transform: "translateY(var(--mockup-y, 0px))",
          opacity: "var(--mockup-opacity, 1)",
        }}
      >
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
                  "flex-1 rounded-t-sm bg-gradient-to-b from-aro-accent to-aro-accent/0",
                  index === BARRAS.length - 1 && "to-aro-accent/60"
                )}
                style={{
                  height: `${4 + (altura - 4) * progress}%`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
