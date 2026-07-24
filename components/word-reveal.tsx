import { cn } from "@/lib/utils";

interface WordRevealProps {
  text: string;
  /** atraso inicial em ms */
  delay?: number;
  /** intervalo entre palavras em ms */
  step?: number;
  className?: string;
}

// Revela um texto palavra por palavra no load (1a).
// A animação `word-up` vive no globals.css.
export function WordReveal({ text, delay = 0, step = 100, className }: WordRevealProps) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={cn("word-reveal", className)}
          style={{ animationDelay: `${delay + i * step}ms` }}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </>
  );
}
