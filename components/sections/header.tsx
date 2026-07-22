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
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // No topo o header ocupa a largura toda, transparente; ao rolar ele
  // "flutua" como uma pílula de vidro fosco com borda e sombra suaves.
  const isElevated = isScrolled || isMenuOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isElevated ? "mt-3 max-w-4xl px-3 sm:px-0" : "mt-0 max-w-6xl px-6"
        )}
      >
        <div
          className={cn(
            "flex h-14 items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            isElevated
              ? "rounded-2xl border border-white/10 bg-[#0a0a10]/80 px-4 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-5"
              : "rounded-none border border-transparent bg-transparent px-0"
          )}
        >
          <Link href="#hero" className="group flex items-center gap-2.5">
            <Logo className="transition-transform duration-300 group-hover:scale-105" />
            <span className="font-heading text-lg font-bold tracking-tight text-white">
              Aro Dev
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group/nav relative rounded-lg px-3 py-2 text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-3 -bottom-px h-px origin-left scale-x-0 bg-gradient-to-r from-aro-accent to-aro-accent/0 transition-transform duration-300 group-hover/nav:scale-x-100"
                />
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#contato"
              className={cn(
                buttonVariants({ size: "sm" }),
                "bg-aro-accent px-4 font-semibold text-aro-dark transition-shadow duration-300 hover:bg-aro-accent/90 hover:shadow-[0_0_24px_rgba(0,217,163,0.4)]"
              )}
            >
              Começar projeto
            </a>
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex size-9 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 md:hidden"
          >
            {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a10]/95 p-4 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  buttonVariants(),
                  "mt-2 w-full bg-aro-accent font-semibold text-aro-dark hover:bg-aro-accent/90"
                )}
              >
                Começar projeto
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
