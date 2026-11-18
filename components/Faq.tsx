"use client";

import { useState } from "react";
import { IconChevronDown } from "./Icons";

export type FaqItem = { q: string; a: string };

export const FAQ_PARTICULIERS: FaqItem[] = [
  {
    q: "Comment fonctionne Vroom ?",
    a: "Vous décrivez votre problème dans l'application en répondant à quelques questions guidées. Les professionnels vérifiés autour de vous reçoivent la demande et vous envoient leur devis. Vous choisissez celui qui vous convient, vous payez dans l'app et vous suivez l'arrivée du pro en temps réel.",
  },
  {
    q: "Combien ça coûte ?",
    a: "Le prix est fixé par le professionnel dans son devis, et vous le voyez avant d'accepter. Pas de frais cachés : vous ne payez que l'intervention que vous avez validée.",
  },
  {
    q: "Où Vroom est-il disponible ?",
    a: "Aujourd'hui à Nîmes, à Alès et dans un rayon d'environ 25 km autour. Nous ouvrons de nouvelles villes progressivement : si votre zone n'est pas encore couverte, l'application vous le dit tout de suite.",
  },
  {
    q: "Les professionnels sont-ils vérifiés ?",
    a: "Oui. Chaque mécanicien ou dépanneur est validé par l'équipe Vroom (entreprise, SIRET, spécialités) avant de pouvoir recevoir des demandes, et il est noté par les clients après chaque intervention.",
  },
  {
    q: "Comment je paie ?",
    a: "Par carte bancaire, directement dans l'application, de façon sécurisée. Vous n'avez rien à régler en liquide au professionnel.",
  },
  {
    q: "Puis-je annuler une demande ?",
    a: "Oui, gratuitement tant qu'aucun professionnel n'a été confirmé. Une fois le pro en route, l'annulation coûte 5 € pour dédommager son déplacement.",
  },
];

export const FAQ_PRO: FaqItem[] = [
  {
    q: "Combien coûte Vroom Pro ?",
    a: "69,90 € par mois, sans engagement, avec 30 jours offerts pour essayer. Vous pouvez arrêter quand vous voulez depuis l'application.",
  },
  {
    q: "Dois-je accepter toutes les demandes ?",
    a: "Non. Vous voyez les demandes proches de vous et vous envoyez un devis uniquement pour celles qui vous intéressent, au prix que vous fixez.",
  },
  {
    q: "Comment suis-je payé ?",
    a: "Le client paie dans l'application quand il accepte votre devis. Le montant est versé sur votre compte bancaire via Stripe, notre partenaire de paiement sécurisé.",
  },
  {
    q: "Qui peut devenir partenaire ?",
    a: "Les mécaniciens (en atelier ou mobiles), les garages et les dépanneurs-remorqueurs disposant d'un SIRET. Votre profil est vérifié par l'équipe Vroom avant activation.",
  },
  {
    q: "Dans quelles zones ?",
    a: "Les demandes arrivent aujourd'hui à Nîmes, Alès et environ 25 km autour. D'autres villes ouvrent progressivement.",
  },
];

export default function Faq({ items = FAQ_PARTICULIERS }: { items?: FaqItem[] }) {
  const [openIdx, setOpenIdx] = useState<number>(0);
  return (
    <div className="space-y-3">
      {items.map((f, i) => {
        const open = openIdx === i;
        return (
          <div key={f.q} className={`card overflow-hidden transition-colors ${open ? "border-vroom-yellow/40" : ""}`}>
            <button
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpenIdx(open ? -1 : i)}
              aria-expanded={open}
            >
              <span className="text-sm font-bold text-white md:text-[15px]">{f.q}</span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-vroom-yellow/50 text-vroom-yellow transition-transform duration-300 ${
                  open ? "rotate-180 bg-vroom-yellow/10" : ""
                }`}
              >
                <IconChevronDown className="h-4 w-4" />
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-zinc-400">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
