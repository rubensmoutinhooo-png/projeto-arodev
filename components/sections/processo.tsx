import { Code2, Handshake, PenTool, Rocket } from "lucide-react";
import { ProcessoVideo } from "@/components/processo-video";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const ETAPAS = [
  {
    numero: "01",
    icon: Handshake,
    titulo: "Briefing & Alinhamento",
    descricao: "Conversamos para entender o seu modelo de negócio e objetivo.",
  },
  {
    numero: "02",
    icon: PenTool,
    titulo: "Aprovação do Design",
    descricao:
      "Eu crio o visual do site (no Figma) e te mostro antes de programar para você validar.",
  },
  {
    numero: "03",
    icon: Code2,
    titulo: "Desenvolvimento",
    descricao: "Transformo o design em código rápido, seguro e otimizado para celulares.",
  },
  {
    numero: "04",
    icon: Rocket,
    titulo: "Entrega & Suporte Ativo",
    descricao:
      "Coloco o site no ar 100% otimizado e ofereço 24h de suporte gratuito após a entrega. Depois desse prazo, qualquer alteração passa a ser feita através da assinatura de Manutenção Mensal.",
  },
];

export function Processo() {
  return (
    <section id="processo" className="relative overflow-hidden py-24 md:py-32">
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Processo"
          titulo="Um processo claro, do início ao fim"
          descricao="Você acompanha cada etapa do desenvolvimento com total transparência, sabendo exatamente o que está sendo feito e o que vem a seguir. Queremos garantir a sua satisfação, são feitas revisões e manutenções até a aprovação final do cliente."
        />

        <Reveal delay={100} variant="zoom">
          <ProcessoVideo />
        </Reveal>

        {/* mobile: lista simples, sem linha vertical (mantida de propósito) */}
        <Reveal className="mt-14 md:hidden">
          <ol className="space-y-8 pl-6">
            {ETAPAS.map((etapa) => (
              <li key={etapa.numero} className="grid grid-cols-[2rem_1fr] items-center gap-x-3">
                <span className="flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-aro-accent">
                  <etapa.icon className="size-4" strokeWidth={1.75} />
                </span>
                <span className="text-[11px] font-semibold tracking-wide text-aro-accent/70">
                  Etapa {etapa.numero}
                </span>
                <h3 className="col-start-2 font-heading font-semibold text-white">
                  {etapa.titulo}
                </h3>
                <p className="col-start-2 mt-1 text-sm leading-relaxed text-white/60">
                  {etapa.descricao}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>

        {/* desktop: linha do tempo que se desenha conforme entra na tela */}
        <Reveal className="mt-16 hidden md:block">
          <div className="relative grid grid-cols-4 gap-8">
            <span
              aria-hidden="true"
              className="draw-on-reveal absolute top-6 right-[12.5%] left-[12.5%] h-px bg-gradient-to-r from-aro-accent/60 via-aro-accent/25 to-aro-accent/60"
              style={{ transitionDuration: "1.8s" }}
            />
            {ETAPAS.map((etapa, index) => (
              <Reveal key={etapa.numero} delay={250 + index * 160} variant="zoom">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="flex size-12 items-center justify-center rounded-full border border-white/10 bg-[#101018] text-aro-accent shadow-[0_0_0_6px_rgba(8,8,12,0.9)]">
                      <etapa.icon className="size-5" strokeWidth={1.75} />
                    </div>
                    <span className="absolute -top-1.5 -right-2 rounded-full border border-white/10 bg-[#101018] px-1.5 text-[10px] font-bold text-white/50">
                      {etapa.numero}
                    </span>
                  </div>
                  <h3 className="font-heading text-base font-semibold text-white">
                    {etapa.titulo}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                    {etapa.descricao}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
