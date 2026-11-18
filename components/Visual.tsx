import React from "react";

/**
 * Visuel de section : illustration SVG générée en local (public/images,
 * scripts/generate-visuals.mjs) — déjà dans la palette noir & jaune Vroom,
 * aucun traitement d'image requis.
 */
export default function Visual({
  src,
  alt,
  className = "",
  imgClassName = "",
  children,
  gradient = "from-black/80 via-black/20 to-black/30",
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
  children?: React.ReactNode;
  gradient?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${gradient}`} aria-hidden />
      {children}
    </div>
  );
}
