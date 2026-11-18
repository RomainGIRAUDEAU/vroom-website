"use client";

import { useState } from "react";
import { IconChevronDown } from "./Icons";

const FAQS = [
  {
    q: "Comment fonctionne Vroom ?",
    a: "Vous décrivez votre problème, un professionnel proche accepte votre demande et intervient rapidement.",
  },
  {
    q: "Quels sont les moyens de paiement acceptés ?",
    a: "Nous acceptons les paiements par carte bancaire directement dans l'application.",
  },
  {
    q: "Les professionnels sont-ils vérifiés ?",
    a: "Oui, tous nos partenaires sont rigoureusement vérifiés pour garantir votre sécurité.",
  },
  {
    q: "Puis-je annuler une demande ?",
    a: "Vous pouvez annuler tant qu'un professionnel n'a pas accepté la demande.",
  },
  {
    q: "Vroom est-il disponible partout en France ?",
    a: "Nous commençons à Nîmes et ses alentours, puis nous déployons progressivement dans toute la France.",
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number>(0);
  return (
    <div className="space-y-3">
      {FAQS.map((f, i) => {
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
