"use client";

import {
  Building2,
  CalendarCheck2,
  MapPin,
  Menu,
  ShoppingCart,
  Star,
} from "lucide-react";
import type { CSSProperties } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

type MockupVariant = "clinica" | "imobiliaria" | "restaurante" | "advocacia";

interface ProjectMockupProps {
  variant: MockupVariant;
  className?: string;
}

// Texto "digitado" com cursor piscando, em loop. Classes no globals.css.
function TypeText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={cn("type-wrap", className)}>
      <span aria-hidden="true" className="type-sizer">
        {text}
      </span>
      <span
        className="type-text"
        style={{ "--type-steps": text.length } as CSSProperties}
      >
        {text}
      </span>
    </span>
  );
}

function PhoneFrame({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-44 rounded-[1.75rem] border-[6px] border-aro-dark bg-aro-dark p-1.5 shadow-md",
        className
      )}
    >
      <div className="mx-auto mb-1.5 h-1 w-8 rounded-full bg-white/30" />
      <div className="flex aspect-[9/17] flex-col overflow-hidden rounded-[1.1rem] bg-white">
        {children}
      </div>
    </div>
  );
}

function BrowserFrameShell({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("rounded-2xl bg-aro-dark p-1.5 shadow-md", className)}>
      <div className="overflow-hidden rounded-xl border border-black/5 bg-white">
        <div className="flex items-center gap-1.5 border-b border-black/5 bg-white px-3 py-2.5">
          <span className="size-2.5 rounded-full bg-black/10" />
          <span className="size-2.5 rounded-full bg-black/10" />
          <span className="size-2.5 rounded-full bg-black/10" />
        </div>
        <div className="flex aspect-[16/10] flex-col bg-white">{children}</div>
      </div>
    </div>
  );
}

function ClinicaMockup({ className }: { className?: string }) {
  return (
    <PhoneFrame className={className}>
      <div className="flex items-center gap-2 border-b border-black/5 px-3 py-2.5">
        <span className="flex size-6 items-center justify-center rounded-full bg-aro-accent/15 text-[10px] font-bold text-aro-dark">
          CV
        </span>
        <span className="text-[11px] font-semibold text-aro-dark">Clínica Vitta</span>
      </div>
      <div className="flex-1 space-y-2.5 p-3">
        <span className="text-[9px] font-medium tracking-wide text-aro-dark/40 uppercase">
          Próximos horários
        </span>
        <div className="flex items-center gap-2 rounded-lg border-2 border-aro-accent bg-aro-accent/10 px-2.5 py-2">
          <CalendarCheck2 className="size-3.5 text-aro-accent" strokeWidth={2} />
          <span className="text-[10px] font-medium text-aro-dark">Qui, 09:30</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-black/10 px-2.5 py-2">
          <CalendarCheck2 className="size-3.5 text-aro-dark/30" strokeWidth={2} />
          <span className="text-[10px] text-aro-dark/50">Qui, 14:00</span>
        </div>
      </div>
      <div className="p-3 pt-0">
        <div className="rounded-lg bg-aro-accent py-2 text-center text-[10px] font-semibold text-aro-dark">
          Confirmar agendamento
        </div>
      </div>
    </PhoneFrame>
  );
}

function ImobiliariaMockup({ className }: { className?: string }) {
  return (
    <BrowserFrameShell className={className}>
      <div className="flex items-center justify-between px-4 pt-3">
        <span className="text-[11px] font-semibold text-aro-dark">Imóveis em destaque</span>
        <span className="rounded-full bg-aro-light px-2 py-0.5 text-[9px] text-aro-dark/50">
          Filtros
        </span>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-2.5 p-3">
        {["R$ 480.000", "R$ 620.000"].map((preco) => (
          <div
            key={preco}
            className="flex flex-col overflow-hidden rounded-lg border border-black/5"
          >
            <div className="flex flex-1 items-center justify-center bg-aro-light">
              <Building2 className="size-6 text-aro-dark/25" strokeWidth={1.5} />
            </div>
            <div className="space-y-0.5 p-1.5">
              <span className="block text-[9px] font-semibold text-aro-dark">{preco}</span>
              <span className="flex items-center gap-0.5 text-[8px] text-aro-dark/45">
                <MapPin className="size-2.5" /> 3 quartos · 2 vagas
              </span>
            </div>
          </div>
        ))}
      </div>
    </BrowserFrameShell>
  );
}

const PRATOS = [
  ["Risoto de funghi", "R$ 54"],
  ["Salmão grelhado", "R$ 68"],
  ["Burrata artesanal", "R$ 42"],
  ["Tagliatelle ao ragu", "R$ 58"],
  ["Moqueca de peixe", "R$ 72"],
  ["Tiramisù da casa", "R$ 28"],
  ["Nhoque ao pesto", "R$ 49"],
  ["Picanha na brasa", "R$ 84"],
  ["Ceviche clássico", "R$ 46"],
  ["Petit gâteau", "R$ 32"],
];

function RestauranteMockup({ className }: { className?: string }) {
  return (
    <div className={className}>
      {/* float em um wrapper próprio pra não brigar com o hover-scale do card */}
      <div className="animate-float">
        <PhoneFrame>
          <div className="flex items-center justify-between border-b border-black/5 px-3 py-2.5">
            <TypeText
              text="Sabor & Cia"
              className="text-[11px] font-semibold text-aro-dark"
            />
            <span className="flex items-center gap-0.5 text-[9px] text-aro-dark/50">
              <Star className="size-2.5 fill-aro-accent text-aro-accent" /> 4.8
            </span>
          </div>
          <div className="relative flex-1 overflow-hidden">
            <div className="animate-phone-scroll space-y-2 p-3">
              {PRATOS.map(([prato, preco]) => (
                <div
                  key={prato}
                  className="flex items-center justify-between rounded-lg border border-black/5 px-2.5 py-2"
                >
                  <span className="text-[9px] text-aro-dark/70">{prato}</span>
                  <span className="text-[9px] font-semibold text-aro-dark">{preco}</span>
                </div>
              ))}
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white to-transparent"
            />
          </div>
          <div className="flex items-center justify-between p-3 pt-0">
            <span className="text-[9px] text-aro-dark/40">2 itens</span>
            <div className="flex items-center gap-1 rounded-lg bg-aro-accent px-3 py-1.5 text-[10px] font-semibold text-aro-dark">
              <ShoppingCart className="size-3" /> Ver cardápio
            </div>
          </div>
        </PhoneFrame>
      </div>
    </div>
  );
}

const AREAS = ["Trabalhista", "Cível", "Empresarial"];

function AdvocaciaMockup({ className }: { className?: string }) {
  // a sequência só dispara quando o card entra na tela
  const { ref, isInView } = useInView<HTMLDivElement>(0.3);

  return (
    <BrowserFrameShell className={className}>
      <div ref={ref} className="flex flex-1 flex-col">
        <div className="flex items-center justify-between px-4 pt-3">
          <TypeText
            text="Nunes & Barros"
            className="text-[11px] font-semibold text-aro-dark"
          />
          <Menu className="size-3.5 text-aro-dark/30" />
        </div>
        <div className="space-y-1.5 px-4 pt-4">
          <div
            className={cn("h-2 w-28 rounded-full bg-aro-dark/15", isInView ? "bar-grow" : "opacity-0")}
            style={{ animationDelay: "300ms" }}
          />
          <div
            className={cn("h-2 w-20 rounded-full bg-aro-dark/10", isInView ? "bar-grow" : "opacity-0")}
            style={{ animationDelay: "450ms" }}
          />
        </div>
        <div className="flex flex-1 flex-wrap items-start gap-1.5 px-4 pt-3">
          {AREAS.map((area, index) => (
            <span
              key={area}
              className={cn(
                "rounded-full border border-aro-accent/40 bg-aro-accent/10 px-2 py-0.5 text-[8px] font-medium text-aro-dark/70",
                isInView ? "pop-in" : "opacity-0"
              )}
              style={{ animationDelay: `${600 + index * 150}ms` }}
            >
              {area}
            </span>
          ))}
        </div>
        <div className="p-4 pt-2">
          <div
            className={cn(
              "w-fit rounded-lg bg-aro-dark px-3 py-1.5 text-[9px] font-semibold text-white",
              isInView ? "pop-in" : "opacity-0"
            )}
            style={{ animationDelay: "1100ms" }}
          >
            Fale com um advogado
          </div>
        </div>
      </div>
    </BrowserFrameShell>
  );
}

export function ProjectMockup({ variant, className }: ProjectMockupProps) {
  switch (variant) {
    case "clinica":
      return <ClinicaMockup className={className} />;
    case "imobiliaria":
      return <ImobiliariaMockup className={className} />;
    case "restaurante":
      return <RestauranteMockup className={className} />;
    case "advocacia":
      return <AdvocaciaMockup className={className} />;
  }
}
