import { Compass, Infinity as InfinityIcon, Landmark, Search, type LucideIcon } from "lucide-react";
import { MagneticGlowCard } from "@/components/magnetic-glow-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

interface Pilar {
  icon: LucideIcon;
  tag: string;
  titulo: string;
  descricao: string;
  span: string;
  destaque?: string;
}

const PILARES: Pilar[] = [
  {
    icon: Landmark,
    tag: "Credibilidade",
    titulo: "Credibilidade imbatível",
    descricao:
      "Redes sociais trazem audiência, mas um site próprio transmite autoridade, solidez e profissionalismo absoluto. É a diferença entre parecer amador e ser visto como líder de mercado.",
    span: "lg:col-span-2",
  },
  {
    icon: InfinityIcon,
    tag: "Vendas 24/7",
    titulo: "Piloto automático",
    descricao:
      "Enquanto sua equipe dorme, seu site continua atraindo, informando e capturando leads qualificados a qualquer hora do dia ou da noite.",
    span: "lg:row-span-2",
    destaque: "24/7",
  },
  {
    icon: Compass,
    tag: "Independência",
    titulo: "Livre de algoritmos",
    descricao:
      "Não fique refém das mudanças de regras do Instagram ou TikTok. No seu site, você dita as regras e é o único dono do seu canal de vendas.",
    span: "",
  },
  {
    icon: Search,
    tag: "SEO",
    titulo: "Posicionamento e valor",
    descricao:
      "Quem não é visto no Google não existe para os maiores compradores. Um site otimizado atrai clientes com maior poder aquisitivo, prontos para fechar negócio.",
    span: "",
  },
];

export function PorQueInvestir() {
  return (
    <section className="relative overflow-hidden py-24 text-white md:py-32">
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="A tese"
          titulo="Por que investir em um site profissional?"
          descricao="Quatro motivos pelos quais o seu site é o ativo mais importante que o seu negócio pode ter, não apenas um cartão de visitas."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:auto-rows-fr lg:grid-cols-3">
          {PILARES.map((pilar, index) => (
            <Reveal key={pilar.titulo} delay={index * 110} variant="zoom" className={pilar.span}>
              <MagneticGlowCard className="h-full rounded-3xl p-px">
                <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-aro-accent/35 via-transparent to-aro-accent/10 opacity-0 transition-opacity duration-500 group-hover/magnetic:opacity-100" />
                <div className="relative flex h-full flex-col rounded-[calc(1.5rem-1px)] border border-aro-accent/15 bg-white/[0.03] p-6 backdrop-blur-xl transition-colors duration-300 group-hover/magnetic:border-aro-accent/35 sm:p-7">
                  {/* ícone pipoca junto com a entrada do card */}
                  <span
                    className="pop-in flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-aro-accent transition-transform duration-300 group-hover/magnetic:scale-110 group-hover/magnetic:text-white"
                    style={{ animationDelay: `${index * 110 + 250}ms` }}
                  >
                    <pilar.icon
                      className="size-5 transition-transform duration-500 group-hover/magnetic:rotate-6"
                      strokeWidth={1.75}
                    />
                  </span>

                  <span className="mt-5 text-xs font-semibold tracking-wide text-white/40 uppercase">
                    {pilar.tag}
                  </span>
                  <h3 className="mt-1.5 font-heading text-lg font-bold sm:text-xl">
                    {pilar.titulo}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/60">
                    {pilar.descricao}
                  </p>

                  {pilar.destaque && (
                    <span
                      aria-hidden="true"
                      className={cn(
                        "pop-in glow-pulse mt-auto bg-gradient-to-r from-aro-accent to-white bg-clip-text pt-6 font-heading text-5xl font-extrabold text-transparent",
                        "drop-shadow-[0_0_24px_rgba(0,217,163,0.35)]"
                      )}
                      style={{ animationDelay: `${index * 110 + 400}ms, 0ms` }}
                    >
                      {pilar.destaque}
                    </span>
                  )}
                </div>
              </MagneticGlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
