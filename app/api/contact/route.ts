import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Requête invalide." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const subject = String(body.subject ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (name.length < 2 || name.length > 100)
    return NextResponse.json({ ok: false, error: "Nom invalide." }, { status: 400 });
  if (!EMAIL_RE.test(email) || email.length > 200)
    return NextResponse.json({ ok: false, error: "Adresse email invalide." }, { status: 400 });
  if (phone.length > 30)
    return NextResponse.json({ ok: false, error: "Téléphone invalide." }, { status: 400 });
  if (subject.length < 2 || subject.length > 150)
    return NextResponse.json({ ok: false, error: "Sujet invalide." }, { status: 400 });
  if (message.length < 5 || message.length > 5000)
    return NextResponse.json({ ok: false, error: "Message invalide (5 à 5000 caractères)." }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey)
    return NextResponse.json(
      { ok: false, error: "L'envoi d'emails n'est pas configuré côté serveur." },
      { status: 503 }
    );

  const from = process.env.CONTACT_FROM || process.env.EMAIL_FROM || "Vroom <no-reply@vroompro.app>";
  const to = (process.env.CONTACT_TO || "contact@vroompro.app").split(",").map((s) => s.trim()).filter(Boolean);
  if (to.length === 0)
    return NextResponse.json({ ok: false, error: "Aucun destinataire configuré." }, { status: 503 });

  const text = [
    "Nouveau message depuis le site Vroom",
    "",
    `Nom : ${name}`,
    `Email : ${email}`,
    `Téléphone : ${phone || "-"}`,
    `Sujet : ${subject}`,
    "",
    "Message :",
    message,
  ].join("\n");

  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:560px;margin:auto">
      <h2 style="margin:0 0 16px">Nouveau message — site Vroom</h2>
      <table style="border-collapse:collapse;font-size:14px">
        <tr><td style="padding:4px 12px 4px 0;font-weight:bold">Nom</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;font-weight:bold">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:4px 12px 4px 0;font-weight:bold">Téléphone</td><td>${escapeHtml(phone || "-")}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;font-weight:bold">Sujet</td><td>${escapeHtml(subject)}</td></tr>
      </table>
      <p style="font-weight:bold;margin:20px 0 6px">Message</p>
      <p style="white-space:pre-wrap;margin:0;padding:12px;background:#f6f6f6;border-radius:8px">${escapeHtml(message)}</p>
    </div>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject: `[Site Vroom] ${subject} — ${name}`,
        text,
        html,
        tags: [
          { name: "source", value: "vroom-website" },
          // Resend n'accepte que [A-Za-z0-9_-] dans les tags
          { name: "form_subject", value: subject.replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 40) || "contact" },
        ],
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error", res.status, err.slice(0, 500));
      return NextResponse.json({ ok: false, error: "Échec de l'envoi du message." }, { status: 502 });
    }

    const data = await res.json();
    return NextResponse.json({ ok: true, id: data.id ?? null });
  } catch (e) {
    console.error("Resend fetch failed", e);
    return NextResponse.json({ ok: false, error: "Échec de l'envoi du message." }, { status: 502 });
  }
}
