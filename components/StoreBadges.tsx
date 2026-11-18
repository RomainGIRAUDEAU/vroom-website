import { IconApple, IconPlay } from "./Icons";

export default function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a
        href="#telecharger"
        className="flex items-center gap-3 rounded-xl border border-white/15 bg-black px-4 py-2.5 transition-colors hover:border-vroom-yellow/60"
      >
        <IconApple className="h-6 w-6 text-white" />
        <span className="text-left leading-tight">
          <span className="block text-[9px] uppercase tracking-wide text-zinc-400">Télécharger dans</span>
          <span className="block text-sm font-bold text-white">l&apos;App Store</span>
        </span>
      </a>
      <a
        href="#telecharger"
        className="flex items-center gap-3 rounded-xl border border-white/15 bg-black px-4 py-2.5 transition-colors hover:border-vroom-yellow/60"
      >
        <IconPlay className="h-5 w-5 text-vroom-yellow" />
        <span className="text-left leading-tight">
          <span className="block text-[9px] uppercase tracking-wide text-zinc-400">Disponible sur</span>
          <span className="block text-sm font-bold text-white">Google Play</span>
        </span>
      </a>
    </div>
  );
}
