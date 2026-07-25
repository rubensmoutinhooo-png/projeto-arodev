import {
  CreditCard,
  Globe,
  LifeBuoy,
  Map,
  MessageCircle,
  RefreshCw,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SERVICOS = [
  {
    numero: "01",
    nome: "Landing Page",
    icon: Zap,
    destaque: true,
    prazo: "5 a 7 dias úteis",
    pergunta: "O que é?",
    descricao:
      "Uma página única, feita pra transformar quem clica no seu anúncio em contato direto com você.",
    explicacao:
      "Uma página só, sem menu nem distração. Ela mostra o que você oferece e leva o visitante direto pro seu WhatsApp ou formulário de contato.",
    precoPrefixo: "a partir de",
    preco: "R$ 300",
    cta: "Quero minha Landing Page",
    destaques: [
      {
        icon: Target,
        titulo: "Foco em transformar clique em contato",
        descricao: "Toda a página é pensada pra transformar quem clica no seu anúncio em cliente.",
      },
      {
        icon: Zap,
        titulo: "Abre rápido",
        descricao: "Sem o visitante esperar e desistir antes de ver sua oferta.",
      },
      {
        icon: Smartphone,
        titulo: "Contato em 1 clique",
        descricao: "Botões que levam direto pro seu WhatsApp, sem precisar procurar.",
      },
    ],
    idealPara:
      "Profissionais liberais (médicos, advogados, psicólogos, arquitetos), prestadores de serviços, infoprodutores, lançamentos de e-books e qualquer negócio que anuncia no Instagram ou Google e precisa de um lugar pra receber esse visitante.",
  },
  {
    numero: "02",
    nome: "Site Institucional",
    icon: Globe,
    prazo: "10 a 15 dias úteis",
    pergunta: "O que é?",
    descricao:
      "Um site com várias páginas, feito pra apresentar sua marca, sua equipe e seus serviços, e passar confiança pra quem pesquisa por você.",
    explicacao:
      "O site organiza tudo sobre sua empresa — Início, Sobre, Serviços e Contato — num só lugar, pra quem pesquisa por você entender rápido o que você faz.",
    precoPrefixo: "a partir de",
    preco: "R$ 1.200",
    cta: "Quero meu Site Institucional",
    destaques: [
      {
        icon: TrendingUp,
        titulo: "Mais credibilidade",
        descricao: "O site mostra que sua empresa é séria e estabelecida.",
      },
      {
        icon: Map,
        titulo: "Navegação completa",
        descricao: "Até 5 páginas organizadas: Início, Sobre, Serviços e Contato, entre outras.",
      },
      {
        icon: ShieldCheck,
        titulo: "Cuidado que continua",
        descricao:
          "Cuidamos dos ajustes nas primeiras 24 horas, e depois o plano de manutenção mensal mantém seu site sempre atualizado.",
      },
    ],
    idealPara:
      "Clínicas com equipe, escritórios de advocacia ou contabilidade, imobiliárias, construtoras, indústrias, escolas e empresas de serviços já estabelecidas que precisam de mais páginas pra mostrar equipe e serviços.",
  },
  {
    numero: "03",
    nome: "E-commerce",
    icon: ShoppingCart,
    prazo: "20 a 30 dias úteis",
    pergunta: "O que é?",
    descricao:
      "Sua loja aberta e vendendo 24 horas por dia. O cliente navega, escolhe o produto e paga ali mesmo, enquanto você gerencia tudo por um painel simples, sem precisar de técnico.",
    explicacao:
      "Ela tem catálogo de produtos, carrinho de compras e pagamento por Pix ou cartão, tudo integrado. Você mesmo controla estoque e pedidos pelo painel.",
    precoPrefixo: "a partir de",
    preco: "R$ 3.000",
    cta: "Quero minha Loja Virtual",
    destaques: [
      {
        icon: Zap,
        titulo: "Vende a qualquer hora",
        descricao: "A loja continua vendendo mesmo fora do seu horário de atendimento.",
      },
      {
        icon: CreditCard,
        titulo: "Pix e cartão",
        descricao: "O cliente paga por Pix (na hora) ou cartão, sem sair do site.",
      },
      {
        icon: ShieldCheck,
        titulo: "Loja sempre cuidada",
        descricao:
          "Ajustamos tudo nas primeiras 24 horas, e depois o plano de manutenção mensal mantém sua loja sempre funcionando.",
      },
    ],
    idealPara:
      "Lojas de roupas e calçados, marcas de acessórios, ateliês, produtos artesanais, cosméticos, livrarias e qualquer comércio que queira vender e despachar produtos físicos ou digitais direto pela internet.",
  },
  {
    numero: "04",
    nome: "Manutenção & Suporte Ativo",
    icon: LifeBuoy,
    prazo: "renovação mensal",
    descricao:
      "A segurança e a evolução do seu site garantidas todo mês. Você foca nas suas vendas, e a parte técnica e as alterações ficam 100% comigo.",
    precoPrefixo: "a partir de",
    preco: "R$ 250/mês",
    cta: "Quero minha Manutenção Mensal",
    destaques: [
      {
        icon: MessageCircle,
        titulo: "Alterações e Ajustes Inclusos",
        descricao:
          "Precisa trocar textos, atualizar fotos, banners, preços ou contatos? É só pedir no WhatsApp. Você não perde tempo tentando mexer em painéis.",
      },
      {
        icon: ShieldCheck,
        titulo: "Monitoramento & Hospedagem",
        descricao:
          "Seu site protegido, extremamente rápido e no ar 24/7. Servidor de alta performance já incluso no valor da assinatura.",
      },
      {
        icon: RefreshCw,
        titulo: "Backups & Segurança",
        descricao:
          "Cópias de segurança semanais e atualizações preventivas. Seu investimento protegido contra qualquer imprevisto.",
      },
    ],
    idealPara:
      "Empresas e profissionais que querem focar no próprio negócio e ter um especialista cuidando do site em tempo real.",
  },
];

const SERVICOS_PRINCIPAIS = SERVICOS.slice(0, 3);
const SERVICO_MANUTENCAO = SERVICOS[3];

type Servico = (typeof SERVICOS)[number];

function ServicoCard({ servico, index }: { servico: Servico; index: number }) {
  return (
    <Reveal delay={index * 90} className="h-full">
      <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl p-px transition-transform duration-300 hover:-translate-y-1">
        {/* borda de luz girando — só no plano em destaque */}
        {servico.destaque ? (
          <span
            aria-hidden="true"
            className="animate-beam-spin absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_320deg,rgba(0,217,163,0.8)_355deg,transparent_360deg)]"
          />
        ) : (
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-[inherit] bg-aro-accent/15 transition-colors duration-300 group-hover:bg-aro-accent/30"
          />
        )}

        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1.5rem-1px)] bg-aro-dark p-5 text-white shadow-sm transition-shadow duration-300 group-hover:shadow-xl sm:p-9">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
            aria-hidden="true"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-aro-accent/35 via-transparent to-aro-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          <div className="relative flex h-full flex-col">
            <div className="flex items-start justify-between">
              <span className="font-heading text-4xl font-bold text-white/15">
                {servico.numero}
              </span>
              <span
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap",
                  servico.destaque
                    ? "bg-aro-accent/15 text-aro-accent"
                    : "bg-white/10 text-white/70"
                )}
              >
                {servico.prazo}
                {servico.destaque && " · Popular"}
              </span>
            </div>

            <span className="mt-4 flex size-10 items-center justify-center rounded-xl bg-white/10 transition-colors duration-300 group-hover:bg-white/15 sm:mt-6 sm:size-11">
              <servico.icon
                className="size-5 text-aro-accent transition-colors duration-300 group-hover:text-white"
                strokeWidth={1.75}
              />
            </span>

            <h3 className="mt-4 font-heading text-lg font-bold sm:mt-5 sm:text-2xl">
              {servico.nome}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70 sm:mt-3">
              {servico.descricao}
            </p>

            {servico.pergunta && (
              <div className="mt-4 rounded-xl bg-white/5 p-3 sm:mt-5 sm:p-4">
                <h4 className="text-xs font-semibold tracking-wide text-white/50 uppercase">
                  {servico.pergunta}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                  {servico.explicacao}
                </p>
              </div>
            )}

            {servico.destaques && (
              <div className="mt-4 space-y-2 sm:mt-6">
                {servico.destaques.map((item) => (
                  <div
                    key={item.titulo}
                    className="flex items-start gap-2.5 rounded-xl bg-white/5 p-2.5 sm:gap-3 sm:p-3"
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-white/10 sm:size-8">
                      <item.icon className="size-4 text-aro-accent" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold">{item.titulo}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-white/75">
                        {item.descricao}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {servico.idealPara && (
              <p className="mt-4 text-xs leading-relaxed text-white/50 sm:mt-5">
                <span className="font-medium text-white/70">Ideal para:</span>{" "}
                {servico.idealPara}
              </p>
            )}

            <div className="mt-auto flex flex-col items-start gap-3 border-t border-white/10 pt-5 sm:gap-4 sm:pt-6">
              <div>
                {servico.precoPrefixo && (
                  <span className="block text-xs whitespace-nowrap text-white/50">
                    {servico.precoPrefixo}
                  </span>
                )}
                <div className="font-heading text-xl font-extrabold whitespace-nowrap sm:text-3xl">
                  {servico.preco}
                </div>
              </div>
              <a
                href="#contato"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 w-full bg-aro-accent text-aro-dark hover:bg-aro-accent/85 sm:h-12"
                )}
              >
                {servico.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Servicos() {
  return (
    <section id="servicos" className="relative overflow-hidden py-16 md:py-32">
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Serviços"
          titulo="O plano certo para o momento do seu negócio"
          descricao="Encontre o serviço ideal de acordo com suas demandas e seus objetivos. Cada projeto com prazos e investimentos 100% transparentes e definidos previamente."
        />

        <Reveal delay={120}>
          <div className="mt-6 flex flex-col items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-7">
            <p className="max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              Precisa de uma ajuda personalizada? Desenvolvemos uma análise
              estratégica do seu cenário para direcionar você à melhor
              decisão.
            </p>
            <a
              href="#contato"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full shrink-0 bg-aro-accent text-aro-dark hover:bg-aro-accent/85 sm:w-auto"
              )}
            >
              Fale Conosco
            </a>
          </div>
        </Reveal>

        <div className="mt-8 grid items-stretch gap-4 md:mt-12 md:gap-6 md:grid-cols-3">
          {SERVICOS_PRINCIPAIS.map((servico, index) => (
            <ServicoCard key={servico.nome} servico={servico} index={index} />
          ))}
        </div>

        <Reveal delay={180}>
          <span className="mt-8 mb-3 block text-xs font-semibold tracking-wide text-white/40 uppercase sm:mt-12 sm:mb-4">
            Serviço adicional
          </span>
        </Reveal>
        <ServicoCard servico={SERVICO_MANUTENCAO} index={SERVICOS.length - 1} />
      </div>
    </section>
  );
}
