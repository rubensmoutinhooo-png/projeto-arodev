import { ListChecks, Timer, TrendingUp, Repeat } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

const DIFERENCIAIS = [
  {
    icon: ListChecks,
    titulo: "Processo estruturado",
    descricao:
      "Briefing, estratégia, design, desenvolvimento, testes, publicação e suporte — cada etapa documentada, sem surpresas no caminho.",
  },
  {
    icon: Timer,
    titulo: "Prazos cumpridos",
    descricao:
      "Definimos o prazo no orçamento e trabalhamos para entregar dentro dele. Landing Page em até 5 dias é regra, não exceção.",
  },
  {
    icon: TrendingUp,
    titulo: "Capacidade de evoluir",
    descricao:
      "Seu projeto pode começar como site e crescer para automação, sistema e IA aplicada, conforme o negócio precisar.",
  },
  {
    icon: Repeat,
    titulo: "Relação contínua",
    descricao:
      "Com o Growth Digital, seguimos cuidando do seu site todo mês — a gente não some depois da entrega.",
  },
];

export function Diferenciais() {
  return (
    <section className="bg-aro-dark py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
            Por que empresas escolhem a Aro Dev
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {DIFERENCIAIS.map((item, index) => (
            <FadeIn key={item.titulo} delay={index * 80}>
              <div className="flex gap-4">
                <item.icon className="size-7 shrink-0 text-aro-accent" strokeWidth={1.5} />
                <div>
                  <h3 className="font-heading font-semibold">{item.titulo}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/65">
                    {item.descricao}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
