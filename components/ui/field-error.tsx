import { AlertCircle } from "lucide-react";

export function FieldError({ message }: { message: string }) {
  return (
    <p className="flex items-center gap-1.5 text-sm text-destructive">
      <AlertCircle className="size-3.5 shrink-0" strokeWidth={2} />
      {message}
    </p>
  );
}
