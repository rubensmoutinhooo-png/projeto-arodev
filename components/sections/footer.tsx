import { Mail, MessageCircle } from "lucide-react";
import { Logo } from "@/components/logo";
import { InstagramIcon, LinkedinIcon } from "@/components/social-icons";

const ANO = new Date().getFullYear();

const NAV_LINKS = [
  { label: "Início", href: "#hero" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "FAQ", href: "#faq" },
];

// TODO: trocar pelos perfis reais assim que estiverem no ar
const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/arodev", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://linkedin.com/company/arodev", icon: LinkedinIcon },
  { label: "WhatsApp", href: "https://wa.me/5531993608249", icon: MessageCircle },
];

export function Footer() {
  return (
    <footer className="bg-aro-darker py-16 text-white/60">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <Logo />
              <span className="font-heading text-lg font-bold text-white">Aro Dev</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">
              Sites e sistemas para negócios que levam a própria imagem a sério.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <span className="font-medium text-white/80">Navegação</span>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <span className="font-medium text-white/80">Redes sociais</span>
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <social.icon className="size-4" />
                {social.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <span className="font-medium text-white/80">Contato</span>
            <a
              href="mailto:contato@arodev.com.br"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail className="size-4" />
              contato@arodev.com.br
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs">
          © {ANO} Aro Dev. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
