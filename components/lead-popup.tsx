"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { CheckCircle2, Lock } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldError } from "@/components/ui/field-error";

const DELAY_MS = 85_000;
const WHATSAPP_NUMBER = "5531993608249";

type Step = "form" | "success";
type FieldName = "nome" | "telefone";

// Formata progressivamente para (00) 00000-0000 enquanto o usuário digita.
function formatPhone(raw: string) {
  const digits = raw.replace(/\D/g, "").slice(0, 11);
  if (digits.length === 0) return "";

  const ddd = digits.slice(0, 2);
  if (digits.length <= 2) return `(${ddd}`;

  const resto = digits.slice(2);
  const parte1 = resto.slice(0, 5);
  const parte2 = resto.slice(5, 9);
  return parte2 ? `(${ddd}) ${parte1}-${parte2}` : `(${ddd}) ${parte1}`;
}

function buildWhatsAppLink(nome: string) {
  const mensagem = `Olá, me chamo ${nome} e acabei de solicitar o diagnóstico no site.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
}

export function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [telefone, setTelefone] = useState("");
  const [nome, setNome] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  // reseta o formulário ao reabrir o popup depois de um envio anterior
  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) {
      setStep("form");
      setErrors({});
      setSubmitError(false);
      setIsSubmitting(false);
    }
  }

  function clearError(field: FieldName) {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  function handleNomeChange() {
    clearError("nome");
  }

  function handlePhoneChange(event: ChangeEvent<HTMLInputElement>) {
    setTelefone(formatPhone(event.target.value));
    clearError("telefone");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nomeInformado = data.get("nome")?.toString().trim() ?? "";
    const digits = telefone.replace(/\D/g, "");

    const nextErrors: Partial<Record<FieldName, string>> = {};
    if (nomeInformado.length < 2) nextErrors.nome = "Preencha seu nome.";
    if (digits.length < 10) nextErrors.telefone = "Informe um WhatsApp válido, com DDD.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSubmitError(false);
    setIsSubmitting(true);
    setNome(nomeInformado);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome: nomeInformado, telefone }),
      });

      if (!response.ok) throw new Error("Falha ao enviar");

      setStep("success");
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        {step === "success" ? (
          <div className="flex flex-col items-center gap-3 py-4 text-center">
            <CheckCircle2 className="size-16 text-green-500" strokeWidth={1.5} />
            <DialogTitle className="text-2xl">Solicitação recebida!</DialogTitle>
            <DialogDescription className="text-white/70">
              Obrigado, {nome}! Um de nossos representantes entrará em
              contato pelo seu WhatsApp ({telefone}) em breve com o seu
              diagnóstico gratuito.
            </DialogDescription>

            <div className="mt-2 grid w-full gap-2">
              <Button
                size="lg"
                nativeButton={false}
                render={
                  <a
                    href={buildWhatsAppLink(nome)}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                className="bg-aro-accent text-aro-dark hover:bg-aro-accent/85"
              >
                Ou clique aqui para falar agora no WhatsApp
              </Button>

              <DialogClose
                render={
                  <Button size="lg" variant="ghost" className="text-white/70">
                    Entendido
                  </Button>
                }
              />
            </div>
          </div>
        ) : (
          <>
            <div className="mb-4 grid gap-1.5">
              <DialogTitle>Faça o seu diagnóstico digital gratuito</DialogTitle>
              <DialogDescription>
                Analiso qual sua demanda e qual modelo de site ideal para
                você, sem compromisso.
              </DialogDescription>
              <p className="text-sm leading-relaxed text-white/60">
                Desde já, podemos entender sua dor e começar a validar um
                projeto para dar um boost no seu negócio!
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="grid gap-4">
              <div className="grid gap-1.5">
                <Label htmlFor="lead-nome" className="text-white/80">
                  Nome
                </Label>
                <Input
                  id="lead-nome"
                  name="nome"
                  placeholder="Seu nome"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.nome)}
                  onChange={handleNomeChange}
                />
                {errors.nome && <FieldError message={errors.nome} />}
              </div>

              <div className="grid gap-1.5">
                <Label htmlFor="lead-telefone" className="text-white/80">
                  WhatsApp
                </Label>
                <Input
                  id="lead-telefone"
                  name="telefone"
                  type="tel"
                  placeholder="(00) 90000-0000"
                  autoComplete="tel"
                  value={telefone}
                  onChange={handlePhoneChange}
                  aria-invalid={Boolean(errors.telefone)}
                />
                {errors.telefone && <FieldError message={errors.telefone} />}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="mt-1 bg-aro-accent text-aro-dark hover:bg-aro-accent/85"
              >
                {isSubmitting ? "Enviando..." : "Ser chamado via WhatsApp"}
              </Button>

              {submitError && (
                <FieldError message="Não foi possível enviar seus dados. Verifique sua conexão e tente novamente." />
              )}

              <p className="flex items-center justify-center gap-1.5 text-center text-xs text-white/40">
                <Lock className="size-3" strokeWidth={2} />
                Resposta em até 24 horas. Seus dados estão seguros.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
