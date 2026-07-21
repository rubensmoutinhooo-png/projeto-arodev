"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FieldError } from "@/components/ui/field-error";
import { MagneticGlowCard } from "@/components/magnetic-glow-card";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WHATSAPP_NUMBER = "5531993608249";

function buildWhatsAppLink() {
  const mensagem = "Olá! Acabei de enviar uma mensagem pelo site.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
}

type FieldName = "nome" | "email" | "telefone" | "mensagem";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [nome, setNome] = useState("");
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});

  function clearError(field: FieldName) {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  function handleFieldChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    clearError(event.currentTarget.name as FieldName);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nome = data.get("nome")?.toString().trim() ?? "";
    const email = data.get("email")?.toString().trim() ?? "";
    const telefone = data.get("telefone")?.toString().trim() ?? "";
    const mensagem = data.get("mensagem")?.toString().trim() ?? "";

    const nextErrors: Partial<Record<FieldName, string>> = {};
    if (!nome) nextErrors.nome = "Preencha seu nome.";
    if (!email) {
      nextErrors.email = "Preencha seu e-mail.";
    } else if (!EMAIL_REGEX.test(email)) {
      nextErrors.email = "Informe um e-mail válido.";
    }
    if (!telefone) nextErrors.telefone = "Preencha seu telefone.";
    if (!mensagem) nextErrors.mensagem = "Conte um pouco sobre seu projeto.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});

    const texto =
      "Olá! Gostaria de solicitar um orçamento para o meu projeto.\n\n" +
      `*Nome:* ${nome}\n` +
      `*E-mail:* ${email}\n` +
      `*Telefone:* ${telefone}\n` +
      `*Mensagem:* ${mensagem}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`,
      "_blank",
      "noopener,noreferrer"
    );

    setNome(nome);
    setIsSubmitted(true);
  }

  return (
    <MagneticGlowCard className="rounded-2xl p-px" glowColor="rgba(139,92,246,0.12)">
      {/* contorno com glow roxo discreto — mesma lógica do FAQ e de "O que garantimos" */}
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-[#6366f1] via-transparent to-[#a855f7] opacity-0 transition-opacity duration-500 group-hover/magnetic:opacity-60" />

      {isSubmitted ? (
        <div className="relative rounded-[calc(var(--radius-2xl)-1px)] border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xl sm:p-8">
          <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-emerald-400" strokeWidth={1.5} />
          <h3 className="mb-2 text-xl font-bold text-white">
            Mensagem recebida com sucesso!
          </h3>
          <p className="mb-6 text-sm text-zinc-300">
            Obrigado pelo contato, {nome}! Já recebi suas informações e estou
            analisando seu projeto. Entrarei em contato em até 4h no
            WhatsApp.
          </p>

          <div className="grid gap-3">
            <Button
              size="lg"
              nativeButton={false}
              render={
                <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" />
              }
              className="bg-aro-accent text-aro-dark hover:bg-aro-accent/85"
            >
              <MessageCircle className="size-4" strokeWidth={1.75} />
              Falar direto no WhatsApp
            </Button>

            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="text-sm text-white/50 underline-offset-4 transition-colors hover:text-white/80 hover:underline"
            >
              Enviar outra mensagem
            </button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          noValidate
          className="relative grid gap-4 rounded-[calc(var(--radius-2xl)-1px)] border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-xl transition-colors duration-300 group-hover/magnetic:border-white/20 sm:p-8"
        >
          <div className="grid gap-1.5">
            <Label htmlFor="nome" className="text-white/80">
              Nome
            </Label>
            <Input
              id="nome"
              name="nome"
              placeholder="Seu nome"
              aria-invalid={Boolean(errors.nome)}
              onChange={handleFieldChange}
            />
            {errors.nome && <FieldError message={errors.nome} />}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-1.5">
              <Label htmlFor="email" className="text-white/80">
                E-mail
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="voce@empresa.com"
                aria-invalid={Boolean(errors.email)}
                onChange={handleFieldChange}
              />
              {errors.email && <FieldError message={errors.email} />}
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="telefone" className="text-white/80">
                Telefone
              </Label>
              <Input
                id="telefone"
                name="telefone"
                type="tel"
                placeholder="(00) 00000-0000"
                aria-invalid={Boolean(errors.telefone)}
                onChange={handleFieldChange}
              />
              {errors.telefone && <FieldError message={errors.telefone} />}
            </div>
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="mensagem" className="text-white/80">
              Mensagem
            </Label>
            <Textarea
              id="mensagem"
              name="mensagem"
              placeholder="Conte um pouco sobre seu modelo de negócio e o objetivo principal do novo site..."
              rows={4}
              aria-invalid={Boolean(errors.mensagem)}
              onChange={handleFieldChange}
            />
            {errors.mensagem && <FieldError message={errors.mensagem} />}
          </div>

          <Button
            type="submit"
            size="lg"
            className="mt-2 bg-aro-accent text-aro-dark hover:bg-aro-accent/85"
          >
            Enviar mensagem
          </Button>

          <p className="mt-3 text-center text-xs text-zinc-500">
            🔒 Seus dados estão protegidos de acordo com as diretrizes de privacidade.
          </p>
        </form>
      )}
    </MagneticGlowCard>
  );
}
