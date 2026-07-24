import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  titulo: string;
  descricao?: string;
  className?: string;
}

// Cabeçalho padrão de todas as seções: linha que se desenha + eyebrow,
// título com gradiente e descrição — mesma coreografia da primeira à
// última seção do site.
export function SectionHeading({ eyebrow, titulo, descricao, className }: SectionHeadingProps) {
  return (
    <Reveal className={className}>
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="draw-on-reveal h-px w-10 bg-gradient-to-r from-aro-accent to-aro-accent/0"
        />
        <span className="text-xs font-semibold tracking-[0.22em] text-aro-accent/90 uppercase">
          {eyebrow}
        </span>
      </div>
      <h2
        className={cn(
          "mt-4 max-w-2xl bg-gradient-to-r from-white via-white to-white/55 bg-clip-text",
          "font-heading text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl"
        )}
      >
        {titulo}
      </h2>
      {descricao && (
        <p className="mt-4 max-w-2xl leading-relaxed text-white/60">{descricao}</p>
      )}
    </Reveal>
  );
}
