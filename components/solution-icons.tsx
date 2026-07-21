import { Building2, Check } from "lucide-react";
import { cn } from "@/lib/utils";

// Calendário 3D com pulso roxo — representa agendamento automatizado (Clínicas).
export function CalendarPulseIcon({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex size-28 items-center justify-center", className)}>
      <span
        aria-hidden="true"
        className="animate-icon-pulse-purple absolute size-16 rounded-2xl bg-[#a855f7]/25"
      />
      <svg viewBox="0 0 96 96" className="relative size-24" aria-hidden="true">
        <defs>
          <linearGradient id="cal-body" x1="10" y1="14" x2="80" y2="78" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1c1c28" />
            <stop offset="1" stopColor="#121218" />
          </linearGradient>
        </defs>
        <rect x="15" y="19" width="66" height="58" rx="12" fill="#000000" opacity="0.35" />
        <rect
          x="10"
          y="14"
          width="66"
          height="58"
          rx="12"
          fill="url(#cal-body)"
          stroke="#ffffff1f"
        />
        <rect x="10" y="14" width="66" height="16" rx="12" fill="#a855f7" />
        <rect x="10" y="22" width="66" height="8" fill="#a855f7" />
        <rect x="23" y="6" width="6" height="14" rx="3" fill="#d8b4fe" />
        <rect x="59" y="6" width="6" height="14" rx="3" fill="#d8b4fe" />
        {[0, 1, 2].flatMap((row) =>
          [0, 1, 2, 3].map((col) => {
            const active = row === 1 && col === 2;
            return (
              <rect
                key={`${row}-${col}`}
                x={18 + col * 13}
                y={38 + row * 12}
                width="9"
                height="8"
                rx="2.5"
                fill={active ? "#c4b5fd" : "#ffffff"}
                fillOpacity={active ? 1 : 0.14}
              />
            );
          })
        )}
      </svg>
      <span className="animate-icon-pulse-purple absolute -right-1 -bottom-1 flex size-7 items-center justify-center rounded-full bg-[#a855f7] text-white shadow-lg shadow-[#a855f7]/50">
        <Check className="size-3.5" strokeWidth={3} />
      </span>
    </div>
  );
}

// Catálogo com fluxo ciano — representa listagem inteligente de imóveis (Imobiliárias).
export function CatalogFlowIcon({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-28 w-full max-w-[220px] flex-col justify-center gap-2 overflow-hidden rounded-2xl border border-white/10 bg-black/20 px-3.5 py-4",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="animate-icon-pulse-cyan pointer-events-none absolute -inset-8 rounded-full bg-[#22d3ee]/10 blur-2xl"
      />

      {[0, 1, 2].map((row) => (
        <div
          key={row}
          className="relative flex items-center gap-2.5 overflow-hidden rounded-lg bg-white/5 px-2.5 py-2"
        >
          <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-[#22d3ee]/15 text-[#22d3ee]">
            <Building2 className="size-3.5" strokeWidth={1.75} />
          </span>
          <div className="flex-1 space-y-1">
            <div className="h-1.5 w-3/4 rounded-full bg-white/15" />
            <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
          </div>
          <span
            aria-hidden="true"
            className="animate-data-flow pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(34,211,238,0.4), transparent)",
              animationDelay: `${row * 0.4}s`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
