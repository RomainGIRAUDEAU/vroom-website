import { IMG } from "@/lib/img";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  IconArrowRight,
  IconBolt,
  IconHeart,
  IconShield,
  IconWrench,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "À propos — Qui sommes-nous ?",
  description:
    "Vroom rend l'assistance automobile simple, rapide et humaine. Application développée par Riviera Flow, agence d'apps mobiles à Sophia Antipolis.",
};

/* ---------------------------------- HERO ---------------------------------- */

function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-site pb-16 pt-14 text-center md:pt-20 lg:pb-20">
        <span className="badge-label">À propos</span>
        <h1 className="h2 mx-auto mt-6 max-w-3xl text-balance !text-4xl md:!text-6xl">
          Qui sommes-nous <span className="text-vroom-yellow">?</span>
        </h1>
        <p className="lead mx-auto mt-6 max-w-2xl">
          Vroom est une plateforme française qui connecte les automobilistes à des professionnels de
          l&apos;assistance automobile vérifiés, proches de chez eux.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------ NOTRE MISSION ------------------------------ */

function Mission() {
  return (
    <section className="section-pad border-t border-white/5">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2">
        <div className="relative h-[300px] overflow-hidden rounded-3xl border border-white/10 md:h-[400px]">
          <Image
            src={IMG.conducteurNuit}
            alt="Automobiliste au volant de nuit"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-vroom-black/70 to-transparent" />
        </div>
        <div>
          <span className="badge-label">Notre mission</span>
          <h2 className="h2 mt-5 text-balance">
            Rendre l&apos;assistance auto <span className="text-vroom-yellow">simple, rapide et humaine.</span>
          </h2>
          <p className="lead mt-6">
            Parce qu&apos;une panne ne devrait jamais être un moment de solitude, nous mettons la technologie
            au service de ceux qui conduisent et de ceux qui réparent.
          </p>
          <div className="mt-8 grid max-w-md grid-cols-3 gap-4">
            {[
              { val: "+2500", label: "automobilistes dépannés" },
              { val: "+1200", label: "pros partenaires" },
              { val: "4,8/5", label: "note moyenne" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-extrabold text-vroom-yellow">{s.val}</p>
                <p className="mt-1 text-xs leading-snug text-zinc-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- NOS VALEURS ------------------------------- */

const VALEURS = [
  { icon: IconBolt, title: "Rapidité", text: "Chaque minute compte quand on est en panne. Nous agissons vite." },
  { icon: IconShield, title: "Confiance", text: "Des pros vérifiés, des prix transparents, des avis réels." },
  { icon: IconHeart, title: "Humain", text: "Derrière chaque intervention, il y a une personne qui compte sur nous." },
  { icon: IconWrench, title: "Indépendance", text: "Les pros gardent le contrôle de leur activité et de leur emploi du temps." },
];

function Values() {
  return (
    <section id="engagements" className="section-pad scroll-mt-24 border-t border-white/5">
      <div className="container-site">
        <h2 className="h2 text-center">
          Nos <span className="text-vroom-yellow">engagements</span>
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALEURS.map((v) => (
            <div key={v.title} className="card-hover p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-vroom-yellow/10 text-vroom-yellow">
                <v.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-[15px] font-extrabold">{v.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-zinc-400">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- RIVIERRA FLOW (demande RIV-512) ------------------ */

function RivieraFlow() {
  return (
    <section className="section-pad border-t border-white/5">
      <div className="container-site grid items-center gap-10 rounded-3xl border border-vroom-yellow/25 bg-gradient-to-b from-vroom-card2 to-vroom-card p-8 md:p-12 lg:grid-cols-2">
        <div className="relative h-[280px] overflow-hidden rounded-2xl border border-white/10 md:h-[340px]">
          <Image
            src={IMG.equipe}
            alt="L'équipe Riviera Flow au travail"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-vroom-black/60 to-transparent" />
        </div>
        <div>
          <span className="badge-label">Notre studio tech</span>
          <h2 className="h2 mt-5 text-balance">
            Application développée par <span className="text-vroom-yellow">Riviera Flow</span>
          </h2>
          <p className="lead mt-5">
            <strong className="font-semibold text-white">Riviera Flow</strong> est une agence de développement
            d&apos;applications mobiles basée à <strong className="font-semibold text-white">Sophia Antipolis</strong>.
            Nous concevons et développons l&apos;application Vroom, de l&apos;idée jusqu&apos;à la mise en production.
          </p>
          <a
            href="https://rivieraflow.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-yellow mt-7"
          >
            Découvrir rivieraflow.com
            <IconArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- CTA ----------------------------------- */

function AboutCta() {
  return (
    <section className="section-pad">
      <div className="container-site rounded-3xl border border-vroom-yellow/25 bg-vroom-card p-10 text-center md:p-16">
        <h2 className="h2 text-balance">
          Envie de rejoindre <span className="text-vroom-yellow">l&apos;aventure ?</span>
        </h2>
        <p className="lead mt-4">Que vous soyez automobiliste ou professionnel, Vroom est là pour vous.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/#telecharger" className="btn-yellow">
            Télécharger l&apos;app
            <IconArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/contact" className="btn-outline">
            Nous contacter
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Mission />
      <Values />
      <RivieraFlow />
      <AboutCta />
    </>
  );
}
