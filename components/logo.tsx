import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

// Marca oficial da Aro Dev (arte enviada pelo cliente), recortada apenas no
// glifo — usada no header, footer, favicon (app/icon.png) e imagem de OG.
export function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/logo-icon.png"
      alt="Aro Dev"
      width={1024}
      height={768}
      quality={95}
      priority
      className={cn("h-8 w-auto shrink-0 object-contain drop-shadow-[0_0_12px_rgba(0,217,163,0.25)]", className)}
    />
  );
}
