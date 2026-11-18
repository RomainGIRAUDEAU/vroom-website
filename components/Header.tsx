"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { IconClose, IconDownload, IconMenu } from "./Icons";

const NAV = [
  { label: "Particuliers", href: "/" },
  { label: "Mécaniciens / Pro", href: "/pro" },
  { label: "Entreprises", href: "/entreprises" },
  { label: "Comment ça marche", href: "/#comment-ca-marche" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-vroom-black/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="container-site flex h-[72px] items-center justify-between gap-6">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${isActive(item.href) ? "nav-link-active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/#telecharger" className="btn-yellow hidden !px-5 !py-2.5 sm:inline-flex">
            <IconDownload className="h-4 w-4" />
            Télécharger l&apos;app
          </Link>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Ouvrir le menu"
          >
            {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-vroom-black/95 backdrop-blur-xl lg:hidden">
          <nav className="container-site flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link rounded-lg px-3 py-2.5 ${isActive(item.href) ? "nav-link-active bg-white/5" : ""}`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/#telecharger" className="btn-yellow mt-2 w-full">
              <IconDownload className="h-4 w-4" />
              Télécharger l&apos;app
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
