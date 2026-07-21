"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // O header é sempre escuro (texto branco); ao rolar ou abrir o menu
  // mobile, ganha um fundo com blur para se distinguir do conteúdo.
  const isElevated = isScrolled || isMenuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isElevated
          ? "border-b border-white/10 bg-[#08080c]/90 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="#hero" className="flex items-center gap-2.5">
          <Logo />
          <span className="font-heading text-xl font-bold tracking-tight text-white">
            Aro Dev
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contato"
            className={cn(buttonVariants(), "bg-aro-accent text-aro-dark hover:bg-aro-accent/85")}
          >
            Começar projeto
          </a>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="text-white transition-colors md:hidden"
        >
          {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-white/10 bg-[#08080c] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-white/80"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                buttonVariants(),
                "w-full bg-aro-accent text-aro-dark hover:bg-aro-accent/85"
              )}
            >
              Começar projeto
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
