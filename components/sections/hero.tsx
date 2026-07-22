import { buttonVariants } from "@/components/ui/button";
import { HeroMockup } from "@/components/hero-mockup";
import { Magnetic } from "@/components/magnetic-button";
import { WordReveal } from "@/components/word-reveal";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-32 pb-20 text-white md:pt-40 md:pb-28"
    >
      {/* 1a — aurora animada */}
      <div
        aria-hidden="true"
        className="animate-aurora pointer-events-none absolute top-10 -left-10 size-[340px] rounded-full bg-aro-accent/15 blur-[60px]"
      />
      <div
        aria-hidden="true"
        className="animate-aurora-slow pointer-events-none absolute right-0 bottom-0 size-[300px] rounded-full bg-aro-accent/10 blur-[60px]"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-8">
        <div>
          <h1 className="font-heading text-4xl leading-[1.05] font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
            <WordReveal text="Sites que transformam" />
            <br />
            <WordReveal text="visitantes em" delay={340} />{" "}
            <WordReveal text="clientes." delay={560} className="text-aro-accent" />
          </h1>
          <p
            className="fade-up-load mt-6 max-w-lg text-base leading-relaxed text-white/70 md:text-lg"
            style={{ animationDelay: "750ms" }}
          >
            Sistemas e sites sob medida, rápidos, otimizados para o Google e
            desenhados para o posicionamento do seu negócio, sem depender de
            você para cada detalhe técnico.
          </p>
          <div
            className="fade-up-load mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "900ms" }}
          >
            {/* 1c — botão magnético */}
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
        </div>

        <div className="hidden md:block">
          <HeroMockup className="translate-y-4" />
        </div>
      </div>
    </section>
  );
}
