import { CalendarClock, Eye, KeyRound, LifeBuoy } from "lucide-react";
import { MagneticGlowCard } from "@/components/magnetic-glow-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

const COMPROMISSOS = [
  {
    icon: CalendarClock,
    titulo: "Prazo Garantido",
    descricao: "Data de entrega definida em contrato e cumprida à risca, sem desculpas ou atrasos.",
  },
  {
    icon: KeyRound,
    anim: "turn",
    titulo: "Autonomia Total",
    descricao: "O código, o domínio e o site são 100% seus. Você tem total liberdade e controle.",
  },
  {
    icon: Eye,
    anim: "blink",
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
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Garantias"
          titulo="O que garantimos, sempre"
          descricao="Compromissos que valem para todo projeto que colocamos no ar, do primeiro ao centésimo."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COMPROMISSOS.map((item, index) => (
            <Reveal key={item.titulo} delay={index * 90} variant="zoom" className="h-full">
              <MagneticGlowCard className="h-full rounded-xl p-px">
                {/* brilho/gradiente sutil, mesma lógica dos demais cards do site */}
                <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-aro-accent/35 via-transparent to-aro-accent/10 opacity-0 transition-opacity duration-500 group-hover/magnetic:opacity-100" />

                <div className="relative h-full rounded-[calc(var(--radius-xl)-1px)] border border-aro-accent/15 bg-white/[0.03] p-6 backdrop-blur-xl transition-colors duration-300 group-hover/magnetic:border-aro-accent/35">
                  <item.icon
                    className={cn(
                      "size-8 text-aro-accent transition-transform duration-300 group-hover/magnetic:scale-110 group-hover/magnetic:text-white",
                      item.anim === "blink" && "icon-blink",
                      item.anim === "turn" && "icon-turn"
                    )}
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
