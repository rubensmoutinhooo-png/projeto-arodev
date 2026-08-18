import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface BrowserFrameProps {
  variant?: "browser" | "phone";
  icon: LucideIcon;
  label: string;
  className?: string;
}

// TODO: substituir o conteúdo placeholder deste frame por screenshots reais dos projetos entregues
export function BrowserFrame({
  variant = "browser",
  icon: Icon,
  label,
  className,
}: BrowserFrameProps) {
  if (variant === "phone") {
    return (
      <div
        className={cn(
          "mx-auto w-36 rounded-[1.75rem] border-[6px] border-aro-dark bg-aro-dark p-1.5 shadow-md",
          className
        )}
      >
        <div className="mx-auto mb-1.5 h-1 w-8 rounded-full bg-white/30" />
        <div className="flex aspect-[9/17] flex-col items-center justify-center gap-2 rounded-[1.1rem] bg-aro-light px-3 text-center">
          <Icon className="size-7 text-aro-dark/35" strokeWidth={1.5} />
          <span className="text-[11px] leading-snug text-aro-dark/50">{label}</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm",
        className
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-black/5 bg-white px-3 py-2.5">
        <span className="size-2.5 rounded-full bg-black/10" />
        <span className="size-2.5 rounded-full bg-black/10" />
        <span className="size-2.5 rounded-full bg-black/10" />
      </div>
      <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 bg-aro-light px-6 text-center">
        <Icon className="size-9 text-aro-dark/30" strokeWidth={1.5} />
        <span className="text-sm text-aro-dark/50">{label}</span>
      </div>
    </div>
  );
}
