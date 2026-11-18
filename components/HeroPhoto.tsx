import React from "react";

/**
 * Photo plein cadre des heros (comme sur les maquettes) : collée à droite,
 * fondue dans le noir côté texte (gauche) et en bas. Sur mobile elle passe
 * au-dessus du texte.
 */
export default function HeroPhoto({
  src,
  alt,
  position = "center",
  children,
}: {
  src: string;
  alt: string;
  position?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative h-[300px] w-full sm:h-[380px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[60%]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="eager"
        fetchPriority="high"
        style={{ objectPosition: position }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-vroom-black via-transparent via-30% to-transparent" />
      <div aria-hidden className="absolute inset-0 hidden bg-gradient-to-r from-vroom-black via-vroom-black/10 via-35% to-transparent lg:block" />
      {children}
    </div>
  );
}
