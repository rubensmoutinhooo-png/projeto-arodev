import { Clock, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";

const CONFIANCA = [
  {
    icon: Clock,
    titulo: "Resposta em até 3h",
    descricao: "Sem dias de espera ou mensagens não respondidas.",
  },
  {
    icon: ShieldCheck,
    titulo: "Dados 100% Protegidos",
    descricao: "Suas informações e ideias de projeto seguras.",
  },
];

export function CtaFinal() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-gradient-to-b from-background via-aro-dark/70 to-aro-dark py-24 text-white md:py-32"
    >
      {/* costura visual com o resto da página: brilho suave, sem linha dura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(50%_100%_at_50%_0%,rgba(0,217,163,0.08),transparent_75%)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        <Reveal variant="left">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="draw-on-reveal h-px w-10 bg-gradient-to-r from-aro-accent to-aro-accent/0"
            />
            <span className="text-xs font-semibold tracking-[0.22em] text-aro-accent/90 uppercase">
              Contato
            </span>
          </div>
          <h2 className="mt-4 bg-gradient-to-r from-white via-white to-white/55 bg-clip-text font-heading text-2xl font-extrabold tracking-tight text-transparent sm:text-3xl">
            Pronto para impulsionar seu negócio e ter um site próprio à
            altura do que você construiu?
          </h2>
          <p className="mt-4 text-white/70">
            Dê o próximo passo para profissionalizar seu posicionamento
            digital. Fale diretamente conosco e receba uma proposta
            personalizada para o seu modelo de negócio.
          </p>

          <div className="mt-8 space-y-4">
            {CONFIANCA.map((item) => (
              <div key={item.titulo} className="flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-aro-accent">
                  <item.icon className="size-4" strokeWidth={1.75} />
                </span>
                <p className="text-sm leading-relaxed text-white/70">
                  <span className="font-semibold text-white">{item.titulo}:</span>{" "}
                  {item.descricao}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal variant="right" delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
