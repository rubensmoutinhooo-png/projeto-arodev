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
import { FadeIn } from "@/components/fade-in";
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
  const isDark = true;

  return (
    <FadeIn delay={index * 60}>
      <div
        className={cn(
          "group relative overflow-hidden rounded-3xl border p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9",
          isDark
            ? "border-white/10 bg-aro-dark text-white hover:border-white/20"
            : "border-black/5 bg-white text-aro-dark hover:border-aro-accent/30"
        )}
      >
        {isDark && (
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
            aria-hidden="true"
          />
        )}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-aro-accent/35 via-transparent to-aro-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        <div className="relative">
          <div className="flex items-start justify-between">
            <span
              className={cn(
                "font-heading text-4xl font-bold",
                isDark ? "text-white/15" : "text-aro-dark/15"
              )}
            >
              {servico.numero}
            </span>
            <span
              className={cn(
                "rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap",
                isDark ? "bg-white/10 text-white/70" : "bg-black/5 text-aro-text/60"
              )}
            >
              {servico.prazo}
              {servico.destaque && " · Popular"}
            </span>
          </div>

          <span
            className={cn(
              "mt-6 flex size-11 items-center justify-center rounded-xl transition-colors duration-300",
              isDark
                ? "bg-white/10 group-hover:bg-white/15"
                : "bg-aro-accent/10 group-hover:bg-aro-accent/15"
            )}
          >
            <servico.icon
              className="size-5 text-aro-accent transition-colors duration-300 group-hover:text-white"
              strokeWidth={1.75}
            />
          </span>

          <h3 className="mt-5 font-heading text-xl font-bold sm:text-2xl">{servico.nome}</h3>
          <p
            className={cn(
              "mt-3 text-sm leading-relaxed",
              isDark ? "text-white/70" : "text-aro-text/70"
            )}
          >
            {servico.descricao}
          </p>

          {servico.pergunta && (
            <div className={cn("mt-5 rounded-xl p-4", isDark ? "bg-white/5" : "bg-aro-light")}>
              <h4
                className={cn(
                  "text-xs font-semibold tracking-wide uppercase",
                  isDark ? "text-white/50" : "text-aro-text/50"
                )}
              >
                {servico.pergunta}
              </h4>
              <p
                className={cn(
                  "mt-1.5 text-sm leading-relaxed",
                  isDark ? "text-white/70" : "text-aro-text/70"
                )}
              >
                {servico.explicacao}
              </p>
            </div>
          )}

          {servico.destaques && (
            <div className="mt-6 space-y-2">
              {servico.destaques.map((item) => (
                <div
                  key={item.titulo}
                  className={cn(
                    "flex items-start gap-3 rounded-xl p-3",
                    isDark ? "bg-white/5" : "bg-aro-light"
                  )}
                >
                  <span
                    className={cn(
                      "flex size-8 shrink-0 items-center justify-center rounded-lg",
                      isDark ? "bg-white/10" : "bg-aro-accent/10"
                    )}
                  >
                    <item.icon className="size-4 text-aro-accent" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold">{item.titulo}</p>
                    <p
                      className={cn(
                        "mt-0.5 text-xs leading-relaxed",
                        isDark ? "text-white/75" : "text-aro-text/60"
                      )}
                    >
                      {item.descricao}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {servico.idealPara && (
            <p
              className={cn(
                "mt-5 text-xs leading-relaxed",
                isDark ? "text-white/50" : "text-aro-text/50"
              )}
            >
              <span className={isDark ? "font-medium text-white/70" : "font-medium text-aro-text/70"}>
                Ideal para:
              </span>{" "}
              {servico.idealPara}
            </p>
          )}

          <div
            className={cn(
              "mt-7 flex flex-col items-start gap-4 border-t pt-6",
              isDark ? "border-white/10" : "border-black/5"
            )}
          >
            <div>
              {servico.precoPrefixo && (
                <span
                  className={cn(
                    "block text-xs whitespace-nowrap",
                    isDark ? "text-white/50" : "text-aro-text/50"
                  )}
                >
                  {servico.precoPrefixo}
                </span>
              )}
              <div className="font-heading text-2xl font-extrabold whitespace-nowrap sm:text-3xl">
                {servico.preco}
              </div>
            </div>
            <a
              href="#contato"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full bg-aro-accent text-aro-dark hover:bg-aro-accent/85"
              )}
            >
              {servico.cta}
            </a>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export function Servicos() {
  return (
    <section id="servicos" className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 size-96 rounded-full bg-aro-accent/10 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-24 size-96 rounded-full bg-aro-accent/10 blur-[110px]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            Serviços
          </h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Encontre o serviço ideal para o momento do seu negócio, de acordo
            com suas demandas e seus objetivos. Cada projeto com prazos e
            investimentos 100% transparentes e definidos previamente.
          </p>
        </FadeIn>

        <FadeIn delay={90}>
          <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:p-7">
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
        </FadeIn>

        <div className="mt-12 grid items-start gap-6 md:grid-cols-3">
          {SERVICOS_PRINCIPAIS.map((servico, index) => (
            <ServicoCard key={servico.nome} servico={servico} index={index} />
          ))}
        </div>

        <FadeIn delay={180}>
          <span className="mt-12 mb-4 block text-xs font-semibold tracking-wide text-white/40 uppercase">
            Serviço adicional
          </span>
        </FadeIn>
        <ServicoCard servico={SERVICO_MANUTENCAO} index={SERVICOS.length - 1} />
      </div>
    </section>
  );
}
