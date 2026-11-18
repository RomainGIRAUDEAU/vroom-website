import React from "react";
import { IconStar } from "./Icons";

// Mockup de l'app Vroom (tableau de bord pro) en pur CSS, inspiré de la maquette Pro.
export default function PhoneMockup({ className = "" }: { className?: string }) {
  const demandes = [
    { titre: "Dépannage batterie", lieu: "Sophia Antipolis", km: "1,2 km", prix: "45 €" },
    { titre: "Remorquage", lieu: "Nice Ouest", km: "3,8 km", prix: "85 €" },
    { titre: "Crevaison", lieu: "Antibes", km: "2,1 km", prix: "38 €" },
    { titre: "Ouverture véhicule", lieu: "Cannes", km: "1,5 km", prix: "40 €" },
  ];
  return (
    <div className={`relative ${className}`}>
      <div className="w-[280px] rounded-[2rem] border border-vroom-yellow/30 bg-vroom-card p-2 shadow-card">
        <div className="rounded-[1.6rem] bg-[#0b0b0b] p-4">
          {/* header app */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-extrabold tracking-tight">
              <span className="text-white">VR</span>
              <span className="text-vroom-yellow">OO</span>
              <span className="text-white">M</span>
            </span>
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-zinc-300">Pro</span>
          </div>
          <p className="mt-3 text-[13px] font-bold text-white">Tableau de bord</p>
          {/* stats */}
          <div className="mt-2 grid grid-cols-3 gap-2">
            {[
              { label: "Interventions ce mois", val: "24" },
              { label: "Revenus", val: "2 340 €" },
              { label: "Note moyenne", val: "4,8/5" },
            ].map((s) => (
              <div key={s.label} className="rounded-lg border border-white/10 bg-white/5 p-2">
                <p className="text-sm font-extrabold text-vroom-yellow">{s.val}</p>
                <p className="mt-0.5 text-[8.5px] leading-tight text-zinc-400">{s.label}</p>
              </div>
            ))}
          </div>
          {/* demandes */}
          <p className="mt-3 text-[11px] font-bold text-zinc-300">Demandes récentes</p>
          <div className="mt-1.5 space-y-1.5">
            {demandes.map((d) => (
              <div key={d.titre} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-2.5 py-2">
                <div>
                  <p className="text-[10.5px] font-semibold text-white">{d.titre}</p>
                  <p className="text-[8.5px] text-zinc-500">{d.lieu} · {d.km}</p>
                </div>
                <span className="text-[10.5px] font-bold text-vroom-yellow">{d.prix}</span>
              </div>
            ))}
          </div>
          <p className="mt-2 text-center text-[9px] font-semibold text-vroom-yellow">Voir toutes les demandes →</p>
          <div className="mt-2 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <IconStar key={i} className="h-2.5 w-2.5 text-vroom-yellow" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
