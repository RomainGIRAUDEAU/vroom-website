import type { Metadata } from "next";
import Link from "next/link";
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
    <section className="relative overflow-hidden">
      <div className="container-site grid items-center gap-12 pb-16 pt-14 md:pt-20 lg:grid-cols-2 lg:pb-24">
        <div>
          <span className="badge-label">Contactez-nous</span>
          <h1 className="h2 mt-6 text-balance !text-4xl md:!text-[3.4rem]">
            Une question ?
            <br />
            <span className="text-vroom-yellow">Nous sommes là pour vous.</span>
          </h1>
          <p className="lead mt-6 max-w-lg">
            Notre équipe vous répond rapidement et vous accompagne dans toutes vos demandes.
          </p>
          <div className="mt-8 grid max-w-md gap-3 sm:grid-cols-2">
            <Link href="#formulaire" className="card-hover flex items-center gap-3 p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-vroom-yellow/10 text-vroom-yellow">
                <IconUser className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-bold">Je suis un particulier</span>
                <span className="block text-xs text-zinc-400">Besoin d'aide ou d'assistance</span>
              </span>
            </Link>
            <Link href="/pro" className="card-hover flex items-center gap-3 p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-vroom-yellow/10 text-vroom-yellow">
                <IconWrench className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-bold">Je suis un professionnel</span>
                <span className="block text-xs text-zinc-400">Mécanicien ou remorqueur partenaire</span>
              </span>
            </Link>
          </div>
        </div>
        <div className="relative flex h-[340px] items-center justify-center overflow-hidden rounded-3xl border border-vroom-yellow/25 bg-gradient-to-b from-vroom-card2 to-vroom-black md:h-[420px]">
          {/* visuel néon V */}
          <span className="neon-v select-none text-[10rem] font-extrabold leading-none text-vroom-yellow md:text-[13rem]">V</span>
          <div className="absolute bottom-5 right-5 flex items-start gap-3 rounded-xl border border-white/10 bg-black/70 p-4 backdrop-blur-md">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-vroom-yellow/15 text-vroom-yellow">
              <IconClock className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[11px] font-semibold text-zinc-400">Réponse moyenne</p>
              <p className="text-lg font-extrabold text-white">15 min</p>
              <p className="text-[11px] text-zinc-500">Nous nous engageons à vous répondre rapidement.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ MOYENS DE CONTACT -------------------------- */

const CONTACTS = [
  { icon: IconPhone, title: "Téléphone", lines: ["04 11 93 00 00", "Lun - Dim : 7h - 22h"] },
  { icon: IconMail, title: "Email", lines: ["support@vroompro.app", "Réponse sous 24h"] },
  { icon: IconChat, title: "Chat en direct", lines: ["Disponible dans l'app", "7j/7 - 7h à 22h"] },
  { icon: IconPin, title: "Adresse", lines: ["Vroom SAS", "123 Avenue de la Liberté", "30900 Nîmes, France"] },
];

function ContactWays() {
  return (
    <section className="section-pad border-t border-white/5">
      <div className="container-site">
        <h2 className="h2 text-center">Nos moyens de contact</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACTS.map((c) => (
            <div key={c.title} className="card-hover p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-vroom-yellow/10 text-vroom-yellow">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-[15px] font-extrabold">{c.title}</h3>
              {c.lines.map((l) => (
                <p key={l} className="mt-1 text-[13px] text-zinc-400">{l}</p>
              ))}
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
      <div className="container-site grid gap-12 lg:grid-cols-2">
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
    <section className="section-pad border-t border-white/5">
      <div className="container-site grid items-center gap-10 rounded-3xl border border-white/10 bg-vroom-card p-8 md:p-12 lg:grid-cols-[auto_1fr_auto]">
        <PhoneMockup className="hidden lg:block [&>div]:w-[200px]" />
        <div>
          <span className="badge-label">Besoin d&apos;une assistance immédiate ?</span>
          <p className="mt-4 text-lg font-extrabold md:text-xl">
            Ouvrez l&apos;application Vroom et trouvez un professionnel disponible en quelques clics.
          </p>
        </div>
        <StoreBadges className="lg:justify-end" />
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
