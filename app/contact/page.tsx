import type { Metadata } from "next";
import Link from "next/link";
import HeroPhoto from "@/components/HeroPhoto";
import { IMG } from "@/lib/img";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import StoreBadges from "@/components/StoreBadges";
import PhoneMockup from "@/components/PhoneMockup";
import {
  IconArrowRight,
  IconChat,
  IconClock,
  IconMail,
  IconPhone,
  IconPin,
  IconUser,
  IconWrench,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact — Une question ? Nous sommes là pour vous",
  description:
    "Contactez l'équipe Vroom : téléphone, email, chat en direct. Réponse moyenne en 15 minutes, 7j/7.",
};

/* ---------------------------------- HERO ---------------------------------- */

function ContactHero() {
  return (
    <section className="relative overflow-hidden lg:min-h-[600px]">
      <HeroPhoto
        src={IMG.heroContact}
        alt="Conseillère du support Vroom avec son casque, souriante, devant un V néon"
        position="40% center"
      >
        <div className="absolute bottom-6 right-4 hidden w-[220px] rounded-2xl border border-white/10 bg-black/75 p-5 backdrop-blur-md md:block lg:bottom-14 lg:right-[max(1.25rem,calc((100vw-1200px)/2+2rem))]">
          <div className="flex items-start gap-3">
            <IconClock className="h-8 w-8 shrink-0 text-vroom-yellow" />
            <div>
              <p className="text-xs font-semibold text-zinc-200">Réponse moyenne</p>
              <p className="mt-1 text-2xl font-extrabold">15 min</p>
            </div>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-zinc-400">Nous nous engageons à vous répondre rapidement.</p>
        </div>
      </HeroPhoto>
      <div className="container-site relative -mt-12 pb-16 lg:mt-0 lg:flex lg:min-h-[600px] lg:items-center lg:pb-10 lg:pt-24">
        <div className="max-w-xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-vroom-yellow">Contactez-nous</span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-[3.4rem]">
            Une question ?
            <br />
            <span className="text-vroom-yellow">Nous sommes là</span>
            <br />
            pour vous.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-300 md:text-lg">
            Notre équipe vous répond rapidement et vous accompagne dans toutes vos demandes.
          </p>
          <div className="mt-8 grid max-w-[36rem] gap-3 sm:grid-cols-2">
            <Link href="#formulaire" className="card-hover flex items-center gap-3 bg-black/60 p-4 backdrop-blur">
              <IconUser className="h-7 w-7 shrink-0 text-vroom-yellow" />
              <span>
                <span className="block text-sm font-bold">Je suis un particulier</span>
                <span className="block text-[11px] text-zinc-400">Besoin d&apos;aide ou d&apos;assistance</span>
              </span>
            </Link>
            <Link href="/pro" className="card-hover flex items-center gap-3 bg-black/60 p-4 backdrop-blur">
              <IconWrench className="h-7 w-7 shrink-0 text-vroom-yellow" />
              <span>
                <span className="block text-sm font-bold">Je suis un professionnel</span>
                <span className="block text-[11px] text-zinc-400">Mécanicien ou remorqueur partenaire</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ MOYENS DE CONTACT -------------------------- */

const CONTACTS = [
  { icon: IconPhone, title: "Téléphone", lines: ["04 11 93 00 00", "Lun - Dim : 7h - 22h"] },
  { icon: IconMail, title: "Email", lines: ["contact@vroompro.app", "Réponse sous 24h"] },
  { icon: IconChat, title: "Chat en direct", lines: ["Disponible dans l'app", "7j/7 - 7h à 22h"] },
  { icon: IconPin, title: "Adresse", lines: ["Vroom SAS", "123 Avenue de la Liberté", "30900 Nîmes, France"] },
];

function ContactWays() {
  return (
    <section className="pb-12 md:pb-16">
      <div className="container-site">
        <h2 className="text-center text-2xl font-bold">Nos moyens de contact</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACTS.map((c) => (
            <div key={c.title} className="card-hover flex items-start gap-4 p-6">
              <c.icon className="h-8 w-8 shrink-0 text-vroom-yellow" />
              <div>
                <h3 className="font-bold">{c.title}</h3>
                {c.lines.map((l, i) => (
                  <p key={l} className={`mt-1 text-[13px] ${i === 0 ? "text-zinc-200" : "text-zinc-400"}`}>{l}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ FAQ + FORMULAIRE --------------------------- */

function FaqAndForm() {
  return (
    <section id="faq" className="section-pad scroll-mt-24 border-t border-white/5">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_auto_1.15fr]">
        <div>
          <h2 className="h2">Foire aux questions</h2>
          <div className="mt-8">
            <Faq />
          </div>
          <Link
            href="#faq"
            className="btn-ghost-dark mt-6 w-full sm:w-auto"
          >
            <IconChat className="h-4 w-4" />
            Voir toutes les questions fréquentes
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <span aria-hidden className="hidden w-px bg-white/10 lg:block" />
        <div id="formulaire" className="scroll-mt-24">
          <h2 className="h2">Envoyez-nous un message</h2>
          <p className="lead mt-4">Remplissez le formulaire, nous vous répondrons dans les plus brefs délais.</p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- CTA ----------------------------------- */

function AppCta() {
  return (
    <section className="py-12 md:py-16">
      <div className="container-site">
        <div className="relative grid items-center gap-8 overflow-hidden rounded-3xl border border-white/10 bg-vroom-card px-8 pt-8 md:px-12 lg:grid-cols-[220px_1fr_auto] lg:pt-0">
          <div className="hidden h-[190px] self-end overflow-hidden lg:block">
            <PhoneMockup className="mt-6 origin-top -rotate-12 scale-[0.72]" />
          </div>
          <div className="lg:py-10">
            <h2 className="text-2xl font-bold md:text-3xl">Besoin d&apos;une assistance immédiate ?</h2>
            <p className="mt-3 max-w-md text-zinc-300">
              Ouvrez l&apos;application Vroom et trouvez un professionnel disponible en quelques clics.
            </p>
          </div>
          <StoreBadges className="pb-8 lg:justify-end lg:pb-0" />
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactWays />
      <FaqAndForm />
      <AppCta />
    </>
  );
}
