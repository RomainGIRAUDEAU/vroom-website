import { IMG } from "@/lib/img";
import Link from "next/link";
import Duotone from "@/components/Duotone";
import FranceMap from "@/components/FranceMap";
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
    <section className="bg-grid-glow relative overflow-hidden">
      {/* filigrane V */}
      <span
        aria-hidden
        className="neon-v pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none text-[26rem] font-extrabold leading-none text-vroom-yellow/10 lg:block"
      >
        V
      </span>
      <div className="container-site relative grid items-center gap-10 pb-16 pt-14 md:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pb-24">
        <div>
          <h1 className="h2 text-balance !text-4xl md:!text-6xl">
            Reprenez
            <br />
            <span className="text-vroom-yellow">le contrôle.</span>
          </h1>
          <p className="lead mt-6 max-w-lg">
            Une panne, une batterie déchargée, un pneu crevé ou un simple besoin d&apos;entretien.
            Vroom vous connecte rapidement à un professionnel proche de vous.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#services" className="btn-yellow">
              Découvrir Vroom
              <IconArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#telecharger" className="btn-outline">
              Télécharger l&apos;application
            </Link>
          </div>
          <div className="mt-9 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-vroom-black bg-vroom-card2 text-vroom-yellow"
                >
                  <IconUser className="h-4 w-4" />
                </span>
              ))}
            </div>
            <div className="text-sm">
              <p className="font-bold text-white">+2500 automobilistes déjà dépannés</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-zinc-400">
                Note 4,8/5 sur l&apos;app
                <span className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <IconStar key={i} className="h-3.5 w-3.5 text-vroom-yellow" />
                  ))}
                </span>
              </p>
            </div>
          </div>
        </div>
        <Duotone
          src={IMG.heroHome}
          alt="Voiture sur une route de nuit, feux arrière allumés"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="h-[320px] rounded-3xl border border-vroom-yellow/25 shadow-card md:h-[440px]"
        >
          <div className="absolute bottom-5 left-5 rounded-xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-md">
            <p className="text-xs font-bold uppercase tracking-widest text-vroom-yellow">Assistance 7j/7</p>
            <p className="mt-1 text-sm text-zinc-300">Un pro intervient près de chez vous</p>
          </div>
        </Duotone>
      </div>
    </section>
  );
}

/* --------------------- DEUX SOLUTIONS (maquette hero) --------------------- */

function DualSolutions() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="container-site">
        <div className="mb-12 text-center">
          <span className="text-6xl font-extrabold text-vroom-yellow neon-v md:text-7xl">V</span>
          <h2 className="h2 mt-4">
            Deux solutions,
            <br />
            un même <span className="text-vroom-yellow">engagement.</span>
          </h2>
          <div className="mx-auto mt-5 h-[3px] w-16 rounded bg-vroom-yellow" />
          <p className="lead mt-5">L&apos;assistance auto nouvelle génération.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Particuliers */}
          <div className="card group relative flex min-h-[480px] flex-col justify-end overflow-hidden border-vroom-yellow/30 p-8">
            <Duotone
              src={IMG.cardParticuliers}
              alt="Rue de ville la nuit"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="absolute inset-0"
              imgClassName="opacity-60 transition-transform duration-700 group-hover:scale-105"
              gradient="from-black via-black/50 to-black/20"
            />
            <div className="relative">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-vroom-yellow/50 bg-black/50 text-vroom-yellow backdrop-blur">
                <IconUser className="h-6 w-6" />
              </span>
              <h3 className="mt-16 text-3xl font-extrabold">Particuliers</h3>
              <p className="mt-3 max-w-sm text-zinc-300">
                Besoin d&apos;aide maintenant ? Assistance rapide, transparente et proche de vous.
              </p>
              <Link href="#telecharger" className="btn-yellow mt-6 w-full sm:w-auto">
                Trouver une solution
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          {/* Pros */}
          <div className="card group relative flex min-h-[480px] flex-col justify-end overflow-hidden border-vroom-yellow/30 p-8">
            <Duotone
              src={IMG.cardPros}
              alt="Dépanneuse chargeant un véhicule"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="absolute inset-0"
              imgClassName="opacity-60 transition-transform duration-700 group-hover:scale-105"
              gradient="from-black via-black/50 to-black/20"
            />
            <div className="relative">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-vroom-yellow/50 bg-black/50 text-vroom-yellow backdrop-blur">
                <IconWrench className="h-6 w-6" />
              </span>
              <h3 className="mt-16 text-3xl font-extrabold">
                Mécaniciens /<br />
                Remorqueurs partenaires
              </h3>
              <p className="mt-3 max-w-sm text-zinc-300">
                Travaillez librement et développez votre activité.
              </p>
              <Link href="/pro" className="btn-yellow mt-6 w-full sm:w-auto">
                Rejoindre Vroom Pro
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ POURQUOI VROOM ----------------------------- */

function Why() {
  return (
    <section className="section-pad border-t border-white/5">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="badge-label">Pourquoi Vroom existe ?</span>
          <h2 className="h2 mt-5 text-balance">
            Parce qu&apos;une panne ne devrait jamais être un moment de{" "}
            <span className="text-vroom-yellow">solitude.</span>
          </h2>
          <p className="lead mt-6">
            Chaque jour, des milliers d&apos;automobilistes se retrouvent bloqués sans savoir qui appeler,
            combien cela va coûter ou combien de temps ils devront attendre.
          </p>
          <p className="lead mt-4">
            Vroom est né pour rendre l&apos;assistance automobile plus simple, plus rapide et plus humaine.
          </p>
        </div>
        <Duotone
          src={IMG.conducteurNuit}
          alt="Conducteur au volant de nuit, ville en arrière-plan"
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="h-[300px] rounded-3xl border border-white/10 md:h-[380px]"
          gradient="from-vroom-black/70 to-transparent"
        />
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
    <section className="section-pad">
      <div className="container-site">
        <h2 className="h2 text-center">Une plateforme. Deux communautés.</h2>
        <div className="relative mt-12 grid gap-6 lg:grid-cols-2">
          <div className="hidden lg:block" />
          <span className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-vroom-yellow/60 bg-vroom-black text-3xl font-extrabold text-vroom-yellow shadow-yellow-glow lg:flex">
            V
          </span>
          <div className="card p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-vroom-yellow text-black">
              <IconUser className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-2xl font-extrabold">Particuliers</h3>
            <p className="mt-2 text-sm text-zinc-400">Trouvez rapidement un professionnel proche de vous.</p>
            <div className="mt-5 grid grid-cols-2 gap-2.5">
              {particulier.map((s) => (
                <span key={s.label} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-zinc-300">
                  <s.icon className="h-4 w-4 text-vroom-yellow" />
                  {s.label}
                </span>
              ))}
            </div>
            <Link href="#telecharger" className="btn-yellow mt-6 w-full">
              Je suis un particulier
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="card p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-vroom-yellow text-black">
              <IconWrench className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-2xl font-extrabold">Professionnels</h3>
            <p className="mt-2 text-sm text-zinc-400">Développez votre activité librement.</p>
            <div className="mt-5 grid grid-cols-2 gap-2.5">
              {pro.map((s) => (
                <span key={s.label} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-zinc-300">
                  <s.icon className="h-4 w-4 text-vroom-yellow" />
                  {s.label}
                </span>
              ))}
            </div>
            <Link href="/pro" className="btn-yellow mt-6 w-full">
              Je suis un professionnel
              <IconArrowRight className="h-4 w-4" />
            </Link>
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
    <section id="comment-ca-marche" className="section-pad scroll-mt-24 border-t border-white/5">
      <div className="container-site">
        <h2 className="h2 text-center">Comment ça fonctionne ?</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <div key={s.n} className="card-hover relative p-7">
              <span className="absolute right-6 top-6 flex h-7 w-7 items-center justify-center rounded-full bg-vroom-yellow text-xs font-extrabold text-black">
                {s.n}
              </span>
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-vroom-yellow/40 bg-vroom-yellow/10 text-vroom-yellow">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 pr-8 text-lg font-extrabold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.text}</p>
              {i < STEPS.length - 1 && (
                <span className="absolute right-[-1.4rem] top-1/2 hidden -translate-y-1/2 text-vroom-yellow md:block">
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
    <section className="section-pad border-t border-white/5">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2">
        <Duotone
          src={IMG.mainsMecano}
          alt="Mécanicien réparant un moteur"
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="order-2 h-[280px] rounded-3xl border border-white/10 md:h-[360px] lg:order-1"
          gradient="from-vroom-black/60 to-transparent"
        />
        <div className="order-1 lg:order-2">
          <span className="badge-label">La liberté de rouler</span>
          <h2 className="h2 mt-5 text-balance">
            Derrière chaque intervention, il y a plus qu&apos;une{" "}
            <span className="text-vroom-yellow">voiture.</span>
          </h2>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {MOMENTS.map((m) => (
              <span key={m.label} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] text-zinc-300">
                <m.icon className="h-4 w-4 text-vroom-yellow" />
                {m.label}
              </span>
            ))}
          </div>
          <p className="lead mt-6">Vroom existe pour que ces moments continuent.</p>
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
    <section className="section-pad border-t border-white/5">
      <div className="container-site grid items-center gap-10 rounded-3xl border border-white/10 bg-vroom-card p-8 md:p-12 lg:grid-cols-2">
        <div>
          <span className="badge-label">Où va Vroom ?</span>
          <h2 className="h2 mt-5 text-balance">
            Construire le futur de l&apos;assistance{" "}
            <span className="text-vroom-yellow">automobile.</span>
          </h2>
          <p className="lead mt-6">
            Nous construisons un réseau national de professionnels capables d&apos;intervenir rapidement partout en France.
          </p>
          <p className="lead mt-4">
            Notre objectif est simple : rendre l&apos;assistance automobile aussi accessible qu&apos;une course VTC.
          </p>
        </div>
        <FranceMap className="mx-auto w-full max-w-md" />
      </div>
    </section>
  );
}

/* ----------------------------------- CTA ----------------------------------- */

function FinalCta() {
  return (
    <section className="section-pad">
      <div className="container-site rounded-3xl border border-vroom-yellow/25 bg-gradient-to-b from-vroom-card2 to-vroom-card p-10 text-center md:p-16">
        <h2 className="h2 text-balance">
          Besoin d&apos;aide ou envie de rejoindre{" "}
          <span className="text-vroom-yellow">l&apos;aventure ?</span>
        </h2>
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
    </section>
  );
}

/* ------------------------------ TÉLÉCHARGER ------------------------------- */

function Download() {
  return (
    <section id="telecharger" className="section-pad scroll-mt-24 border-t border-white/5">
      <div className="container-site grid items-center gap-12 rounded-3xl border border-white/10 bg-vroom-card p-8 md:p-14 lg:grid-cols-[1fr_auto]">
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
    </section>
  );
}

/* ---------------------------------- PAGE ----------------------------------- */

export default function HomePage() {
  return (
    <>
      <Hero />
      <DualSolutions />
      <Why />
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
