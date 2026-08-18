import { BadgeCheck, Clock, LifeBuoy, MessageSquareText } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

const BENEFICIOS = [
  {
    icon: MessageSquareText,
    title: "Mais contatos",
    description:
      "Um site pensado para converter visita em mensagem, ligação ou pedido de orçamento.",
  },
  {
    icon: BadgeCheck,
    title: "Mais credibilidade",
    description:
      "Design profissional que transmite segurança para quem está conhecendo seu negócio agora.",
  },
  {
    icon: Clock,
    title: "Prazo curto",
    description:
      "Cronograma claro desde o início, com prazos objetivos e cumpridos — sem enrolação.",
  },
  {
    icon: LifeBuoy,
    title: "Suporte contínuo",
    description:
      "A relação não termina na entrega. Seguimos por perto para o seu site evoluir com o negócio.",
  },
];

export function Beneficios() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="font-heading text-2xl font-bold text-aro-dark sm:text-3xl">
            Um site bem-feito muda a forma como seu negócio é percebido
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFICIOS.map((item, index) => (
            <FadeIn key={item.title} delay={index * 80}>
              <div className="h-full rounded-2xl border border-black/5 bg-aro-light p-6">
                <item.icon className="size-8 text-aro-accent" strokeWidth={1.5} />
                <h3 className="mt-4 font-heading text-lg font-semibold text-aro-dark">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-aro-text/75">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
