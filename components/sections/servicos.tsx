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
      "Uma única página projetada para transformar visitantes em clientes. Cada elemento ali dentro tem um único objetivo: fazer o usuário clicar e entrar em contato com você.",
    explicacao:
      "Uma página direta ao ponto que apresenta sua solução, destaca seus diferenciais e leva o cliente direto para o seu WhatsApp ou formulário. Resultado rápido e sem complicação.",
    precoPrefixo: "a partir de",
    preco: "R$ 500",
    cta: "Quero minha Landing Page",
    destaques: [
      {
        icon: Target,
        titulo: "Foco em Vendas (ROI)",
        descricao: "Página inteira estruturada para converter cliques de anúncios em clientes reais.",
      },
      {
        icon: Zap,
        titulo: "Abertura Imediata",
        descricao: "Site ultra otimizado para carregar na hora e não perder nenhum visitante.",
      },
      {
        icon: Smartphone,
        titulo: "Contato Sem Fricção",
        descricao: "Botões estratégicos que guiam o usuário direto para o seu WhatsApp.",
      },
    ],
    idealPara:
      "Profissionais liberais (médicos, advogados, psicólogos, arquitetos), prestadores de serviços, infoprodutores, lançamentos de e-books e qualquer negócio que invista em tráfego pago (anúncios no Instagram/Google).",
  },
  {
    numero: "02",
    nome: "Site Institucional",
    icon: Globe,
    prazo: "10 a 15 dias úteis",
    pergunta: "O que é?",
    descricao:
      "Um site completo, com múltiplos blocos e páginas, feito para contar a história da sua marca, apresentar sua equipe e gerar total confiança desde o primeiro clique.",
    explicacao:
      "A casa digital da sua empresa na internet. Ele organiza tudo o que você faz (Início, Sobre, Serviços e Contato) para passar autoridade, profissionalismo e fechar contratos maiores.",
    precoPrefixo: "a partir de",
    preco: "R$ 1.200",
    cta: "Quero meu Site Institucional",
    destaques: [
      {
        icon: TrendingUp,
        titulo: "+60% de Credibilidade",
        descricao: "Posicionamento de marca que transmite solidez e atrai clientes mais qualificados.",
      },
      {
        icon: Map,
        titulo: "Navegação Completa",
        descricao: "Até 5 páginas estratégicas desenhadas sob medida para o seu funil de atendimento.",
      },
      {
        icon: ShieldCheck,
        titulo: "Acompanhamento Pós-Entrega",
        descricao: "30 dias de suporte técnico dedicado para sua total segurança.",
      },
    ],
    idealPara:
      "Clínicas com equipe, escritórios de advocacia ou contabilidade, imobiliárias, construtoras, indústrias, escolas e empresas de serviços consolidadas que precisam de um posicionamento forte e de alta credibilidade.",
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
      "Uma plataforma completa com catálogo, carrinho e pagamentos integrados (Pix e Cartão). Você controla o estoque e os pedidos de forma intuitiva e automática.",
    precoPrefixo: "a partir de",
    preco: "R$ 3.000",
    cta: "Quero minha Loja Virtual",
    destaques: [
      {
        icon: Zap,
        titulo: "Faturamento 24/7",
        descricao: "Vendas automáticas a qualquer hora do dia ou da noite.",
      },
      {
        icon: CreditCard,
        titulo: "Pix & Crédito",
        descricao: "Sistema de pagamento instantâneo e seguro já integrado.",
      },
      {
        icon: ShieldCheck,
        titulo: "Apoio Garantido",
        descricao: "60 dias de suporte pós-publicação para sua tranquilidade.",
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
    <Reveal delay={index * 90}>
      <div className="group relative overflow-hidden rounded-3xl p-px transition-transform duration-300 hover:-translate-y-1">
        {/* borda de luz girando — só no plano em destaque */}
        {servico.destaque ? (
          <span
            aria-hidden="true"
            className="animate-beam-spin absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_320deg,rgba(0,217,163,0.8)_355deg,transparent_360deg)]"
          />
        ) : (
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-[inherit] bg-white/10 transition-colors duration-300 group-hover:bg-white/20"
          />
        )}

        <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-aro-dark p-5 text-white shadow-sm transition-shadow duration-300 group-hover:shadow-xl sm:p-9">
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

          <div className="relative">
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

            <div className="mt-5 flex flex-col items-start gap-3 border-t border-white/10 pt-5 sm:mt-7 sm:gap-4 sm:pt-6">
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

        <div className="mt-8 grid items-start gap-4 md:mt-12 md:gap-6 md:grid-cols-3">
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
