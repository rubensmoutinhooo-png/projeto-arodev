import { NextResponse } from "next/server";
import { Resend } from "resend";

function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 13;
}

async function sendLeadEmail(nome: string, telefone: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFICATION_EMAIL;
  if (!apiKey || !to) {
    console.error("RESEND_API_KEY ou LEAD_NOTIFICATION_EMAIL não configurados");
    return false;
  }

  const resend = new Resend(apiKey);
  const from = process.env.LEAD_NOTIFICATION_FROM ?? "Aro Dev <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to,
    subject: `Novo lead do site: ${nome}`,
    html: `
      <p>Novo pedido de diagnóstico digital gratuito:</p>
      <ul>
        <li><strong>Nome:</strong> ${nome}</li>
        <li><strong>WhatsApp:</strong> ${telefone}</li>
      </ul>
      <p><a href="https://wa.me/55${telefone.replace(/\D/g, "")}">Chamar no WhatsApp</a></p>
    `,
  });

  if (error) {
    console.error("Falha ao enviar e-mail de lead via Resend", error);
    return false;
  }
  return true;
}

async function sendLeadWebhook(nome: string, telefone: string) {
  const webhookUrl = process.env.WHATSAPP_WEBHOOK_URL;
  if (!webhookUrl) return false;

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.WHATSAPP_WEBHOOK_TOKEN
          ? { Authorization: `Bearer ${process.env.WHATSAPP_WEBHOOK_TOKEN}` }
          : {}),
      },
      body: JSON.stringify({
        nome,
        telefone,
        origem: "popup-site",
        criadoEm: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      console.error("Webhook do WhatsApp respondeu com erro", response.status, text);
      return false;
    }
    return true;
  } catch (error) {
    console.error("Falha ao chamar o webhook do WhatsApp", error);
    return false;
  }
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const { nome, telefone } = (body ?? {}) as {
    nome?: unknown;
    telefone?: unknown;
  };

  if (typeof nome !== "string" || nome.trim().length < 2) {
    return NextResponse.json({ error: "Nome inválido" }, { status: 400 });
  }
  if (typeof telefone !== "string" || !isValidPhone(telefone)) {
    return NextResponse.json({ error: "Telefone inválido" }, { status: 400 });
  }

  const nomeLimpo = nome.trim();
  const telefoneLimpo = telefone.trim();

  const [emailOk, webhookOk] = await Promise.all([
    sendLeadEmail(nomeLimpo, telefoneLimpo),
    sendLeadWebhook(nomeLimpo, telefoneLimpo),
  ]);

  if (!emailOk && !webhookOk) {
    return NextResponse.json(
      { error: "Nenhum canal de notificação de lead está configurado" },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
