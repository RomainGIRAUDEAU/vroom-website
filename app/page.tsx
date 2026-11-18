import { IMG } from "@/lib/img";
import type React from "react";
import Link from "next/link";
import Visual from "@/components/Visual";
import HeroPhoto from "@/components/HeroPhoto";
import PhoneMockup from "@/components/PhoneMockup";
import StoreBadges from "@/components/StoreBadges";
import {
  IconArrowRight,
  IconBattery,
  IconBolt,
  IconBriefcase,
  IconCalendar,
  IconCar,
  IconCard,
  IconClipboard,
  IconClock,
  IconEuro,
  IconFuel,
  IconGauge,
  IconHome,
  IconKey,
  IconPhone,
  IconPin,
  IconShield,
  IconStar,
  IconTire,
  IconTow,
  IconUser,
  IconUserPlus,
  IconUsers,
  IconWrench,
} from "@/components/Icons";

/* ---------------------------------- HERO ---------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden lg:min-h-[640px]">
      <HeroPhoto
        src={IMG.heroAccueil}
        alt="Automobiliste en panne au bord de la route la nuit, une dépanneuse Vroom arrive"
        position="60% center"
      />
      <div className="container-site relative -mt-16 pb-16 lg:mt-0 lg:flex lg:min-h-[640px] lg:items-center lg:pb-10 lg:pt-24">
        <div className="max-w-xl">
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
            Reprenez
            <br />
            <span className="text-vroom-yellow">le contrôle.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-300 md:text-lg">
            Une panne, une batterie déchargée, un pneu crevé ou un simple besoin d&apos;entretien.
            <br />
            Vroom vous connecte rapidement à un professionnel proche de vous.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#services" className="btn-yellow">
              Découvrir Vroom
              <IconArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#telecharger" className="btn-outline">
              <IconPhone className="h-4 w-4" />
              Télécharger l&apos;application
            </Link>
          </div>
          <div className="mt-9 flex items-center gap-4">
            <div className="flex -space-x-3">
              {["JD", "SM", "KL", "AR"].map((i) => (
                <span
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-vroom-black bg-gradient-to-br from-zinc-600 to-zinc-800 text-[11px] font-bold text-white"
                >
                  {i}
                </span>
              ))}
            </div>
            <div className="text-sm">
              <p className="text-zinc-200">
                <span className="font-bold text-white">+2500</span> automobilistes déjà dépannés
              </p>
              <p className="mt-0.5 flex items-center gap-1.5 text-zinc-400">
                Note <span className="font-bold text-white">4,8/5</span> sur l&apos;app
                <span className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <IconStar key={i} className="h-3.5 w-3.5 text-vroom-yellow" />
                  ))}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------- DEUX SOLUTIONS (maquette hero) --------------------- */

function SolutionCard({
  src,
  alt,
  icon: Icon,
  title,
  subtitle,
  text,
  cta,
  href,
}: {
  src: string;
  alt: string;
  icon: (p: { className?: string }) => JSX.Element;
  title: React.ReactNode;
  subtitle?: string;
  text: React.ReactNode;
  cta: string;
  href: string;
}) {
  return (
    <div className="group relative flex min-h-[560px] flex-col justify-end overflow-hidden rounded-[28px] border border-vroom-yellow/40 bg-vroom-black p-7 text-center shadow-[0_0_40px_rgba(255,214,10,0.08)] md:p-9">
      <Visual
        src={src}
        alt={alt}
        className="absolute inset-0"
        position="center top"
        imgClassName="transition-transform duration-700 group-hover:scale-105"
        gradient="from-vroom-black via-vroom-black/60 via-40% to-transparent"
      />
      <span className="absolute left-7 top-7 flex h-14 w-14 items-center justify-center rounded-xl border border-vroom-yellow/50 bg-black/60 text-vroom-yellow backdrop-blur">
        <Icon className="h-7 w-7" />
      </span>
      <div className="relative">
        <h3 className="text-3xl font-extrabold leading-tight md:text-[2.1rem]">{title}</h3>
        {subtitle && <p className="mt-3 text-lg font-semibold text-white">{subtitle}</p>}
        <p className="mx-auto mt-3 max-w-xs text-zinc-300">{text}</p>
        <Link href={href} className="btn-yellow mt-7 w-full !justify-between !py-4 !text-base sm:mx-auto sm:max-w-sm">
          <span className="flex-1 text-center">{cta}</span>
          <IconArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}

function DualSolutions() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="container-site grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-10">
        <SolutionCard
          src={IMG.carteParticuliers}
          alt="Automobiliste au téléphone à côté de sa voiture en panne, capot ouvert"
          icon={IconUser}
          title="Particuliers"
          subtitle="Besoin d’aide maintenant ?"
          text={<>Assistance rapide, transparente et proche de vous.</>}
          cta="Trouver une solution"
          href="#telecharger"
        />
        <div className="relative order-first py-4 text-center lg:order-none lg:w-[240px]">
          <span aria-hidden className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-vroom-yellow/30 to-transparent lg:block" />
          <div className="relative bg-vroom-black py-6">
            <span className="neon-v text-7xl font-extrabold leading-none text-vroom-yellow md:text-8xl">V</span>
            <h2 className="mt-6 text-3xl font-bold leading-tight">
              Deux solutions,
              <br />
              un même
              <br />
              <span className="text-vroom-yellow">engagement.</span>
            </h2>
            <div className="mx-auto mt-6 h-[2px] w-14 bg-vroom-yellow" />
            <p className="mt-6 text-lg text-zinc-400">
              L&apos;assistance auto
              <br />
              nouvelle génération.
            </p>
          </div>
        </div>
        <SolutionCard
          src={IMG.cartePros}
          alt="Dépanneur partenaire Vroom avec sa tablette devant sa dépanneuse"
          icon={IconWrench}
          title={
            <>
              Mécaniciens /
              <br />
              Remorqueurs partenaires
            </>
          }
          text={<>Travaillez librement et développez votre activité.</>}
          cta="Rejoindre Vroom Pro"
          href="/pro"
        />
      </div>
    </section>
  );
}

/* ------------------------------ POURQUOI VROOM ----------------------------- */

function Why() {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
      <div className="relative h-[260px] w-full sm:h-[340px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[55%]">
        <Visual
          src={IMG.conductriceNuit}
          alt="Automobiliste seule dans sa voiture la nuit, inquiète"
          className="absolute inset-0"
          gradient="from-vroom-black via-transparent to-transparent"
        />
        <div aria-hidden className="absolute inset-0 hidden bg-gradient-to-r from-vroom-black via-vroom-black/30 to-transparent lg:block" />
      </div>
      <div className="container-site relative py-14 lg:flex lg:min-h-[440px] lg:items-center lg:py-20">
        <div className="max-w-lg">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-vroom-yellow">Pourquoi Vroom existe ?</span>
          <h2 className="h2 mt-4 text-balance">
            Parce qu&apos;une panne ne devrait jamais être un moment de solitude.
          </h2>
          <p className="lead mt-6">
            Chaque jour, des milliers d&apos;automobilistes se retrouvent bloqués sans savoir qui appeler,
            combien cela va coûter ou combien de temps ils devront attendre.
          </p>
          <p className="lead mt-4">
            Vroom est né pour rendre l&apos;assistance automobile plus simple, plus rapide et plus humaine.
          </p>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- DEUX COMMUNAUTÉS ------------------------------ */

function Communities() {
  const particulier = [
    { icon: IconBattery, label: "Batterie" },
    { icon: IconFuel, label: "Carburant" },
    { icon: IconTire, label: "Crevaison" },
    { icon: IconTow, label: "Remorquage" },
    { icon: IconGauge, label: "Diagnostic" },
  ];
  const pro = [
    { icon: IconWrench, label: "Mécaniciens" },
    { icon: IconCar, label: "Garages mobiles" },
    { icon: IconClock, label: "Dépanneurs" },
    { icon: IconTow, label: "Remorqueurs" },
  ];
  return (
    <section className="py-10 md:py-14">
      <div className="container-site">
        <div className="rounded-3xl border border-white/10 bg-vroom-card/60 p-6 md:p-10">
          <h2 className="h2 text-center">Une plateforme. Deux communautés.</h2>
          <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr]">
            <div className="card flex flex-col p-7">
              <div className="flex items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-vroom-yellow text-black">
                  <IconUser className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="text-xl font-extrabold">Particuliers</h3>
                  <p className="mt-1 text-sm text-zinc-400">Trouvez rapidement un professionnel proche de vous.</p>
                </div>
              </div>
              <div className="mt-6 grid flex-1 grid-cols-2 content-start gap-x-6 gap-y-3">
                {particulier.map((s) => (
                  <span key={s.label} className="flex items-center gap-2.5 text-sm text-zinc-300">
                    <s.icon className="h-4 w-4 text-vroom-yellow" />
                    {s.label}
                  </span>
                ))}
              </div>
              <Link href="#telecharger" className="btn-yellow mt-7 w-full">
                Je suis un particulier
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative hidden items-center lg:flex">
              <span aria-hidden className="absolute inset-x-[-1.5rem] top-1/2 border-t border-dashed border-vroom-yellow/50" />
              <span className="relative flex h-24 w-24 items-center justify-center rounded-full border border-vroom-yellow/60 bg-vroom-black text-5xl font-extrabold text-vroom-yellow shadow-yellow-glow">
                <span className="neon-v">V</span>
              </span>
            </div>
            <div className="card flex flex-col p-7">
              <div className="flex items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-vroom-yellow text-black">
                  <IconWrench className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="text-xl font-extrabold">Professionnels</h3>
                  <p className="mt-1 text-sm text-zinc-400">Développez votre activité librement.</p>
                </div>
              </div>
              <div className="mt-6 grid flex-1 content-start gap-y-3">
                {pro.map((s) => (
                  <span key={s.label} className="flex items-center gap-2.5 text-sm text-zinc-300">
                    <s.icon className="h-4 w-4 text-vroom-yellow" />
                    {s.label}
                  </span>
                ))}
              </div>
              <Link href="/pro" className="btn-yellow mt-7 w-full">
                Je suis un professionnel
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- COMMENT ÇA MARCHE ---------------------------- */

const STEPS = [
  {
    n: "1",
    icon: IconCar,
    title: "Décrivez votre besoin",
    text: "Indiquez votre problème en quelques clics.",
  },
  {
    n: "2",
    icon: IconUserPlus,
    title: "Un professionnel proche accepte",
    text: "Nous trouvons le meilleur pro proche de vous.",
  },
  {
    n: "3",
    icon: IconTow,
    title: "Vous reprenez la route",
    text: "Intervention rapide, en toute sérénité.",
  },
];

function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="scroll-mt-24 py-10 md:py-14">
      <div className="container-site">
        <h2 className="h2 text-center">Comment ça fonctionne ?</h2>
        <div className="mt-8 grid gap-8 rounded-3xl border border-white/10 bg-vroom-card/60 p-7 md:grid-cols-3 md:gap-4 md:p-10">
          {STEPS.map((s, i) => (
            <div key={s.n} className="relative flex items-start gap-4">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/10 bg-vroom-card2 text-vroom-yellow">
                <s.icon className="h-7 w-7" />
              </span>
              <div className="pr-6">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-vroom-yellow text-xs font-extrabold text-black">
                  {s.n}
                </span>
                <h3 className="mt-2 font-extrabold">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{s.text}</p>
              </div>
              {i < STEPS.length - 1 && (
                <span aria-hidden className="absolute right-[-1.25rem] top-7 hidden w-10 items-center text-vroom-yellow md:flex">
                  <span className="flex-1 border-t border-dotted border-zinc-400" />
                  <IconArrowRight className="h-3.5 w-3.5 text-zinc-300" />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ DIFFÉRENCIANTS ----------------------------- */

const VALUES = [
  { icon: IconBolt, title: "Rapidité", text: "Des professionnels proches pour une intervention rapide." },
  { icon: IconEuro, title: "Transparence", text: "Des prix clairs et connus à l'avance. Pas de surprise." },
  { icon: IconShield, title: "Confiance", text: "Des professionnels vérifiés et notés par la communauté." },
  { icon: IconPin, title: "Liberté", text: "Vous choisissez le professionnel et la solution qui vous conviennent." },
  { icon: IconWrench, title: "Simplicité", text: "Tout se fait depuis l'application, en quelques clics." },
];

function Differentiators() {
  return (
    <section className="section-pad">
      <div className="container-site">
        <h2 className="h2 text-center">Ce qui rend Vroom différent</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {VALUES.map((v) => (
            <div key={v.title} className="card-hover p-6 text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-vroom-yellow/10 text-vroom-yellow">
                <v.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-base font-extrabold">{v.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-zinc-400">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- LIBERTÉ DE ROULER ---------------------------- */

const MOMENTS = [
  { icon: IconCalendar, label: "Un rendez-vous à honorer" },
  { icon: IconBriefcase, label: "Une journée de travail" },
  { icon: IconHome, label: "Un retour à la maison" },
  { icon: IconUsers, label: "Une famille qui attend" },
];

function Freedom() {
  return (
    <section className="py-10 md:py-14">
      <div className="container-site">
        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-vroom-card lg:grid-cols-[1fr_1.15fr]">
          <Visual
            src={IMG.familleRoute}
            alt="Famille en voiture sur la route au coucher du soleil"
            className="h-[260px] lg:h-auto lg:min-h-[340px]"
            gradient="from-vroom-card/80 via-transparent to-transparent lg:bg-gradient-to-l lg:from-vroom-card lg:via-transparent"
          />
          <div className="p-8 md:p-10">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-vroom-yellow">La liberté de rouler</span>
            <h2 className="h2 mt-4 text-balance">Derrière chaque intervention, il y a plus qu&apos;une voiture.</h2>
            <div className="mt-7 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {MOMENTS.map((m) => (
                <span key={m.label} className="flex items-start gap-2.5 text-[13px] leading-snug text-zinc-300">
                  <m.icon className="h-6 w-6 shrink-0 text-vroom-yellow" />
                  {m.label}
                </span>
              ))}
            </div>
            <p className="mt-7 text-zinc-400">Vroom existe pour que ces moments continuent.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- SERVICES --------------------------------- */

const SERVICES = [
  { icon: IconBattery, label: "Batterie" },
  { icon: IconTire, label: "Crevaison" },
  { icon: IconFuel, label: "Carburant" },
  { icon: IconGauge, label: "Diagnostic" },
  { icon: IconKey, label: "Ouverture véhicule" },
  { icon: IconTow, label: "Remorquage" },
  { icon: IconWrench, label: "Entretien à domicile" },
  { icon: IconClipboard, label: "Contrôle avant départ" },
];

function Services() {
  return (
    <section id="services" className="section-pad scroll-mt-24 border-t border-white/5">
      <div className="container-site">
        <h2 className="h2 text-center">Nos services</h2>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {SERVICES.map((s) => (
            <div key={s.label} className="card-hover flex flex-col items-center gap-3 p-6 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-vroom-yellow/10 text-vroom-yellow">
                <s.icon className="h-6 w-6" />
              </span>
              <span className="text-sm font-bold">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-vroom-yellow transition-colors hover:text-yellow-300">
            Voir tous les services
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- OÙ VA VROOM ------------------------------ */

function Roadmap() {
  return (
    <section className="py-10 md:py-14">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#07090c]">
          <Visual
            src={IMG.carteFrance}
            alt="Carte de France du réseau de professionnels Vroom"
            className="h-[260px] sm:h-[320px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[55%]"
            gradient="from-[#07090c] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#07090c] lg:via-transparent"
          />
          <div className="relative p-8 md:p-12 lg:max-w-[50%]">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-vroom-yellow">Où va Vroom ?</span>
            <h2 className="h2 mt-4 text-balance">Construire le futur de l&apos;assistance automobile.</h2>
            <p className="lead mt-6">
              Nous construisons un réseau national de professionnels capables d&apos;intervenir rapidement partout en France.
            </p>
            <p className="lead mt-4">
              Notre objectif est simple : rendre l&apos;assistance automobile aussi accessible qu&apos;une course VTC.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- CTA ----------------------------------- */

function FinalCta() {
  return (
    <section className="section-pad">
      <div className="container-site">
      <div className="rounded-3xl border border-white/10 bg-vroom-card/60 p-10 text-center md:p-14">
        <h2 className="h2 text-balance">Besoin d&apos;aide ou envie de rejoindre l&apos;aventure ?</h2>
        <p className="lead mt-4">Vroom est là pour vous.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="#telecharger" className="btn-yellow">
            Trouver une solution
            <IconArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/pro" className="btn-outline">
            Rejoindre Vroom Pro
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      </div>
    </section>
  );
}

/* ------------------------------ TÉLÉCHARGER ------------------------------- */

function Download() {
  return (
    <section id="telecharger" className="section-pad scroll-mt-24 border-t border-white/5">
      <div className="container-site">
      <div className="grid items-center gap-12 rounded-3xl border border-white/10 bg-vroom-card p-8 md:p-14 lg:grid-cols-[1fr_auto]">
        <div>
          <span className="badge-label">L&apos;application</span>
          <h2 className="h2 mt-5 text-balance">
            Besoin d&apos;une assistance <span className="text-vroom-yellow">immédiate ?</span>
          </h2>
          <p className="lead mt-5 max-w-lg">
            Ouvrez l&apos;application Vroom et trouvez un professionnel disponible en quelques clics.
          </p>
          <StoreBadges className="mt-7" />
        </div>
        <PhoneMockup className="hidden justify-self-center lg:block" />
      </div>
      </div>
    </section>
  );
}

/* ---------------------------------- PAGE ----------------------------------- */

export default function HomePage() {
  return (
    <>
      <Hero />
      <Why />
      <DualSolutions />
      <Communities />
      <HowItWorks />
      <Differentiators />
      <Freedom />
      <Services />
      <Roadmap />
      <FinalCta />
      <Download />
    </>
  );
}
