import React from "react";

/**
 * Photo de section (public/images/photos, extraites des maquettes client)
 * avec un dégradé optionnel pour fondre l'image dans le fond noir.
 */
export default function Visual({
  src,
  alt,
  className = "",
  imgClassName = "",
  children,
  priority = false,
  position = "center",
  gradient = "from-black/80 via-black/20 to-black/30",
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  position?: string;
  children?: React.ReactNode;
  gradient?: string | null;
}) {
  return (
    <div className={`${/(^|\s)(absolute|fixed)(\s|$)/.test(className) ? "" : "relative"} overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        style={{ objectPosition: position }}
        className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
      />
      {gradient && <div className={`absolute inset-0 bg-gradient-to-t ${gradient}`} aria-hidden />}
      {children}
    </div>
  );
}
