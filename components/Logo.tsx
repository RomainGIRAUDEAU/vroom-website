import Link from "next/link";

export default function Logo({ withPro = false, className = "" }: { withPro?: boolean; className?: string }) {
  return (
    <Link href="/" className={`flex items-baseline gap-1 select-none ${className}`} aria-label="Vroom - accueil">
      <span className="text-[26px] font-extrabold tracking-tight leading-none">
        <span className="text-white">VR</span>
        <span className="text-vroom-yellow">OO</span>
        <span className="text-white">M</span>
      </span>
      {withPro && (
        <span className="text-[13px] font-extrabold tracking-[0.18em] text-vroom-yellow">PRO</span>
      )}
    </Link>
  );
}
