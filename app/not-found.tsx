import Link from "next/link";
import { IconArrowRight } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="container-site flex flex-col items-center py-32 text-center">
      <span className="neon-v text-8xl font-extrabold text-vroom-yellow">404</span>
      <h1 className="h2 mt-6">Cette page est en panne.</h1>
      <p className="lead mt-4 max-w-md">
        Pas d&apos;inquiétude, notre dépanneuse arrive : retournez à l&apos;accueil.
      </p>
      <Link href="/" className="btn-yellow mt-8">
        Retour à l&apos;accueil
        <IconArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
