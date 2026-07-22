import { Code2, Handshake, PenTool, Rocket } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { ProcessoVideo } from "@/components/processo-video";

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
    <section id="processo" className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/3 size-96 rounded-full bg-aro-accent/10 blur-[110px]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            Um processo claro, do início ao fim
          </h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Você acompanha cada etapa do desenvolvimento com total
            transparência, sabendo exatamente o que está sendo feito e o que
            vem a seguir. Queremos garantir a sua satisfação, são feitas
            revisões e manutenções até a aprovação final do cliente.
          </p>
        </FadeIn>

        <FadeIn delay={80}>
          <ProcessoVideo />
        </FadeIn>

        <div className="mt-14 md:hidden">
          <ol className="space-y-8 border-l border-white/10 pl-6">
            {ETAPAS.map((etapa) => (
              <li key={etapa.numero} className="relative">
                <span className="absolute top-0 -left-[2.05rem] flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-aro-accent">
                  <etapa.icon className="size-4" strokeWidth={1.75} />
                </span>
                <h3 className="font-heading font-semibold text-white">{etapa.titulo}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/60">
                  {etapa.descricao}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 hidden grid-cols-4 gap-8 md:grid">
          {ETAPAS.map((etapa, index) => (
            <FadeIn key={etapa.numero} delay={index * 80}>
              <div className="relative flex flex-col items-center text-center">
                {index !== 0 && (
                  <div className="absolute top-6 right-1/2 -z-10 h-px w-[calc(100%+2rem)] bg-white/10" />
                )}
                <div className="mb-4 flex size-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-aro-accent">
                  <etapa.icon className="size-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-heading text-base font-semibold text-white">
                  {etapa.titulo}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                  {etapa.descricao}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
