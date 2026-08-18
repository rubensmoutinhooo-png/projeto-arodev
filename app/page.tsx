import { AmbientBackground } from "@/components/ambient-background";
import { Marquee } from "@/components/marquee";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Beneficios } from "@/components/sections/beneficios";
import { Servicos } from "@/components/sections/servicos";
import { Diferenciais } from "@/components/sections/diferenciais";
import { PorQueInvestir } from "@/components/sections/porque-investir";
import { Projetos } from "@/components/sections/projetos";
import { Tecnologias } from "@/components/sections/tecnologias";
import { Processo } from "@/components/sections/processo";
import { Garantia } from "@/components/sections/garantia";
import { Depoimentos } from "@/components/sections/depoimentos";
import { Faq } from "@/components/sections/faq";
import { CtaFinal } from "@/components/sections/cta-final";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative flex-1 bg-background">
        <AmbientBackground />
        <Hero />
        <Marquee />
        <Beneficios />
        <Processo />
        <Servicos />
        <Diferenciais />
        <PorQueInvestir />
        <Projetos />
        <Tecnologias />
        <Garantia />
        <Depoimentos />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
