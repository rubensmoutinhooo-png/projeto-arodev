import {
  BadgeCheck,
  MessageSquareText,
  Palette,
  Quote,
  Rocket,
  Sparkles,
  Timer,
  TrendingUp,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { MagneticGlowCard } from "@/components/magnetic-glow-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

interface Destaque {
  icon: LucideIcon;
  titulo: string;
  descricao: string;
}

const DESTAQUES: Destaque[] = [
  {
    icon: MessageSquareText,
    titulo: "Mais contatos",
    descricao: "Um site pensado para converter visita em mensagem, ligação ou pedido de orçamento.",
  },
  {
    icon: BadgeCheck,
    titulo: "Mais credibilidade",
    descricao: "Design profissional que transmite segurança para quem está conhecendo seu negócio agora.",
  },
  {
    icon: Timer,
    titulo: "Prazo curto",
    descricao: "Landing Page em até 5 dias é regra, não exceção — cronograma claro desde o início.",
  },
  {
    icon: TrendingUp,
    titulo: "Capacidade de evoluir",
    descricao: "Seu site pode crescer para automação, sistema e IA aplicada, conforme o negócio precisar.",
  },
];

const TECNOLOGIAS = [
  { icon: Rocket, nome: "Next.js & React" },
  { icon: Palette, nome: "Tailwind CSS" },
  { icon: Workflow, nome: "Automações" },
  { icon: Sparkles, nome: "Integrações com IA" },
];

// TODO: substituir os 3 espaços abaixo por depoimentos reais assim que os
// primeiros projetos forem entregues. Não inventar nomes/empresas.
const DEPOIMENTOS_PLACEHOLDER = [
  "[Depoimento a ser coletado do Cliente #1]",
  "[Depoimento a ser coletado do Cliente #2]",
  "[Depoimento a ser coletado do Cliente #3]",
];

export function Destaques() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Por que a Aro Dev"
          titulo="Resultado, tecnologia e prova social"
          descricao="O que diferencia o trabalho, as ferramentas por trás dele e o que os clientes têm a dizer."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DESTAQUES.map((item, index) => (
            <Reveal key={item.titulo} delay={index * 100} variant="zoom" className="h-full">
              <MagneticGlowCard className="h-full rounded-2xl p-px">
                <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-aro-accent/35 via-transparent to-aro-accent/10 opacity-0 transition-opacity duration-500 group-hover/magnetic:opacity-100" />
                <div className="relative h-full rounded-[calc(1rem-1px)] border border-aro-accent/15 bg-white/[0.03] p-6 backdrop-blur-xl transition-colors duration-300 group-hover/magnetic:border-aro-accent/35">
                  <item.icon
                    className="size-8 text-aro-accent transition-transform duration-300 group-hover/magnetic:scale-110 group-hover/magnetic:text-white"
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-4 font-heading text-base font-semibold text-white">
                    {item.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{item.descricao}</p>
                </div>
              </MagneticGlowCard>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16" variant="fade" delay={150}>
          <p className="text-xs font-semibold tracking-[0.22em] text-white/40 uppercase">
            Tecnologias que usamos
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {TECNOLOGIAS.map((tech, index) => (
              <Reveal key={tech.nome} delay={200 + index * 80} variant="fade">
                <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70 transition-colors duration-300 hover:border-aro-accent/35 hover:text-white">
                  <tech.icon className="size-4 text-aro-accent" strokeWidth={1.75} />
                  {tech.nome}
                </span>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {DEPOIMENTOS_PLACEHOLDER.map((texto, index) => (
            <Reveal key={texto} delay={index * 100} variant="up">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-6">
                <Quote className="size-6 text-white/25" strokeWidth={1.5} />
                <p className="mt-4 text-sm leading-relaxed text-white/40 italic">{texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
