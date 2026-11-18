import { IMG } from "@/lib/img";
import type { Metadata } from "next";
import Link from "next/link";
import Duotone from "@/components/Duotone";
import PhoneMockup from "@/components/PhoneMockup";
import {
  IconArrowRight,
  IconCard,
  IconCheck,
  IconClock,
  IconClipboard,
  IconPin,
  IconShield,
  IconStar,
  IconUser,
  IconUserPlus,
  IconUsers,
  IconWrench,
  IconBell,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Vroom Pro — Travaillez librement, développez votre activité",
  description:
    "Vroom Pro : recevez des demandes proches de vous, choisissez vos interventions et encaissez rapidement. 69,90 €/mois, sans engagement.",
};

/* ---------------------------------- HERO ---------------------------------- */

function ProHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-site grid items-center gap-12 pb-16 pt-14 md:pt-20 lg:grid-cols-2 lg:pb-24">
        <div>
          <span className="badge-label">Pour les professionnels</span>
          <h1 className="h2 mt-6 text-balance !text-4xl md:!text-[3.4rem]">
            Travaillez librement.
            <br />
            <span className="text-vroom-yellow">Développez votre activité.</span>
          </h1>
          <p className="lead mt-6 max-w-lg">
            Recevez des demandes proches de vous, choisissez vos interventions et gardez le contrôle.
          </p>
          <div className="mt-8">
            <Link href="#offre" className="btn-yellow">
              Rejoindre Vroom Pro
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {[
              { icon: IconUsers, val: "+1200", label: "professionnels partenaires" },
              { icon: IconStar, val: "4,8/5", label: "note moyenne des pros" },
              { icon: IconClock, val: "Rapides", label: "Paiements rapides et sécurisés" },
            ].map((s) => (
              <div key={s.label}>
                <s.icon className="h-6 w-6 text-vroom-yellow" />
                <p className="mt-2 text-lg font-extrabold text-white">{s.val}</p>
                <p className="mt-0.5 text-[11px] leading-snug text-zinc-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <Duotone
            src={IMG.proHero}
            alt="Mécanicien professionnel en intervention"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-[380px] rounded-3xl border border-vroom-yellow/25 shadow-card md:h-[460px]"
            gradient="from-black/70 via-transparent to-transparent"
          />
          {/* témoignage */}
          <div className="card absolute -bottom-6 left-4 right-4 border-vroom-yellow/30 bg-black/80 p-5 backdrop-blur-md md:left-8 md:right-auto md:w-[340px]">
            <p className="text-sm leading-relaxed text-zinc-200">
              « Grâce à Vroom, je remplis mon planning et je travaille comme je le veux. »
            </p>
            <div className="mt-3 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-vroom-yellow text-black">
                <IconUser className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold">Julien D.</p>
                <p className="text-xs text-zinc-400">Dépanneur partenaire</p>
              </div>
              <span className="ml-auto flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} className="h-3.5 w-3.5 text-vroom-yellow" />
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- AVANTAGES -------------------------------- */

const AVANTAGES = [
  { icon: IconUsers, title: "Plus de clients", text: "Accédez à de nombreuses demandes d'intervention chaque jour." },
  { icon: IconClock, title: "Liberté d'horaires", text: "Choisissez vos disponibilités et intervenez quand vous voulez." },
  { icon: IconPin, title: "Interventions proches", text: "Recevez uniquement des demandes proches de votre zone." },
  { icon: IconCard, title: "Paiements sécurisés", text: "Encaissez rapidement et en toute sécurité via l'application." },
  { icon: IconClipboard, title: "Moins d'administratif", text: "Vroom s'occupe du reste. Vous vous concentrez sur l'essentiel." },
];

function Advantages() {
  return (
    <section id="avantages" className="section-pad scroll-mt-24 border-t border-white/5">
      <div className="container-site">
        <h2 className="h2 text-center">
          Vos avantages avec <span className="text-vroom-yellow">Vroom Pro</span>
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {AVANTAGES.map((a) => (
            <div key={a.title} className="card-hover p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-vroom-yellow/10 text-vroom-yellow">
                <a.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-[15px] font-extrabold">{a.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-zinc-400">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- COMMENT ÇA MARCHE ---------------------------- */

const PRO_STEPS = [
  { n: "1", icon: IconUserPlus, title: "Créez votre profil", text: "Inscrivez-vous en quelques minutes et présentez votre activité." },
  { n: "2", icon: IconShield, title: "Validez vos documents", text: "Nous vérifions vos informations pour garantir la confiance de nos clients." },
  { n: "3", icon: IconBell, title: "Recevez vos premières demandes", text: "Des demandes proches de vous, en temps réel." },
  { n: "4", icon: IconCard, title: "Intervenez et encaissez", text: "Réalisez l'intervention et soyez payé rapidement." },
];

function ProSteps() {
  return (
    <section className="section-pad border-t border-white/5">
      <div className="container-site">
        <h2 className="h2 text-center">Comment ça marche ?</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PRO_STEPS.map((s, i) => (
            <div key={s.n} className="card-hover relative p-7">
              <span className="absolute right-6 top-6 flex h-7 w-7 items-center justify-center rounded-full bg-vroom-yellow text-xs font-extrabold text-black">
                {s.n}
              </span>
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-vroom-yellow/40 bg-vroom-yellow/10 text-vroom-yellow">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 pr-8 text-[15px] font-extrabold">{s.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-zinc-400">{s.text}</p>
              {i < PRO_STEPS.length - 1 && (
                <span className="absolute right-[-1.4rem] top-9 hidden text-vroom-yellow lg:block">
                  <IconArrowRight className="h-5 w-5" />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- OFFRE ----------------------------------- */

const PERKS = [
  "Visibilité sur la plateforme",
  "Accès aux demandes clients",
  "Outils de gestion intégrés",
  "Paiements sécurisés",
  "Support dédié",
];

function Pricing() {
  return (
    <section id="offre" className="section-pad scroll-mt-24 border-t border-white/5">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
        <div className="card relative overflow-hidden p-8 md:p-10">
          <Duotone
            src={IMG.mecanicien}
            alt="Mécanicien au travail dans son garage"
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="absolute inset-0"
            imgClassName="opacity-40"
            gradient="from-black/80 to-black/30"
          />
          <div className="relative">
            <h3 className="text-3xl font-extrabold">
              Statut
              <br />
              <span className="text-vroom-yellow">Pro Vroom</span>
            </h3>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-300">
              L&apos;abonnement pensé pour les professionnels de l&apos;automobile.
            </p>
          </div>
        </div>
        <div className="card relative z-10 border-vroom-yellow/40 p-8 md:p-10 lg:-mx-8 lg:shadow-yellow-glow">
          <p className="text-5xl font-extrabold tracking-tight">
            69,90 € <span className="text-base font-semibold text-zinc-400">/mois</span>
          </p>
          <p className="mt-1 text-sm font-semibold text-vroom-yellow">Sans engagement</p>
          <ul className="mt-6 space-y-3">
            {PERKS.map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm text-zinc-200">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-vroom-yellow/15 text-vroom-yellow">
                  <IconCheck className="h-3 w-3" />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn-yellow mt-8 w-full">
            Rejoindre Vroom Pro
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="hidden justify-center lg:flex">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- CTA ----------------------------------- */

function ProCta() {
  return (
    <section className="section-pad border-t border-white/5">
      <div className="container-site grid items-center gap-10 overflow-hidden rounded-3xl border border-white/10 bg-vroom-card lg:grid-cols-2">
        <div className="p-8 md:p-12">
          <span className="badge-label">La liberté de travailler, enfin.</span>
          <h2 className="h2 mt-5 text-balance">
            La <span className="text-vroom-yellow">liberté</span> de travailler, enfin.
          </h2>
          <p className="lead mt-5">
            Vroom donne aux professionnels de l&apos;automobile les outils pour développer leur activité
            sans perdre leur indépendance.
          </p>
          <ul className="mt-7 space-y-3">
            {[
              { icon: IconUser, text: "Indépendant mais jamais seul" },
              { icon: IconShield, text: "Une plateforme qui vous respecte" },
              { icon: IconUsers, text: "Plus de clients, plus de revenus" },
            ].map((f) => (
              <li key={f.text} className="flex items-center gap-3 text-sm text-zinc-200">
                <f.icon className="h-5 w-5 text-vroom-yellow" />
                {f.text}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link href="#offre" className="btn-yellow">
              Rejoindre Vroom Pro
              <IconArrowRight className="h-4 w-4" />
            </Link>
            <p className="mt-3 text-xs text-zinc-500">Rejoignez +1200 pros déjà partenaires</p>
          </div>
        </div>
        <Duotone
          src={IMG.mainsMecano}
          alt="Mains de mécanicien avec une clé sur un moteur"
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="relative h-[280px] lg:h-full lg:min-h-[420px]"
          gradient="from-transparent to-vroom-card/60 lg:from-vroom-card lg:via-transparent lg:to-transparent"
        />
      </div>
    </section>
  );
}

export default function ProPage() {
  return (
    <>
      <ProHero />
      <Advantages />
      <ProSteps />
      <Pricing />
      <ProCta />
    </>
  );
}
