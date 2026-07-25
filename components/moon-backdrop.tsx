import { cn } from "@/lib/utils";

interface MoonBackdropProps {
  className?: string;
}

// Crateras fixas (não randômicas — a lua não deve "piscar" diferente a cada
// mount), simuladas como manchas escuras sobrepostas ao disco.
const CRATERS = [
  { x: 62, y: 22, size: 9, alpha: 0.32 },
  { x: 40, y: 15, size: 5, alpha: 0.24 },
  { x: 70, y: 45, size: 12, alpha: 0.28 },
  { x: 30, y: 55, size: 6, alpha: 0.22 },
  { x: 55, y: 68, size: 8, alpha: 0.3 },
  { x: 78, y: 70, size: 5, alpha: 0.2 },
  { x: 20, y: 35, size: 4, alpha: 0.18 },
  { x: 48, y: 40, size: 14, alpha: 0.22 },
];

const CRATER_LAYERS = CRATERS.map(
  (c) => `radial-gradient(circle at ${c.x}% ${c.y}%, rgba(0,0,0,${c.alpha}) 0%, transparent ${c.size}%)`
).join(", ");

// Meia-lua gigante ao fundo do hero — 100% CSS, sem asset raster: disco
// escuro com "crateras" simuladas por radial-gradients sobrepostos e um
// brilho de aro-accent na borda voltada pro conteúdo (luz vindo da
// esquerda), mesmo espírito hand-rolled do hero-arc.tsx.
export function MoonBackdrop({ className }: MoonBackdropProps) {
  return (
    <div
      className={cn(
        "relative size-[420px] rounded-full opacity-70 sm:size-[560px] md:size-[720px] lg:size-[860px]",
        className
      )}
    >
      {/* halo externo, fora do disco — dá o "bloom" verde sem precisar deixar overflow visível */}
      <div
        className="absolute -inset-16 rounded-full blur-[80px]"
        style={{
          background: "radial-gradient(circle at 28% 45%, rgba(0,217,163,0.35), transparent 60%)",
        }}
      />

      {/* disco da lua, crateras clippadas dentro do círculo */}
      <div
        className="absolute inset-0 overflow-hidden rounded-full"
        style={{
          background:
            "radial-gradient(circle at 12% 46%, rgba(0,217,163,0.55), transparent 30%), " +
            "radial-gradient(circle at 24% 38%, rgba(143,255,228,0.18), transparent 22%), " +
            `${CRATER_LAYERS}, ` +
            "radial-gradient(circle at 38% 35%, #262c3a 0%, #12151d 55%, #060910 100%)",
        }}
      />
    </div>
  );
}
