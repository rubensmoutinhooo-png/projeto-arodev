import { ArrowRight } from "lucide-react";
import { ProjectMockup } from "@/components/project-mockup";
import { CalendarPulseIcon, CatalogFlowIcon } from "@/components/solution-icons";
import { FadeIn } from "@/components/fade-in";
import { MagneticGlowCard } from "@/components/magnetic-glow-card";

type Accent = "purple" | "cyan" | "default";

const ACCENTS: Record<Accent, { gradient: string; glow: string }> = {
  purple: {
    gradient: "from-[#8b5cf6] via-transparent to-[#a855f7]",
    glow: "rgba(168,85,247,0.22)",
  },
  cyan: {
    gradient: "from-[#22d3ee] via-transparent to-[#0ea5e9]",
    glow: "rgba(34,211,238,0.22)",
  },
  default: {
    gradient: "from-[#6366f1] via-transparent to-[#a855f7]",
    glow: "rgba(99,102,241,0.16)",
  },
};

const SEGMENTOS = [
  {
    segmento: "Clínicas e consultórios",
    descricao:
      "Como se diferencia: Um negócio sem site depende de mensagens manuais no WhatsApp para agendar, perdendo pacientes fora do horário comercial. Com a nossa solução, sua clínica ganha um canal oficial de alta credibilidade com agendamento automatizado, disponível 24h por dia e integrado à sua agenda.",
    variant: "clinica",
    accent: "purple",
  },
  {
    segmento: "Imobiliárias",
    descricao:
      "Como se diferencia: Empresas comuns dependem exclusivamente de portais de terceiros altamente concorridos. Com o seu próprio catálogo inteligente e formulários sem fricção, sua imobiliária constrói autoridade de marca, filtra clientes qualificados de forma automatizada e centraliza leads direto no seu funil próprio.",
    variant: "imobiliaria",
    accent: "cyan",
  },
  {
    segmento: "Restaurantes",
    descricao:
      "Cardápio digital, localização e caminho direto para reserva — sem passos extras entre a fome e a mesa.",
    variant: "restaurante",
    accent: "default",
  },
  {
    segmento: "Escritórios de advocacia",
    descricao:
      "Site institucional sóbrio, áreas de atuação bem definidas e um canal claro para novos casos.",
    variant: "advocacia",
    accent: "default",
  },
] as const;

function SegmentoIllustration({ item }: { item: (typeof SEGMENTOS)[number] }) {
  if (item.variant === "clinica") return <CalendarPulseIcon />;
  if (item.variant === "imobiliaria") return <CatalogFlowIcon />;
  return (
    <ProjectMockup
      variant={item.variant}
      className="transition-transform duration-500 group-hover/magnetic:scale-[1.03]"
    />
  );
}

export function Projetos() {
  return (
    <section id="projetos" className="relative py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 size-80 rounded-full bg-aro-accent/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 size-96 rounded-full bg-[#8b5cf6]/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            Soluções Sob Medida
          </h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Projetos estratégicos desenhados para transformar o
            posicionamento digital do seu negócio. Deixamos para trás a
            informalidade dos links de redes sociais para construir
            plataformas de alta conversão que vendem, agendam e captam
            clientes de forma automática e profissional.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {SEGMENTOS.map((item, index) => {
            const accent = ACCENTS[item.accent as Accent];
            return (
              <FadeIn key={item.segmento} delay={index * 80}>
                <MagneticGlowCard className="h-full rounded-3xl p-px" glowColor={accent.glow}>
                  {/* brilho/gradiente que combina com a animação de cada card */}
                  <div
                    className={`pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover/magnetic:opacity-100 ${accent.gradient}`}
                  />

                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1.5rem-1px)] border border-white/10 bg-black/40 backdrop-blur-xl transition-colors duration-300 group-hover/magnetic:border-white/20">
                    {/* textura de pontinhos, mesmo padrão dos cards de "Serviços" */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.12]"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                        backgroundSize: "18px 18px",
                      }}
                      aria-hidden="true"
                    />

                    <div className="relative flex justify-center bg-black/20 p-5">
                      <SegmentoIllustration item={item} />
                    </div>

                    <div className="relative flex flex-1 flex-col p-5">
                      <h3 className="font-heading text-lg font-semibold text-white">
                        {item.segmento}
                      </h3>
                      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-white/60">
                        {item.descricao}
                      </p>
                      <a
                        href="#contato"
                        className="group/link mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-aro-accent transition-colors duration-300 hover:text-[#c4b5fd]"
                      >
                        Quero uma solução assim
                        <ArrowRight
                          className="size-3.5 transition-transform duration-300 group-hover/link:translate-x-1"
                          strokeWidth={2.25}
                        />
                      </a>
                    </div>
                  </div>
                </MagneticGlowCard>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
