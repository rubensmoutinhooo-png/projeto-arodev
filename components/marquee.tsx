const ITENS = [
  "Landing Pages",
  "Sites Institucionais",
  "E-commerce",
  "SEO & Performance",
  "Design sob medida",
  "Manutenção contínua",
  "Suporte no WhatsApp",
];

// Faixa de serviços em rolagem contínua entre o hero e o processo.
// Duas cópias idênticas da lista + translateX(-50%) = loop perfeito.
export function Marquee() {
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-white/5 bg-white/[0.02] py-4 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
    >
      <div className="animate-marquee flex w-max">
        {[0, 1].map((copia) => (
          <div key={copia} className="flex items-center">
            {ITENS.map((item) => (
              <span
                key={item}
                className="flex items-center whitespace-nowrap text-sm font-medium tracking-wide text-white/45"
              >
                <span className="px-5">{item}</span>
                <span className="size-1.5 rounded-full bg-aro-accent/50" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
