import { Quote } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

// TODO: substituir os 3 espaços abaixo por depoimentos reais assim que os
// primeiros projetos forem entregues. Não inventar nomes/empresas.
const DEPOIMENTOS_PLACEHOLDER = [
  "[Depoimento a ser coletado do Cliente #1]",
  "[Depoimento a ser coletado do Cliente #2]",
  "[Depoimento a ser coletado do Cliente #3]",
];

export function Depoimentos() {
  return (
    <section className="bg-aro-light py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="font-heading text-2xl font-bold text-aro-dark sm:text-3xl">
            O que dizem nossos clientes
          </h2>
          <p className="mt-3 max-w-2xl text-aro-text/75">
            Espaço reservado para depoimentos reais — em breve, atualizado
            com os primeiros clientes atendidos.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {DEPOIMENTOS_PLACEHOLDER.map((texto, index) => (
            <FadeIn key={texto} delay={index * 80}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-dashed border-aro-dark/20 bg-white/60 p-6">
                <Quote className="size-6 text-aro-dark/25" strokeWidth={1.5} />
                <p className="mt-4 text-sm leading-relaxed text-aro-text/50 italic">
                  {texto}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
