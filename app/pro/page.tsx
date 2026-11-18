import { IMG } from "@/lib/img";
import type { Metadata } from "next";
import Link from "next/link";
import Visual from "@/components/Visual";
import HeroPhoto from "@/components/HeroPhoto";
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
    <section className="relative overflow-hidden lg:min-h-[620px]">
      <HeroPhoto
        src={IMG.heroPro}
        alt="Dépanneur partenaire Vroom souriant, téléphone en main, devant sa dépanneuse"
        position="35% center"
      >
        {/* témoignage, posé sur la photo comme sur la maquette */}
        <div className="absolute bottom-6 right-4 hidden w-[300px] rounded-2xl border border-white/10 bg-black/75 p-5 backdrop-blur-md md:block lg:bottom-16 lg:right-[max(1.25rem,calc((100vw-1200px)/2+2rem))]">
          <span className="text-2xl font-extrabold leading-none text-vroom-yellow">“</span>
          <p className="text-[15px] leading-relaxed text-zinc-100">
            Grâce à Vroom, je remplis mon planning et je travaille comme je le veux.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-zinc-500 to-zinc-800 text-xs font-bold">
              JD
            </span>
            <div>
              <p className="text-sm font-bold">Julien D.</p>
              <p className="text-xs text-zinc-400">Dépanneur partenaire</p>
              <span className="mt-1 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} className="h-3 w-3 text-vroom-yellow" />
                ))}
              </span>
            </div>
          </div>
        </div>
      </HeroPhoto>
      <div className="container-site relative -mt-12 pb-16 lg:mt-0 lg:flex lg:min-h-[620px] lg:items-center lg:pb-10 lg:pt-24">
        <div className="max-w-3xl">
          <span className="inline-block rounded-md border border-vroom-yellow/60 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-vroom-yellow">
            Pour les professionnels
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight md:text-[3.4rem]">
            Travaillez librement.
            <br />
            <span className="text-vroom-yellow">Développez votre activité.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-300 md:text-lg">
            Recevez des demandes proches de vous, choisissez vos interventions et gardez le contrôle.
          </p>
          <div className="mt-8">
            <Link href="#offre" className="btn-yellow !px-7 !py-3.5 !text-base">
              Rejoindre Vroom Pro
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 divide-x divide-white/10">
            {[
              { icon: IconUsers, val: "+1200", label: "professionnels partenaires" },
              { icon: IconStar, val: "4,8/5", label: "note moyenne des pros" },
              { icon: IconClock, val: "Paiements", label: "rapides et sécurisés" },
            ].map((s) => (
              <div key={s.label} className="flex items-start gap-3 px-3 first:pl-0 sm:px-5">
                <s.icon className="hidden h-7 w-7 shrink-0 text-vroom-yellow sm:block" />
                <div>
                  <p className="font-extrabold text-white">{s.val}</p>
                  <p className="mt-0.5 max-w-[7rem] text-xs leading-snug text-zinc-400">{s.label}</p>
                </div>
              </div>
            ))}
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
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {PRO_STEPS.map((s, i) => (
            <div key={s.n} className="relative flex items-start gap-4">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/10 bg-vroom-card2 text-vroom-yellow">
                <s.icon className="h-7 w-7" />
              </span>
              <div className="pr-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-vroom-yellow text-xs font-bold text-vroom-yellow">
                  {s.n}
                </span>
                <h3 className="mt-2 font-extrabold">{s.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-zinc-400">{s.text}</p>
              </div>
              {i < PRO_STEPS.length - 1 && (
                <span aria-hidden className="absolute right-[-1.1rem] top-14 hidden w-8 items-center lg:flex">
                  <span className="flex-1 border-t border-dotted border-zinc-400" />
                  <IconArrowRight className="h-3 w-3 text-zinc-300" />
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

const DEMANDES = [
  { titre: "Dépannage batterie", km: "1,2 km", prix: "45 €" },
  { titre: "Remorquage", km: "3,6 km", prix: "85 €" },
  { titre: "Crevaison", km: "2,1 km", prix: "35 €" },
  { titre: "Ouverture véhicule", km: "1,5 km", prix: "40 €" },
];

function Dashboard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-5 shadow-card">
      <div className="flex items-center justify-between">
        <span className="text-sm font-extrabold text-vroom-yellow">VROOM</span>
        <span className="text-[11px] text-zinc-500">Julien D.</span>
      </div>
      <p className="mt-4 text-sm font-bold">Tableau de bord</p>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[
          { label: "Interventions ce mois", val: "24" },
          { label: "Revenus", val: "2 340 €" },
          { label: "Note moyenne", val: "4,8/5" },
        ].map((k) => (
          <div key={k.label} className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
            <p className="text-[10px] leading-tight text-zinc-500">{k.label}</p>
            <p className="mt-1.5 text-base font-extrabold">{k.val}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs font-bold">Demandes récentes</p>
      <ul className="mt-2 divide-y divide-white/5">
        {DEMANDES.map((d) => (
          <li key={d.titre} className="flex items-center gap-3 py-2 text-xs">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-vroom-yellow/15 text-vroom-yellow">
              <IconWrench className="h-3 w-3" />
            </span>
            <span className="flex-1 text-zinc-200">{d.titre}</span>
            <span className="text-zinc-500">{d.km}</span>
            <span className="w-10 text-right font-bold text-vroom-yellow">{d.prix}</span>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-center text-[11px] text-zinc-400">
        <span className="text-vroom-yellow">›</span> Voir toutes les demandes
      </p>
    </div>
  );
}

function Pricing() {
  return (
    <section id="offre" className="scroll-mt-24 py-10 md:py-14">
      <div className="container-site">
        <div className="grid items-center gap-6 overflow-hidden rounded-3xl border border-white/10 bg-vroom-card p-6 md:p-8 lg:grid-cols-[0.9fr_1fr_1.25fr]">
          <div className="relative -m-6 mb-0 min-h-[260px] overflow-hidden md:-m-8 md:mb-0 lg:my-[-2rem] lg:mr-0 lg:self-stretch">
            <Visual
              src={IMG.depanneuseStatut}
              alt="Dépanneuse dans la pénombre"
              className="absolute inset-0"
              gradient="from-vroom-card via-black/30 to-black/40"
            />
            <div className="relative flex h-full flex-col justify-center p-8">
              <h3 className="text-4xl font-extrabold leading-tight">
                Statut
                <br />
                <span className="text-vroom-yellow">Pro Vroom</span>
              </h3>
              <p className="mt-4 max-w-[15rem] text-sm leading-relaxed text-zinc-300">
                L&apos;abonnement pensé pour les professionnels de la route.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-vroom-yellow/50 bg-vroom-black p-7 shadow-yellow-glow">
            <p className="text-4xl font-extrabold tracking-tight md:text-5xl">
              69,90 € <span className="text-base font-semibold text-zinc-400">/mois</span>
            </p>
            <p className="mt-2 text-sm text-zinc-400">Sans engagement</p>
            <ul className="mt-6 space-y-3">
              {PERKS.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-zinc-200">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-vroom-yellow text-vroom-yellow">
                    <IconCheck className="h-3 w-3" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-yellow mt-7 w-full">
              Rejoindre Vroom Pro
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <Dashboard />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- CTA ----------------------------------- */

function ProCta() {
  return (
    <section className="py-10 md:py-14">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-vroom-card">
          <Visual
            src={IMG.mecanicienCapot}
            alt="Mécanicien partenaire penché sous le capot d'une voiture"
            className="h-[260px] sm:h-[320px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[58%]"
            position="30% center"
            gradient="from-vroom-card via-transparent to-transparent lg:bg-gradient-to-r lg:from-vroom-card lg:via-vroom-card/20"
          />
          <div className="relative grid gap-8 p-8 md:p-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <h2 className="h2 text-balance">
                La <span className="text-vroom-yellow">liberté</span> de travailler, enfin.
              </h2>
              <p className="lead mt-5 max-w-lg text-zinc-300">
                Vroom donne aux professionnels de l&apos;automobile les outils pour développer leur activité
                sans perdre leur indépendance.
              </p>
              <ul className="mt-8 grid gap-5 sm:grid-cols-3">
                {[
                  { icon: IconUser, text: "Indépendant mais jamais seul" },
                  { icon: IconUsers, text: "Une plateforme qui vous respecte" },
                  { icon: IconShield, text: "Plus de clients, plus de revenus" },
                ].map((f) => (
                  <li key={f.text} className="flex items-start gap-3 text-sm leading-snug text-zinc-200">
                    <f.icon className="h-6 w-6 shrink-0 text-vroom-yellow" />
                    {f.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:justify-self-end lg:text-center">
              <Link href="#offre" className="btn-yellow !px-7 !py-3.5 !text-base">
                Rejoindre Vroom Pro
                <IconArrowRight className="h-4 w-4" />
              </Link>
              <p className="mt-3 text-sm text-zinc-300">Rejoignez +1200 pros déjà partenaires</p>
            </div>
          </div>
        </div>
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
