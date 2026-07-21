import { Clock, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/fade-in";

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
    <section id="contato" className="bg-aro-dark py-20 text-white md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        <FadeIn>
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
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
                  <span className="font-semibold text-white">{item.titulo}</span> —{" "}
                  {item.descricao}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
}
