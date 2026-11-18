import Link from "next/link";
import Logo from "./Logo";
import { IconFacebook, IconInstagram, IconLinkedin } from "./Icons";

const COLS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Particuliers",
    links: [
      { label: "Nos services", href: "/#services" },
      { label: "Comment ça marche", href: "/#comment-ca-marche" },
      { label: "Questions fréquentes", href: "/contact#faq" },
      { label: "Télécharger l'app", href: "/#telecharger" },
    ],
  },
  {
    title: "Mécaniciens / Pro",
    links: [
      { label: "Devenir partenaire", href: "/pro" },
      { label: "Avantages", href: "/pro#avantages" },
      { label: "Offre Pro", href: "/pro#offre" },
      { label: "FAQ Pro", href: "/contact#faq" },
    ],
  },
  {
    title: "Entreprises",
    links: [
      { label: "Solutions", href: "/entreprises" },
      { label: "Flottes", href: "/entreprises" },
      { label: "Partenariats", href: "/entreprises" },
    ],
  },
  {
    title: "À propos",
    links: [
      { label: "Qui sommes-nous ?", href: "/a-propos" },
      { label: "Nos engagements", href: "/a-propos#engagements" },
      { label: "Recrutement", href: "/contact" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Nous contacter", href: "/contact" },
      { label: "Centre d'aide", href: "/contact#faq" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070707]">
      <div className="container-site grid gap-12 py-14 md:grid-cols-[1.2fr_2fr] md:py-16">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
            L&apos;assistance auto nouvelle génération.
          </p>
          <div className="mt-6 flex gap-3">
            {[IconFacebook, IconInstagram, IconLinkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Réseau social"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:border-vroom-yellow/60 hover:text-vroom-yellow"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-[13px] text-zinc-400 transition-colors hover:text-vroom-yellow">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-5 text-xs text-zinc-500 md:flex-row">
          <p>© {new Date().getFullYear()} Vroom SAS - Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/a-propos" className="transition-colors hover:text-zinc-300">Mentions légales</Link>
            <Link href="/a-propos" className="transition-colors hover:text-zinc-300">CGU</Link>
            <Link href="/a-propos" className="transition-colors hover:text-zinc-300">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
