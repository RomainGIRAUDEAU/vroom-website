import Link from "next/link";

/** Logo VROOM : les deux « O » sont des anneaux jaunes entrelacés (cf. maquettes). */
export default function Logo({ withPro = false, className = "" }: { withPro?: boolean; className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 select-none ${className}`} aria-label="Vroom - accueil">
      <span className="flex items-center text-[28px] font-extrabold leading-none tracking-tight text-white">
        VR
        <span aria-hidden className="mx-[1px] inline-flex items-center">
          <span className="inline-block h-[0.74em] w-[0.74em] rounded-full border-[0.14em] border-vroom-yellow" />
          <span className="-ml-[0.2em] inline-block h-[0.74em] w-[0.74em] rounded-full border-[0.14em] border-vroom-yellow" />
        </span>
        M
      </span>
      {withPro && (
        <span className="text-[28px] font-extrabold leading-none tracking-tight text-vroom-yellow">PRO</span>
      )}
    </Link>
  );
}
