import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 13;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const { nome, email, telefone, mensagem } = (body ?? {}) as {
    nome?: unknown;
    email?: unknown;
    telefone?: unknown;
    mensagem?: unknown;
  };

  if (typeof nome !== "string" || nome.trim().length < 2) {
    return NextResponse.json({ error: "Nome inválido" }, { status: 400 });
  }
  if (typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
    return NextResponse.json({ error: "E-mail inválido" }, { status: 400 });
  }
  if (typeof telefone !== "string" || !isValidPhone(telefone)) {
    return NextResponse.json({ error: "Telefone inválido" }, { status: 400 });
  }
  if (typeof mensagem !== "string" || mensagem.trim().length < 1) {
    return NextResponse.json({ error: "Mensagem inválida" }, { status: 400 });
  }

  const nomeLimpo = nome.trim();
  const emailLimpo = email.trim();
  const telefoneLimpo = telefone.trim();
  const mensagemLimpa = mensagem.trim();

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFICATION_EMAIL;
  if (!apiKey || !to) {
    console.error("RESEND_API_KEY ou LEAD_NOTIFICATION_EMAIL não configurados");
    return NextResponse.json(
      { error: "Envio de e-mail não configurado" },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const from = process.env.LEAD_NOTIFICATION_FROM ?? "Aro Dev <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: emailLimpo,
    subject: `Novo contato pelo site: ${nomeLimpo}`,
    html: `
      <p>Nova mensagem recebida pelo formulário de contato:</p>
      <ul>
        <li><strong>Nome:</strong> ${nomeLimpo}</li>
        <li><strong>E-mail:</strong> ${emailLimpo}</li>
        <li><strong>Telefone:</strong> ${telefoneLimpo}</li>
      </ul>
      <p><strong>Mensagem:</strong><br>${mensagemLimpa.replace(/\n/g, "<br>")}</p>
      <p><a href="https://wa.me/55${telefoneLimpo.replace(/\D/g, "")}">Chamar no WhatsApp</a></p>
    `,
  });

  if (error) {
    console.error("Falha ao enviar e-mail de contato via Resend", error);
    return NextResponse.json(
      { error: "Falha ao enviar sua mensagem" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
