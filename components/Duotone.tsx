import Image from "next/image";
import React from "react";

/**
 * Image "duotone" Vroom : N&B + calque jaune en multiply.
 * Uniformise toutes les photos (jour/nuit, couleurs) dans l'identité noir & jaune du site.
 */
export default function Duotone({
  src,
  alt,
  className = "",
  imgClassName = "",
  priority = false,
  sizes,
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
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`duotone-img object-cover ${imgClassName}`}
      />
      <div className="absolute inset-0 bg-vroom-yellow mix-blend-multiply" aria-hidden />
      <div className={`absolute inset-0 bg-gradient-to-t ${gradient}`} aria-hidden />
      {children}
    </div>
  );
}
