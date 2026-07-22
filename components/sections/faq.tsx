import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/fade-in";
import { MagneticGlowCard } from "@/components/magnetic-glow-card";

const PERGUNTAS = [
  {
    pergunta: "Quanto custa um site?",
    resposta:
      "O valor varia conforme o escopo. A Landing Page custa a partir de R$ 500, o Site Institucional a partir de R$ 1.200 e o E-commerce a partir de R$ 3.000.",
  },
  {
    pergunta: "Quanto tempo leva para o meu site ficar pronto?",
    resposta:
      "O prazo médio de entrega é de 7 a 15 dias úteis após o envio de todas as informações, dependendo da complexidade do projeto.",
  },
  {
    pergunta: "O site e o código são meus?",
    resposta:
      "Sim, 100% seus. Após a entrega e aprovação final, você recebe a propriedade total do código, do domínio e de todas as contas vinculadas.",
  },
  {
    pergunta: "Preciso pagar hospedagem todo ano?",
    resposta:
      "Sim, ela é necessária para manter o site no ar. A hospedagem é um custo separado, cobrado anualmente.",
  },
  {
    pergunta: "E se quiser alterar algo após a entrega?",
    resposta:
      "Você tem uma garantia de suporte gratuito após o envio. Para alterações futuras (mudar banners, preços ou textos), basta acionar nossa Manutenção Mensal.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-1/3 size-96 rounded-full bg-aro-accent/10 blur-[110px]"
      />

      <div className="relative mx-auto max-w-3xl px-6">
        <FadeIn>
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            Perguntas frequentes
          </h2>
        </FadeIn>

        <Accordion className="mt-10 space-y-3">
          {PERGUNTAS.map((item, index) => (
            <FadeIn key={item.pergunta} delay={index * 60}>
              <MagneticGlowCard className="rounded-xl p-px">
                {/* brilho/gradiente sutil, mesma lógica dos cards de "O que garantimos, sempre" */}
                <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-aro-accent/35 via-transparent to-aro-accent/10 opacity-0 transition-opacity duration-500 group-hover/magnetic:opacity-100" />

                <AccordionItem className="relative overflow-hidden rounded-[calc(var(--radius-xl)-1px)] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-colors duration-300 group-hover/magnetic:border-white/20 sm:p-6">
                  <AccordionTrigger className="font-heading text-base text-white">
                    {item.pergunta}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60">
                    {item.resposta}
                  </AccordionContent>
                </AccordionItem>
              </MagneticGlowCard>
            </FadeIn>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
