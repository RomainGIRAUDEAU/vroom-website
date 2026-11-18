import React from "react";

// Carte de France stylisée (silhouette simplifiée) avec réseau de pros et pins jaunes.
const PINS: { x: number; y: number; big?: boolean }[] = [
  { x: 250, y: 120, big: true }, // Nord
  { x: 180, y: 210 }, // Ouest
  { x: 320, y: 190 }, // Paris
  { x: 260, y: 300 }, // Centre
  { x: 380, y: 280, big: true }, // Est
  { x: 200, y: 380 }, // Sud-Ouest
  { x: 300, y: 420, big: true }, // Sud
  { x: 390, y: 390 }, // Sud-Est
];

const LINKS: [number, number][] = [
  [0, 2], [1, 2], [2, 3], [3, 4], [3, 5], [4, 6], [5, 6], [4, 7], [2, 4], [1, 3],
];

export default function FranceMap({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 520" className={className} role="img" aria-label="Carte de France du réseau Vroom">
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD60A" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FFD60A" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* silhouette France (approximation hexagonale) */}
      <path
        d="M250 60 L330 90 L360 160 L400 210 L385 300 L340 360 L330 440 L280 470 L230 430 L180 400 L150 320 L120 260 L160 200 L170 130 L220 80 Z"
        fill="#141414"
        stroke="rgba(255,214,10,0.35)"
        strokeWidth="1.5"
      />
      {/* réseau */}
      {LINKS.map(([a, b], i) => (
        <line
          key={i}
          x1={PINS[a].x}
          y1={PINS[a].y}
          x2={PINS[b].x}
          y2={PINS[b].y}
          stroke="rgba(255,214,10,0.25)"
          strokeWidth="1"
          strokeDasharray="3 4"
        />
      ))}
      {PINS.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r={p.big ? 16 : 10} fill="url(#glow)" />
          <path
            d={p.big
              ? `M${p.x} ${p.y - 12} c-4.5 0 -8 3.6 -8 8 c0 6 8 12 8 12 s8 -6 8 -12 c0 -4.4 -3.5 -8 -8 -8z`
              : `M${p.x} ${p.y - 8} c-3 0 -5.5 2.4 -5.5 5.4 c0 4 5.5 8 5.5 8 s5.5 -4 5.5 -8 c0 -3 -2.5 -5.4 -5.5 -5.4z`}
            fill="#FFD60A"
          />
          <circle cx={p.x} cy={(p.y - (p.big ? 4 : 2.6))} r={p.big ? 3 : 2} fill="#050505" />
        </g>
      ))}
    </svg>
  );
}
