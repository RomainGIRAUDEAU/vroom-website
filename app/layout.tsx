import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vroom — L'assistance auto nouvelle génération",
    template: "%s | Vroom",
  },
  description:
    "Vroom connecte les automobilistes à des professionnels de l'assistance automobile proches : batterie, crevaison, remorquage, diagnostic. Et aide les mécaniciens et dépanneurs à développer leur activité avec Vroom Pro.",
  keywords: [
    "Vroom",
    "assistance automobile",
    "dépannage auto",
    "remorquage",
    "dépanneuse",
    "mécanicien mobile",
    "application dépannage",
    "Sophia Antipolis",
  ],
  openGraph: {
    title: "Vroom — L'assistance auto nouvelle génération",
    description:
      "Une panne ne devrait jamais être un moment de solitude. Trouvez un professionnel proche en quelques clics.",
    type: "website",
    locale: "fr_FR",
    siteName: "Vroom",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
