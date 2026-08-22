import { AmbientBackground } from "@/components/ambient-background";
import { Marquee } from "@/components/marquee";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Servicos } from "@/components/sections/servicos";
import { PorQueInvestir } from "@/components/sections/porque-investir";
import { Projetos } from "@/components/sections/projetos";
import { Processo } from "@/components/sections/processo";
import { Garantia } from "@/components/sections/garantia";
import { Destaques } from "@/components/sections/destaques";
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
        <Processo />
        <Servicos />
        <PorQueInvestir />
        <Projetos />
        <Garantia />
        <Faq />
        <CtaFinal />
        <Destaques />
      </main>
      <Footer />
    </>
  );
}
