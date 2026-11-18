import { IMG } from "@/lib/img";
import type React from "react";
import Link from "next/link";
import Visual from "@/components/Visual";
import HeroPhoto from "@/components/HeroPhoto";
import PhoneMockup from "@/components/PhoneMockup";
import StoreBadges from "@/components/StoreBadges";
import Faq from "@/components/Faq";
import {
  IconArrowRight,
  IconBattery,
  IconBolt,
  IconBriefcase,
  IconCalendar,
  IconCar,
  IconCard,
  IconClipboard,
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
          <span className="inline-flex items-center gap-2 rounded-full border border-vroom-yellow/40 bg-black/50 px-3 py-1 text-xs font-semibold text-vroom-yellow backdrop-blur">
            <IconPin className="h-3.5 w-3.5" />
            L&apos;appli de dépannage auto · Nîmes &amp; Alès
          </span>
          <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
            Reprenez
            <br />
            <span className="text-vroom-yellow">le contrôle.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg font-semibold leading-snug text-white md:text-xl">
            Un dépanneur ou un mécanicien vérifié, près de vous, au prix annoncé.
          </p>
          <p className="mt-3 max-w-md text-base leading-relaxed text-zinc-300">
            Batterie à plat, crevaison, panne, remorquage ou entretien : décrivez votre problème dans
            l&apos;application, les pros autour de vous vous envoient leur devis, vous choisissez.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#telecharger" className="btn-yellow">
              <IconPhone className="h-4 w-4" />
              Télécharger l&apos;application
            </Link>
            <Link href="#comment-ca-marche" className="btn-outline">
              Comment ça marche ?
              <IconArrowRight className="h-4 w-4" />
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
          title="Automobilistes"
          subtitle="En panne ou besoin d’un entretien ?"
          text={<>Trouvez un pro vérifié près de vous, comparez les devis, payez dans l&apos;app.</>}
          cta="Voir comment ça marche"
          href="#comment-ca-marche"
        />
        <div className="relative order-first py-4 text-center lg:order-none lg:w-[240px]">
          <span aria-hidden className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-vroom-yellow/30 to-transparent lg:block" />
          <div className="relative bg-vroom-black py-6">
            <span className="neon-v text-7xl font-extrabold leading-none text-vroom-yellow md:text-8xl">V</span>
            <h2 className="mt-6 text-3xl font-bold leading-tight">
              Une appli,
              <br />
              deux <span className="text-vroom-yellow">usages.</span>
            </h2>
            <div className="mx-auto mt-6 h-[2px] w-14 bg-vroom-yellow" />
            <p className="mt-6 text-lg text-zinc-400">
              Vous êtes
              <br />
              automobiliste ou pro ?
            </p>
          </div>
        </div>
        <SolutionCard
          src={IMG.cartePros}
          alt="Dépanneur partenaire Vroom avec sa tablette devant sa dépanneuse"
          icon={IconWrench}
          title={
            <>
              Mécaniciens &amp;
              <br />
              dépanneurs
            </>
          }
          subtitle="Envie de nouveaux clients ?"
          text={<>Recevez des demandes près de chez vous et envoyez vos devis avec Vroom Pro.</>}
          cta="Découvrir Vroom Pro"
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


/* ---------------------------- COMMENT ÇA MARCHE ---------------------------- */

const STEPS = [
  {
    n: "1",
    icon: IconPhone,
    title: "Décrivez votre problème",
    text: "Quelques questions guidées dans l'app pour identifier la panne. Votre position est ajoutée automatiquement.",
  },
  {
    n: "2",
    icon: IconEuro,
    title: "Recevez des devis",
    text: "Les pros vérifiés autour de vous proposent leur prix. Vous comparez notes et tarifs.",
  },
  {
    n: "3",
    icon: IconCard,
    title: "Choisissez et payez dans l'app",
    text: "Paiement sécurisé par carte. Vous suivez l'arrivée du pro en temps réel et pouvez lui écrire.",
  },
  {
    n: "4",
    icon: IconCar,
    title: "Vous reprenez la route",
    text: "Le pro intervient, vous le notez. Le prix payé est celui du devis accepté.",
  },
];

function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="scroll-mt-24 py-10 md:py-14">
      <div className="container-site">
        <h2 className="h2 text-center">Comment ça marche ?</h2>
        <p className="lead mx-auto mt-3 max-w-xl text-center">De la panne à l&apos;intervention, tout se passe dans l&apos;application.</p>
        <div className="mt-8 grid gap-8 rounded-3xl border border-white/10 bg-vroom-card/60 p-7 sm:grid-cols-2 md:p-10 lg:grid-cols-4 lg:gap-4">
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
                <span aria-hidden className="absolute right-[-1.1rem] top-7 hidden w-8 items-center text-vroom-yellow lg:flex">
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
  { icon: IconBolt, title: "Rapidité", text: "Votre demande part immédiatement aux pros disponibles autour de vous." },
  { icon: IconEuro, title: "Transparence", text: "Le prix est dans le devis. Vous l'acceptez avant l'intervention." },
  { icon: IconShield, title: "Confiance", text: "Des pros validés par l'équipe Vroom et notés par les clients." },
  { icon: IconPin, title: "Liberté", text: "Vous choisissez le pro et le devis qui vous conviennent." },
  { icon: IconWrench, title: "Simplicité", text: "Demande, paiement, suivi, messages : tout est dans l'app." },
];

function Differentiators() {
  return (
    <section className="section-pad">
      <div className="container-site">
        <h2 className="h2 text-center">Pourquoi choisir Vroom ?</h2>
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
  { icon: IconBattery, label: "Batterie", text: "Démarrage, remplacement" },
  { icon: IconTire, label: "Crevaison", text: "Réparation, roue de secours" },
  { icon: IconFuel, label: "Carburant", text: "Panne sèche, erreur de carburant" },
  { icon: IconGauge, label: "Diagnostic", text: "Voyant allumé, bruit suspect" },
  { icon: IconKey, label: "Ouverture véhicule", text: "Clés perdues ou enfermées" },
  { icon: IconTow, label: "Remorquage", text: "Jusqu'au garage de votre choix" },
  { icon: IconWrench, label: "Entretien à domicile", text: "Vidange, freins, révision" },
  { icon: IconClipboard, label: "Contrôle avant départ", text: "Avant un long trajet" },
];

function Services() {
  return (
    <section id="services" className="section-pad scroll-mt-24 border-t border-white/5">
      <div className="container-site">
        <h2 className="h2 text-center">Pour quoi faire appel à Vroom ?</h2>
        <p className="lead mx-auto mt-3 max-w-xl text-center">En urgence sur le bord de la route, ou sur rendez-vous chez vous.</p>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {SERVICES.map((s) => (
            <div key={s.label} className="card-hover flex flex-col items-center gap-3 p-6 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-vroom-yellow/10 text-vroom-yellow">
                <s.icon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-sm font-bold">{s.label}</span>
                <span className="mt-1 block text-xs text-zinc-400">{s.text}</span>
              </span>
            </div>
          ))}
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
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-vroom-yellow">Où est disponible Vroom ?</span>
            <h2 className="h2 mt-4 text-balance">Nîmes et Alès aujourd&apos;hui. Toute la France demain.</h2>
            <p className="lead mt-6">
              Vroom fonctionne à <strong className="font-semibold text-white">Nîmes</strong>,{" "}
              <strong className="font-semibold text-white">Alès</strong> et dans un rayon d&apos;environ 25 km autour.
              L&apos;application vous indique tout de suite si votre position est couverte.
            </p>
            <p className="lead mt-4">
              Notre objectif : rendre l&apos;assistance automobile aussi simple qu&apos;une course VTC, partout en France.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- FAQ ----------------------------------- */

function HomeFaq() {
  return (
    <section id="faq" className="scroll-mt-24 py-10 md:py-14">
      <div className="container-site grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-vroom-yellow">Questions fréquentes</span>
          <h2 className="h2 mt-4 text-balance">Tout ce qu&apos;il faut savoir avant votre première demande.</h2>
          <p className="lead mt-5">Une autre question ? Notre équipe vous répond.</p>
          <Link href="/contact" className="btn-outline mt-6">
            Nous contacter
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <Faq />
      </div>
    </section>
  );
}

/* ----------------------------------- CTA ----------------------------------- */


/* ------------------------------ TÉLÉCHARGER ------------------------------- */

function Download() {
  return (
    <section id="telecharger" className="section-pad scroll-mt-24 border-t border-white/5">
      <div className="container-site">
      <div className="grid items-center gap-12 rounded-3xl border border-white/10 bg-vroom-card p-8 md:p-14 lg:grid-cols-[1fr_auto]">
        <div>
          <span className="badge-label">L&apos;application</span>
          <h2 className="h2 mt-5 text-balance">
            Téléchargez Vroom <span className="text-vroom-yellow">avant la panne.</span>
          </h2>
          <p className="lead mt-5 max-w-lg">
            Créez votre compte et ajoutez votre véhicule en 2 minutes : le jour où vous en avez besoin,
            votre demande part en quelques clics.
          </p>
          <StoreBadges className="mt-7" />
          <p className="mt-6 text-sm text-zinc-400">
            Vous êtes mécanicien ou dépanneur ?{" "}
            <Link href="/pro" className="font-semibold text-vroom-yellow hover:underline">
              Découvrez Vroom Pro →
            </Link>
          </p>
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
      <DualSolutions />
      <HowItWorks />
      <Services />
      <Why />
      <Differentiators />
      <Freedom />
      <Roadmap />
      <HomeFaq />
      <Download />
    </>
  );
}
