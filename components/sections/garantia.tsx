import { CalendarClock, Eye, KeyRound, LifeBuoy } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { MagneticGlowCard } from "@/components/magnetic-glow-card";

const COMPROMISSOS = [
  {
    icon: CalendarClock,
    titulo: "Prazo Garantido",
    descricao: "Data de entrega definida em contrato e cumprida à risca, sem desculpas ou atrasos.",
  },
  {
    icon: KeyRound,
    titulo: "Autonomia Total",
    descricao: "O código, o domínio e o site são 100% seus. Você tem total liberdade e controle.",
  },
  {
    icon: Eye,
    titulo: "Total Transparência",
    descricao: "Você acompanha cada evolução do desenvolvimento em tempo real, do início ao fim.",
  },
  {
    icon: LifeBuoy,
    titulo: "Suporte Próximo",
    descricao: "Nossa parceria continua após o site ir ao ar, com atendimento rápido direto no WhatsApp.",
  },
];

export function Garantia() {
  return (
    <section className="relative py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-1/4 size-96 rounded-full bg-aro-accent/10 blur-[110px]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            O que garantimos, sempre
          </h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Compromissos que valem para todo projeto que colocamos no ar —
            do primeiro ao centésimo.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COMPROMISSOS.map((item, index) => (
            <FadeIn key={item.titulo} delay={index * 80}>
              <MagneticGlowCard className="h-full rounded-xl p-px">
                {/* brilho/gradiente roxo — mesma lógica dos demais cards do site */}
                <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-[#6366f1] via-transparent to-[#a855f7] opacity-0 transition-opacity duration-500 group-hover/magnetic:opacity-100" />

                <div className="relative h-full rounded-[calc(var(--radius-xl)-1px)] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-colors duration-300 group-hover/magnetic:border-white/20">
                  <item.icon
                    className="size-8 text-aro-accent transition-transform duration-300 group-hover/magnetic:scale-110 group-hover/magnetic:text-[#c4b5fd]"
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-4 font-heading text-base font-semibold text-white">
                    {item.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {item.descricao}
                  </p>
                </div>
              </MagneticGlowCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
