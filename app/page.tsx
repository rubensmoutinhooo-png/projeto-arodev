import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Servicos } from "@/components/sections/servicos";
import { PorQueInvestir } from "@/components/sections/porque-investir";
import { Processo } from "@/components/sections/processo";
import { Garantia } from "@/components/sections/garantia";
import { Faq } from "@/components/sections/faq";
import { CtaFinal } from "@/components/sections/cta-final";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-background">
        <Hero />
        <PorQueInvestir />
        <Servicos />
        <Processo />
        <Garantia />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
