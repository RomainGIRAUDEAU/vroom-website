"use client";

import { useState } from "react";
import { IconArrowRight, IconCheck } from "./Icons";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [rgpd, setRgpd] = useState(false);

  if (sent) {
    return (
      <div className="card flex flex-col items-center gap-4 p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-vroom-yellow/15 text-vroom-yellow">
          <IconCheck className="h-7 w-7" />
        </span>
        <h3 className="text-xl font-extrabold">Message envoyé !</h3>
        <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
          Merci pour votre message. Notre équipe vous répond dans les plus brefs délais (réponse moyenne : 15 min).
        </p>
        <button className="btn-outline mt-2 !py-2.5" onClick={() => setSent(false)}>
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form
      className="card space-y-3 p-6 md:p-7"
      onSubmit={(e) => {
        e.preventDefault();
        if (rgpd) setSent(true);
      }}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <input required type="text" placeholder="Nom complet" className="input-dark" />
        <input required type="email" placeholder="Email" className="input-dark" />
      </div>
      <input type="tel" placeholder="Téléphone (optionnel)" className="input-dark" />
      <select className="input-dark appearance-none" defaultValue="" required>
        <option value="" disabled>Sujet</option>
        <option>Je suis un particulier</option>
        <option>Je suis un professionnel</option>
        <option>Une question sur Vroom Pro</option>
        <option>Partenariat entreprise</option>
        <option>Autre</option>
      </select>
      <textarea required rows={5} placeholder="Votre message" className="input-dark resize-none" />
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
      <button type="submit" className="btn-yellow w-full" disabled={!rgpd}>
        Envoyer le message
        <IconArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
