import { IMG } from "@/lib/img";
import type { Metadata } from "next";
import Link from "next/link";
import Duotone from "@/components/Duotone";
import {
  IconArrowRight,
  IconBriefcase,
  IconCard,
  IconCar,
  IconShield,
  IconUsers,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Entreprises — Solutions pour flottes et partenaires",
  description:
    "Vroom accompagne les entreprises : gestion de flotte, interventions prioritaires et partenariats sur mesure.",
};

const OFFRES = [
  {
    icon: IconCar,
    title: "Gestion de flotte",
    text: "Centralisez l'assistance de tous vos véhicules et suivez chaque intervention en temps réel.",
  },
  {
    icon: IconShield,
    title: "Interventions prioritaires",
    text: "Vos collaborateurs bénéficient d'une prise en charge prioritaire, partout en France.",
  },
  {
    icon: IconCard,
    title: "Facturation simplifiée",
    text: "Un tarif négocié, une facture mensuelle unique, zéro paperasse pour vos équipes.",
  },
  {
    icon: IconUsers,
    title: "Partenariats pros",
    text: "Intégrez votre réseau de garages et dépanneurs partenaires à la plateforme Vroom.",
  },
  {
    icon: IconBriefcase,
    title: "Contrats sur mesure",
    text: "Des solutions adaptées à la taille de votre flotte, du véhicule de fonction à la flotte complète.",
  },
  {
    icon: IconCard,
    title: "Reporting dédié",
    text: "Suivez vos coûts d'assistance et optimisez votre budget mobilité avec des rapports clairs.",
  },
];

export default function EntreprisesPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container-site grid items-center gap-10 pb-16 pt-14 md:pt-20 lg:grid-cols-2 lg:pb-24">
          <div>
            <span className="badge-label">Pour les entreprises</span>
            <h1 className="h2 mt-6 text-balance !text-4xl md:!text-6xl">
              Des solutions pensées pour <span className="text-vroom-yellow">votre flotte.</span>
            </h1>
            <p className="lead mt-6 max-w-lg">
              Vroom prend en charge l&apos;assistance automobile de vos collaborateurs et de vos véhicules,
              avec des interventions rapides et un budget maîtrisé.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-yellow">
                Demander un devis
                <IconArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/pro" className="btn-outline">
                Devenir partenaire pro
              </Link>
            </div>
          </div>
          <Duotone
            src={IMG.moteur}
            alt="Entretien d'un moteur de véhicule professionnel"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-[300px] rounded-3xl border border-vroom-yellow/25 shadow-card md:h-[400px]"
          />
        </div>
      </section>

      <section className="section-pad border-t border-white/5">
        <div className="container-site">
          <h2 className="h2 text-center">
            Nos solutions <span className="text-vroom-yellow">entreprises</span>
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {OFFRES.map((o) => (
              <div key={o.title} className="card-hover p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-vroom-yellow/10 text-vroom-yellow">
                  <o.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-[15px] font-extrabold">{o.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-zinc-400">{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site rounded-3xl border border-vroom-yellow/25 bg-vroom-card p-10 text-center md:p-16">
          <h2 className="h2 text-balance">
            Parlons de <span className="text-vroom-yellow">votre flotte</span>
          </h2>
          <p className="lead mx-auto mt-4 max-w-xl">
            Notre équipe vous répond sous 24h avec une proposition adaptée à vos besoins.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-yellow">
              Contacter l&apos;équipe entreprises
              <IconArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/" className="btn-outline">
              Découvrir Vroom
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
