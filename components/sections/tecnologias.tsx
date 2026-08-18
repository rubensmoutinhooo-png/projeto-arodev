import { Rocket, Palette, Workflow, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

const TECNOLOGIAS = [
  {
    icon: Rocket,
    nome: "Next.js & React",
    descricao: "Sites rápidos e modernos, otimizados para os buscadores.",
  },
  {
    icon: Palette,
    nome: "Tailwind CSS",
    descricao: "Design consistente, o mesmo capricho em qualquer tamanho de tela.",
  },
  {
    icon: Workflow,
    nome: "Automações",
    descricao: "Tarefas repetitivas do seu negócio rodando sozinhas, sem esforço manual.",
  },
  {
    icon: Sparkles,
    nome: "Integrações com IA",
    descricao: "IA aplicada onde faz sentido, deixando atendimento e processos mais ágeis.",
  },
];

export function Tecnologias() {
  return (
    <section className="bg-aro-light py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="font-heading text-2xl font-bold text-aro-dark sm:text-3xl">
            Tecnologia que trabalha a favor do resultado
          </h2>
          <p className="mt-3 max-w-2xl text-aro-text/75">
            Usamos ferramentas modernas para entregar sites rápidos, seguros
            e prontos para evoluir — sem transformar isso em jargão técnico
            pra você decifrar.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TECNOLOGIAS.map((tech, index) => (
            <FadeIn key={tech.nome} delay={index * 80}>
              <div className="flex h-full flex-col gap-3 rounded-2xl bg-white p-6">
                <tech.icon className="size-7 text-aro-dark" strokeWidth={1.5} />
                <h3 className="font-heading text-base font-semibold text-aro-dark">
                  {tech.nome}
                </h3>
                <p className="text-sm leading-relaxed text-aro-text/70">
                  {tech.descricao}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
