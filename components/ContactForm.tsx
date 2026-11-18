"use client";

import { useState } from "react";
import { IconArrowRight, IconCheck } from "./Icons";

const SUBJECTS = [
  "Je suis un particulier",
  "Je suis un professionnel",
  "Une question sur Vroom Pro",
  "Partenariat entreprise",
  "Autre",
];

const FALLBACK_ERROR =
  "Le message n'a pas pu être envoyé. Réessayez ou écrivez-nous directement à contact@vroompro.app.";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rgpd, setRgpd] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!rgpd || loading) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setSent(true);
      } else if (res.status === 400 && data.error) {
        // erreur de saisie : on affiche la raison exacte renvoyée par le serveur
        setError(data.error);
      } else {
        setError(FALLBACK_ERROR);
      }
    } catch {
      setError(FALLBACK_ERROR);
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="card flex flex-col items-center gap-4 p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-vroom-yellow/15 text-vroom-yellow">
          <IconCheck className="h-7 w-7" />
        </span>
        <h3 className="text-xl font-extrabold">Message envoyé !</h3>
        <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
          Merci {form.name.split(" ")[0]} ! Notre équipe vous répond dans les plus brefs délais (réponse moyenne : 15 min).
        </p>
        <button className="btn-outline mt-2 !py-2.5" onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); setRgpd(false); }}>
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form className="card space-y-3 p-6 md:p-7" onSubmit={onSubmit}>
      <div className="grid gap-3 sm:grid-cols-2">
        <input required minLength={2} maxLength={100} type="text" placeholder="Nom complet" className="input-dark" value={form.name} onChange={set("name")} />
        <input required maxLength={200} type="email" placeholder="Email" className="input-dark" value={form.email} onChange={set("email")} />
      </div>
      <input type="tel" maxLength={30} placeholder="Téléphone (optionnel)" className="input-dark" value={form.phone} onChange={set("phone")} />
      <select className="input-dark appearance-none" required value={form.subject} onChange={set("subject")}>
        <option value="" disabled>Sujet</option>
        {SUBJECTS.map((s) => <option key={s}>{s}</option>)}
      </select>
      <textarea required minLength={2} maxLength={5000} rows={5} placeholder="Votre message" className="input-dark resize-none" value={form.message} onChange={set("message")} />
      <label className="flex cursor-pointer items-start gap-2.5 text-xs text-zinc-400">
        <input
          type="checkbox"
          checked={rgpd}
          onChange={(e) => setRgpd(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-[#FFD60A]"
        />
        <span>
          J&apos;accepte que mes données soient utilisées pour traiter ma demande.{" "}
          <a href="/a-propos" className="text-vroom-yellow underline underline-offset-2">Voir la politique de confidentialité</a>.
        </span>
      </label>
      {error && (
        <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-2.5 text-sm text-red-300">{error}</p>
      )}
      <button type="submit" className="btn-yellow w-full disabled:cursor-not-allowed disabled:opacity-60" disabled={!rgpd || loading}>
        {loading ? "Envoi en cours…" : "Envoyer le message"}
        {!loading && <IconArrowRight className="h-4 w-4" />}
      </button>
    </form>
  );
}
