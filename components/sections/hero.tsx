import { Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { HeroArc } from "@/components/hero-arc";
import { HeroMockup } from "@/components/hero-mockup";
import { Magnetic } from "@/components/magnetic-button";
import { cn } from "@/lib/utils";

// Compromissos reais (os mesmos da seção de garantias), como prova
// social imediata logo abaixo do CTA.
const CONFIANCA_RAPIDA = [
  "Resposta em até 3h",
  "Código 100% seu",
  "Prazo definido em contrato",
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92svh] flex-col justify-center overflow-hidden pt-32 pb-20 text-white md:pt-36 md:pb-24"
    >
      {/* arco verde amarrado ao scroll, acima do AmbientBackground e atrás do conteúdo */}
      <HeroArc />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-8">
        <div>
          {/* título em linhas que sobem de dentro de máscaras */}
          <h1 className="font-heading text-4xl leading-[1.08] font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
            <span className="block overflow-hidden pb-1">
              <span className="mask-rise">Sites que transformam</span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="mask-rise" style={{ animationDelay: "140ms" }}>
                visitantes em <span className="text-shimmer">clientes.</span>
              </span>
            </span>
          </h1>

          {/* linha da marca se desenhando sob o título */}
          <span
            aria-hidden="true"
            className="bar-grow mt-6 block h-px w-28 bg-gradient-to-r from-aro-accent to-aro-accent/0"
            style={{ animationDelay: "600ms" }}
          />

          <p
            className="fade-up-load mt-6 max-w-lg text-base leading-relaxed text-white/70 md:text-lg"
            style={{ animationDelay: "500ms" }}
          >
            Sistemas e sites sob medida, rápidos, otimizados para o Google e
            desenhados para o posicionamento do seu negócio, sem depender de
            você para cada detalhe técnico.
          </p>

          <div
            className="fade-up-load mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "650ms" }}
          >
            <Magnetic>
              <a
                href="#contato"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full bg-aro-accent px-8 text-aro-dark hover:bg-aro-accent/85 hover:shadow-[0_8px_30px_rgba(0,217,163,0.35)] sm:w-auto"
                )}
              >
                Quero alavancar meu negócio
              </a>
            </Magnetic>
            <a
              href="#processo"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
              )}
            >
              Ver como trabalhamos
            </a>
          </div>

          <ul
            className="fade-up-load mt-8 flex flex-wrap gap-x-5 gap-y-2"
            style={{ animationDelay: "800ms" }}
          >
            {CONFIANCA_RAPIDA.map((item) => (
              <li key={item} className="flex items-center gap-1.5 text-xs text-white/55">
                <Check className="size-3.5 text-aro-accent" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:block">
          <HeroMockup className="translate-y-4" />
        </div>
      </div>

      {/* indicador de rolagem — convida para a próxima seção */}
      <a
        href="#processo"
        aria-label="Rolar para a seção de processo"
        className="fade-up-load absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/35 transition-colors duration-300 hover:text-aro-accent md:flex"
        style={{ animationDelay: "1200ms" }}
      >
        <span className="text-[10px] font-medium tracking-[0.3em] uppercase">Role</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-current p-1.5">
          <span className="animate-cue size-1 rounded-full bg-current" />
        </span>
      </a>
    </section>
  );
}
