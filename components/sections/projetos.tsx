import { ArrowRight } from "lucide-react";
import { ProjectMockup } from "@/components/project-mockup";
import { CalendarPulseIcon, CatalogFlowIcon } from "@/components/solution-icons";
import { MagneticGlowCard } from "@/components/magnetic-glow-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type Accent = "purple" | "cyan" | "default";

const ACCENTS: Record<Accent, { gradient: string; glow: string }> = {
  purple: {
    gradient: "from-[#f5b942] via-transparent to-[#e08a1e]",
    glow: "rgba(245,185,66,0.22)",
  },
  cyan: {
    gradient: "from-[#22d3ee] via-transparent to-[#0ea5e9]",
    glow: "rgba(34,211,238,0.22)",
  },
  default: {
    gradient: "from-aro-accent/35 via-transparent to-aro-accent/10",
    glow: "rgba(0,217,163,0.16)",
  },
};

const WHATSAPP_NUMBER = "5531993608249";

function buildWhatsAppLink(mensagem: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
}

const SEGMENTOS = [
  {
    segmento: "Clínicas e consultórios",
    descricao:
      "Como se diferencia: Um negócio sem site depende de mensagens manuais no WhatsApp para agendar, perdendo pacientes fora do horário comercial. Com a nossa solução, sua clínica ganha um canal oficial de alta credibilidade com agendamento automatizado, disponível 24h por dia e integrado à sua agenda.",
    variant: "clinica",
    accent: "purple",
    mensagemWhatsapp:
      "Olá! Vi a solução para clínicas e consultórios no site da Aro Dev e quero saber mais sobre o agendamento automatizado.",
  },
  {
    segmento: "Imobiliárias",
    descricao:
      "Como se diferencia: Empresas comuns dependem exclusivamente de portais de terceiros altamente concorridos. Com o seu próprio catálogo inteligente e formulários sem fricção, sua imobiliária constrói autoridade de marca, filtra clientes qualificados de forma automatizada e centraliza leads direto no seu funil próprio.",
    variant: "imobiliaria",
    accent: "cyan",
    mensagemWhatsapp:
      "Olá! Vi a solução para imobiliárias no site da Aro Dev e quero saber mais sobre o catálogo inteligente de imóveis.",
  },
  {
    segmento: "Restaurantes",
    descricao:
      "Cardápio digital, localização e caminho direto para reserva, sem passos extras entre a fome e a mesa.",
    variant: "restaurante",
    accent: "default",
    mensagemWhatsapp:
      "Olá! Vi a solução para restaurantes no site da Aro Dev e quero saber mais sobre o cardápio digital.",
  },
  {
    segmento: "Escritórios de advocacia",
    descricao:
      "Site institucional sóbrio, áreas de atuação bem definidas e um canal claro para novos casos.",
    variant: "advocacia",
    accent: "default",
    mensagemWhatsapp:
      "Olá! Vi a solução para escritórios de advocacia no site da Aro Dev e quero saber mais.",
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
    <section id="projetos" className="relative overflow-hidden py-24 md:py-32">
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Soluções"
          titulo="Soluções Sob Medida"
          descricao="Projetos estratégicos desenhados para transformar o posicionamento digital do seu negócio. Deixamos para trás a informalidade dos links de redes sociais para construir plataformas de alta conversão que vendem, agendam e captam clientes de forma automática e profissional."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {SEGMENTOS.map((item, index) => {
            const accent = ACCENTS[item.accent as Accent];
            return (
              <Reveal
                key={item.segmento}
                delay={(index % 2) * 100}
                variant={index % 2 === 0 ? "left" : "right"}
                className="h-full"
              >
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
                        href={buildWhatsAppLink(item.mensagemWhatsapp)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-aro-accent transition-colors duration-300 hover:text-white"
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
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
