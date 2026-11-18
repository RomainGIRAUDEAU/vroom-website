#!/usr/bin/env node
/**
 * Générateur des visuels du site Vroom.
 * Produit des illustrations SVG "nuit & jaune néon" dans public/images/ —
 * 100 % cohérentes entre elles (même palette, même style flat-illustration).
 *
 * Usage : node scripts/generate-visuals.mjs
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const OUT = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "images");
mkdirSync(OUT, { recursive: true });

const Y = "#FFD60A"; // jaune Vroom
const Y_DIM = "#8a7400";
const INK = "#050505";
const INK2 = "#0d0d10";
const SIL = "#141416"; // silhouettes
const SIL2 = "#1e1e22";
const PAPER = "#f2efe6";

/* ------------------------------ helpers ------------------------------ */

const blur = (id, std) => `<filter id="${id}" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="${std}"/></filter>`;

function defs() {
  return `<defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#08080c"/><stop offset="0.55" stop-color="#0d0d13"/><stop offset="1" stop-color="#131318"/>
    </linearGradient>
    <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#101014"/><stop offset="1" stop-color="#050506"/>
    </linearGradient>
    <radialGradient id="haloY" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="${Y}" stop-opacity="0.95"/><stop offset="0.35" stop-color="${Y}" stop-opacity="0.35"/><stop offset="1" stop-color="${Y}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="haloW" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#fff" stop-opacity="0.9"/><stop offset="0.4" stop-color="#fff" stop-opacity="0.25"/><stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="beam" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${Y}" stop-opacity="0.55"/><stop offset="1" stop-color="${Y}" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="beamW" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#fff" stop-opacity="0.5"/><stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="wet" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1a1a20"/><stop offset="1" stop-color="#060608"/>
    </linearGradient>
    ${blur("b6", 6)}${blur("b12", 12)}${blur("b20", 20)}${blur("b3", 3)}
  </defs>`;
}

const stars = (w, n, yMax) =>
  Array.from({ length: n }, (_, i) => {
    const x = (i * 977.3) % w, y = (i * 613.7) % yMax, r = 0.6 + ((i * 7) % 10) / 8;
    return `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${r.toFixed(1)}" fill="#cfd2e0" opacity="${(0.15 + ((i * 13) % 50) / 100).toFixed(2)}"/>`;
  }).join("");

const bokeh = (w, h, n, colors = ["#FFD60A", "#ffb84d", "#8a93b8", "#e8e6df"]) =>
  Array.from({ length: n }, (_, i) => {
    const x = (i * 811.7) % w, y = h * 0.15 + ((i * 431.3) % (h * 0.45)), r = 4 + ((i * 29) % 26);
    const c = colors[i % colors.length];
    return `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${r}" fill="${c}" opacity="0.16" filter="url(#b12)"/>`;
  }).join("");

const glow = (x, y, r, fill = "url(#haloY)") => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}"/>`;

/** route en perspective vers l'horizon */
function road(w, h, horizonY) {
  const cx = w / 2;
  const topW = w * 0.02, botW = w * 0.9;
  const pts = `${cx - topW / 2},${horizonY} ${cx + topW / 2},${horizonY} ${cx + botW / 2},${h} ${cx - botW / 2},${h}`;
  const line = (t0, t1) => {
    // lignes jaunes centrales en pointillés perspective
    let s = "";
    for (let i = 0; i < 7; i++) {
      const a = t0 + (t1 - t0) * (i / 7), b = t0 + (t1 - t0) * ((i + 0.55) / 7);
      const yA = horizonY + (h - horizonY) * a, yB = horizonY + (h - horizonY) * b;
      const wA = topW + (botW - topW) * a, wB = topW + (botW - topW) * b;
      s += `<line x1="${cx}" y1="${yA}" x2="${cx}" y2="${yB}" stroke="${Y}" stroke-width="${1 + 7 * b}" opacity="${0.25 + 0.6 * b}"/>`;
    }
    return s;
  };
  return `<polygon points="${pts}" fill="url(#wet)"/>${line(0, 1)}
    <line x1="${cx - topW / 2}" y1="${horizonY}" x2="${cx - botW / 2}" y2="${h}" stroke="#3a3a42" stroke-width="3"/>
    <line x1="${cx + topW / 2}" y1="${horizonY}" x2="${cx + botW / 2}" y2="${h}" stroke="#3a3a42" stroke-width="3"/>`;
}

/** reflet vertical flou sur sol mouillé */
const reflect = (x, y, w, h, color = Y, op = 0.25) =>
  `<rect x="${x - w / 2}" y="${y}" width="${w}" height="${h}" fill="${color}" opacity="${op}" filter="url(#b12)" rx="${w / 2}"/>`;

/** silhouette voiture de profil (capot fermé), origine = coin bas gauche de la voiture */
function car(x, y, s, body = SIL, flip = false) {
  const t = `translate(${x},${y}) scale(${flip ? -s : s},${s})`;
  return `<g transform="${t}">
    <path d="M0,0 L6,-16 C10,-30 26,-38 52,-40 L96,-42 C120,-43 138,-38 152,-28 L172,-16 C186,-10 196,-8 200,-2 L202,0 Z" fill="${body}"/>
    <path d="M40,-38 C48,-50 70,-56 92,-56 L120,-56 C138,-55 150,-48 158,-38 Z" fill="${SIL2}"/>
    <circle cx="48" cy="0" r="17" fill="#0a0a0c"/><circle cx="48" cy="0" r="8" fill="#2c2c33"/>
    <circle cx="158" cy="0" r="17" fill="#0a0a0c"/><circle cx="158" cy="0" r="8" fill="#2c2c33"/>
  </g>`;
}

/** dépanneuse de profil avec gyrophare */
function towTruck(x, y, s, flip = false) {
  const t = `translate(${x},${y}) scale(${flip ? -s : s},${s})`;
  return `<g transform="${t}">
    <path d="M0,0 L4,-22 L14,-52 L58,-56 L84,-56 L92,-40 L96,-22 L150,-22 L150,-6 L146,0 Z" fill="${SIL}"/>
    <path d="M16,-50 L54,-54 L78,-54 L84,-42 L88,-24 L16,-24 Z" fill="${SIL2}"/>
    <rect x="60" y="-66" width="16" height="10" rx="2" fill="${Y}"/>
    <circle cx="68" cy="-61" r="26" fill="url(#haloY)"/>
    <path d="M96,-22 L146,-22 L146,-10 L96,-10 Z" fill="#101013"/>
    <circle cx="34" cy="0" r="16" fill="#0a0a0c"/><circle cx="34" cy="0" r="7" fill="#2c2c33"/>
    <circle cx="118" cy="0" r="16" fill="#0a0a0c"/><circle cx="118" cy="0" r="7" fill="#2c2c33"/>
  </g>`;
}

/** personne debout, silhouette, origine = pieds */
function person(x, y, s, opts = {}) {
  const { head = SIL, body = SIL, arm = null } = opts;
  return `<g transform="translate(${x},${y}) scale(${s})">
    <circle cx="0" cy="-118" r="13" fill="${head}"/>
    <path d="M-14,-104 C-18,-80 -18,-56 -14,-34 L-16,0 L-5,0 L-2,-40 L2,-40 L5,0 L16,0 L14,-34 C18,-56 18,-80 14,-104 C8,-110 -8,-110 -14,-104 Z" fill="${body}"/>
    ${arm ?? ""}
  </g>`;
}

/** smartphone lumineux tenu en main */
const phone = (x, y, s, rot = 0) =>
  `<g transform="translate(${x},${y}) rotate(${rot}) scale(${s})">
    <rect x="-9" y="-16" width="18" height="32" rx="4" fill="#0c0c0f" stroke="#33333a" stroke-width="1.5"/>
    <rect x="-6.5" y="-12" width="13" height="22" rx="2" fill="${Y}" opacity="0.9"/>
    <circle cx="0" cy="-16" r="30" fill="url(#haloY)" opacity="0.5"/>
  </g>`;

/** V logo Vroom */
const vLogo = (x, y, s, fill = Y, op = 1) =>
  `<path transform="translate(${x},${y}) scale(${s})" d="M0,0 L22,64 L44,0 L33,0 L22,32 L11,0 Z" fill="${fill}" opacity="${op}"/>`;

function svg(w, h, inner, extraDefs = "") {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">${defs()}${extraDefs}<rect width="${w}" height="${h}" fill="url(#sky)"/>${inner}</svg>`;
}

const write = (name, content) => {
  writeFileSync(join(OUT, name), content);
  console.log("✔", name);
};

/* ------------------------------ scènes ------------------------------ */

// 1. Hero home : route de nuit, dépanneuse à droite, phares au loin
function heroHome() {
  const w = 1920, h = 1080, hy = 430;
  const inner = `
    ${stars(w, 90, hy - 40)}
    ${bokeh(w, h, 26)}
    <rect x="0" y="${hy}" width="${w}" height="${h - hy}" fill="url(#ground)"/>
    <rect x="0" y="${hy - 26}" width="${w}" height="30" fill="${Y}" opacity="0.10" filter="url(#b20)"/>
    ${road(w, h, hy)}
    ${glow(300, hy + 10, 60, "url(#haloW)")}
    ${glow(1620, hy + 6, 55, "url(#haloW)")}
    <polygon points="300,${hy} 340,${hy} 620,${h} 180,${h}" fill="url(#beamW)" opacity="0.5" filter="url(#b6)"/>
    <polygon points="1620,${hy} 1580,${hy} 1300,${h} 1740,${h}" fill="url(#beamW)" opacity="0.5" filter="url(#b6)"/>
    ${reflect(300, hy + 30, 26, 300, "#ffffff", 0.12)}
    ${reflect(1620, hy + 30, 26, 300, "#ffffff", 0.12)}
    ${towTruck(1080, 1010, 3.4)}
    ${glow(1080 + 68 * 3.4, 1010 - 61 * 3.4, 170)}
    ${reflect(1080 + 68 * 3.4, 1020, 56, 150, Y, 0.4)}
    ${car(120, 1010, 1.7)}
    <polygon points="322,${968} 340,${962} 420,${1010} 360,${1016}" fill="url(#beam)" opacity="0.7" filter="url(#b6)"/>
    ${reflect(330, 1020, 30, 90, Y, 0.3)}
    <rect x="0" y="${h - 60}" width="${w}" height="60" fill="${INK}" opacity="0.55" filter="url(#b6)"/>
  `;
  write("hero-home.svg", svg(w, h, inner));
}

// 2. Carte particuliers : voiture capot ouvert + automobiliste au téléphone, la nuit
function cardParticuliers() {
  const w = 1000, h = 1250, hy = 620;
  const inner = `
    ${stars(w, 60, hy - 60)}
    ${bokeh(w, h, 22)}
    <rect x="0" y="${hy}" width="${w}" height="${h - hy}" fill="url(#ground)"/>
    <line x1="0" y1="${hy}" x2="${w}" y2="${hy}" stroke="#26262e" stroke-width="3"/>
    ${glow(820, 300, 130, "url(#haloW)")}
    <rect x="812" y="180" width="16" height="${hy - 180}" fill="${SIL2}"/>
    <circle cx="820" cy="300" r="18" fill="#fff8dc"/>
    ${reflect(820, hy + 20, 30, 320, "#ffffff", 0.14)}
    ${car(90, 1000, 2.4)}
    <path d="M ${90 + 52 * 2.4} ${1000 - 42 * 2.4} L ${90 + 150 * 2.4} ${1000 - 130 * 2.4} L ${90 + 160 * 2.4} ${1000 - 110 * 2.4} L ${90 + 60 * 2.4} ${1000 - 38 * 2.4} Z" fill="${SIL2}"/>
    <polygon points="${90 + 205 * 2.4},${1000 - 8 * 2.4} ${90 + 260 * 2.4},${1000 - 10 * 2.4} ${90 + 330 * 2.4},${1000 + 40} ${90 + 240 * 2.4},${1000 + 40}" fill="url(#beam)" opacity="0.8" filter="url(#b6)"/>
    ${reflect(90 + 280 * 2.4, 1010, 40, 160, Y, 0.4)}
    ${glow(90 + 280 * 2.4, 990, 90)}
    ${person(760, 1120, 2.1, { arm: `<rect x="6" y="-92" width="12" height="46" rx="6" fill="${SIL}" transform="rotate(-38 6 -92)"/>` })}
    ${phone(806, 990, 1.5, -12)}
    ${reflect(760, 1130, 50, 90, Y, 0.12)}
    <rect x="0" y="${h - 80}" width="${w}" height="80" fill="${INK}" opacity="0.5" filter="url(#b6)"/>
  `;
  write("card-particuliers.svg", svg(w, h, inner));
}

// 3. Carte pros : dépanneuse + mécanicien avec tablette
function cardPros() {
  const w = 1000, h = 1250, hy = 640;
  const inner = `
    ${stars(w, 55, hy - 60)}
    ${bokeh(w, h, 20)}
    <rect x="0" y="${hy}" width="${w}" height="${h - hy}" fill="url(#ground)"/>
    <line x1="0" y1="${hy}" x2="${w}" y2="${hy}" stroke="#26262e" stroke-width="3"/>
    ${towTruck(60, 1050, 3.1)}
    ${glow(60 + 68 * 3.1, 1050 - 61 * 3.1, 150)}
    ${reflect(60 + 68 * 3.1, 1060, 46, 150, Y, 0.4)}
    <polygon points="${60 + 205 * 3.1},${1050 - 8 * 3.1} ${60 + 240 * 3.1},${1050 - 9 * 3.1} ${60 + 300 * 3.1},${1050 + 60} ${60 + 230 * 3.1},${1050 + 60}" fill="url(#beam)" opacity="0.7" filter="url(#b6)"/>
    ${person(790, 1140, 2.3, { arm: `<rect x="-20" y="-96" width="13" height="52" rx="6" fill="${SIL}" transform="rotate(30 -14 -96)"/>` })}
    <g transform="translate(742,1000) rotate(-8) scale(1.7)">
      <rect x="-16" y="-22" width="32" height="44" rx="4" fill="#0c0c0f" stroke="#3a3a42" stroke-width="2"/>
      <rect x="-12" y="-17" width="24" height="30" rx="2" fill="${Y}" opacity="0.92"/>
      <circle cx="0" cy="-22" r="34" fill="url(#haloY)" opacity="0.45"/>
    </g>
    ${reflect(790, 1150, 54, 90, Y, 0.14)}
    <rect x="0" y="${h - 80}" width="${w}" height="80" fill="${INK}" opacity="0.5" filter="url(#b6)"/>
  `;
  write("card-pros.svg", svg(w, h, inner));
}


/* ------- scène 4 : pro-hero (mécanicien casquette + dépanneuse) ------- */
function proHero() {
  const w = 1400, h = 1400, hy = 980;
  const inner = `
    ${stars(w, 70, hy - 80)}
    ${bokeh(w, h, 24)}
    <rect x="0" y="${hy}" width="${w}" height="${h - hy}" fill="url(#ground)"/>
    <line x1="0" y1="${hy}" x2="${w}" y2="${hy}" stroke="#26262e" stroke-width="4"/>
    ${towTruck(90, 1150, 4.0)}
    ${glow(90 + 68 * 4.0, 1150 - 61 * 4.0, 210)}
    ${reflect(90 + 68 * 4.0, 1160, 70, 200, Y, 0.4)}
    <polygon points="${90 + 205 * 4.0},${1150 - 8 * 4.0} ${90 + 250 * 4.0},${1150 - 10 * 4.0} ${90 + 330 * 4.0},${1150 + 80} ${90 + 235 * 4.0},${1150 + 80}" fill="url(#beam)" opacity="0.65" filter="url(#b12)"/>
    <line x1="1290" y1="180" x2="1290" y2="980" stroke="#2a2a31" stroke-width="8"/>
    <circle cx="1290" cy="180" r="22" fill="#fff8dc"/>
    ${glow(1290, 180, 130, "url(#haloW)")}
    ${reflect(1290, 990, 30, 260, "#ffffff", 0.12)}
    ${person(1030, 1300, 3.4, { arm: `<rect x="10" y="-150" width="20" height="80" rx="10" fill="${SIL}" transform="rotate(-42 10 -150)"/>` })}
    <path d="M ${1030 - 22 * 3.4} ${1300 - 131 * 3.4} A ${13 * 3.4} ${13 * 3.4} 0 0 1 ${1030 + 22 * 3.4} ${1300 - 131 * 3.4} L ${1030 + 34 * 3.4} ${1300 - 124 * 3.4} L ${1030 - 34 * 3.4} ${1300 - 124 * 3.4} Z" fill="${SIL2}"/>
    ${phone(1150, 1160, 2.2, -14)}
    ${reflect(1030, 1310, 80, 120, Y, 0.15)}
    <rect x="0" y="${h - 90}" width="${w}" height="90" fill="${INK}" opacity="0.5" filter="url(#b6)"/>
  `;
  write("pro-hero.svg", svg(w, h, inner));
}

function mecanicien() {
  const w = 1200, h = 1800, hy = 1240;
  const inner = `
    <rect width="${w}" height="${h}" fill="#0a0a0e"/>
    <rect x="0" y="${hy}" width="${w}" height="${h - hy}" fill="url(#ground)"/>
    <line x1="120" y1="60" x2="120" y2="300" stroke="#2a2a31" stroke-width="6"/>
    <circle cx="120" cy="330" r="34" fill="${Y}"/>
    ${glow(120, 330, 190)}
    <polygon points="120,360 40,${hy + 60} 200,${hy + 60}" fill="url(#beam)" opacity="0.5" filter="url(#b20)"/>
    ${reflect(120, hy + 70, 60, 240, Y, 0.3)}
    <rect x="700" y="120" width="380" height="500" rx="12" fill="#0e0e12" stroke="#1f1f26" stroke-width="3"/>
    ${[0,1,2,3].map(i => `<rect x="${730}" y="${160 + i * 110}" width="320" height="70" rx="8" fill="#141419"/><circle cx="770" cy="${195 + i * 110}" r="16" fill="#1f1f26"/><rect x="800" y="${180 + i * 110}" width="${180 - (i%2)*60}" height="12" rx="6" fill="#232330"/><rect x="800" y="${202 + i * 110}" width="${120 + (i%3)*40}" height="10" rx="5" fill="#1c1c24"/>`).join("")}
    ${car(150, 1500, 4.4)}
    <path d="M ${150 + 52 * 4.4} ${1500 - 42 * 4.4} C ${150 + 90 * 4.4} ${1500 - 150 * 4.4} ${150 + 140 * 4.4} ${1500 - 170 * 4.4} ${150 + 168 * 4.4} ${1500 - 150 * 4.4} L ${150 + 160 * 4.4} ${1500 - 60 * 4.4} L ${150 + 60 * 4.4} ${1500 - 40 * 4.4} Z" fill="${SIL2}"/>
    <polygon points="${150 + 205 * 4.4},${1500 - 8 * 4.4} ${150 + 260 * 4.4},${1500 - 10 * 4.4} ${150 + 340 * 4.4},${1500 + 70} ${150 + 245 * 4.4},${1500 + 70}" fill="url(#beam)" opacity="0.75" filter="url(#b12)"/>
    ${glow(150 + 280 * 4.4, 1500 - 6 * 4.4, 130)}
    ${reflect(150 + 280 * 4.4, 1510, 56, 200, Y, 0.4)}
    ${person(950, 1560, 3.1, { arm: `<rect x="-26" y="-150" width="18" height="90" rx="9" fill="${SIL}" transform="rotate(52 -18 -150)"/>` })}
    <rect x="0" y="${h - 100}" width="${w}" height="100" fill="${INK}" opacity="0.55" filter="url(#b6)"/>
  `;
  write("mecanicien.svg", svg(w, h, inner));
}

function mainsMecano() {
  const w = 1400, h = 1050;
  const inner = `
    <rect width="${w}" height="${h}" fill="#08080b"/>
    <ellipse cx="${w / 2}" cy="${h * 0.62}" rx="${w * 0.42}" ry="${h * 0.34}" fill="#101014"/>
    <rect x="330" y="430" width="740" height="260" rx="36" fill="${SIL}"/>
    <rect x="370" y="400" width="120" height="80" rx="14" fill="${SIL2}"/>
    <rect x="650" y="380" width="120" height="100" rx="14" fill="${SIL2}"/>
    <rect x="930" y="400" width="120" height="80" rx="14" fill="${SIL2}"/>
    <path d="M490,400 C490,340 560,340 560,400" stroke="${SIL2}" stroke-width="26" fill="none"/>
    <path d="M770,380 C770,310 850,310 850,380" stroke="${SIL2}" stroke-width="26" fill="none"/>
    <rect x="600" y="520" width="200" height="60" rx="16" fill="#0c0c10" stroke="#26262e" stroke-width="3"/>
    <circle cx="620" cy="550" r="9" fill="${Y}"/><circle cx="660" cy="550" r="9" fill="#3a3a42"/><circle cx="700" cy="550" r="9" fill="#3a3a42"/><circle cx="740" cy="550" r="9" fill="#3a3a42"/>
    ${glow(700, 300, 260)}
    <g transform="translate(560,470) rotate(-24)">
      <rect x="-16" y="-110" width="32" height="190" rx="14" fill="${SIL2}"/>
      <path d="M-30,-110 L30,-110 L22,-150 L-22,-150 Z" fill="${SIL2}"/>
      <circle cx="0" cy="-96" r="26" fill="#08080b"/>
    </g>
    <ellipse cx="500" cy="600" rx="52" ry="34" fill="${SIL2}" transform="rotate(-18 500 600)"/>
    <ellipse cx="880" cy="610" rx="52" ry="34" fill="${SIL2}" transform="rotate(16 880 610)"/>
    <rect x="452" y="560" width="90" height="26" rx="13" fill="${SIL2}" transform="rotate(-18 500 600)"/>
    <rect x="838" y="572" width="90" height="26" rx="13" fill="${SIL2}" transform="rotate(16 880 610)"/>
    ${[0,1,2,3,4,5].map(i => `<line x1="${700 + (i - 2.5) * 26}" y1="${330 - (i % 2) * 30}" x2="${700 + (i - 2.5) * 46}" y2="${300 - (i % 3) * 26}" stroke="${Y}" stroke-width="4" stroke-linecap="round" opacity="${0.5 + (i % 3) * 0.2}"/>`).join("")}
    <rect x="0" y="${h - 70}" width="${w}" height="70" fill="${INK}" opacity="0.5" filter="url(#b6)"/>
  `;
  write("mains-mecano.svg", svg(w, h, inner));
}

function conducteurNuit() {
  const w = 1400, h = 900;
  const inner = `
    <rect width="${w}" height="${h}" fill="#07070a"/>
    <rect x="60" y="50" width="${w - 120}" height="560" rx="24" fill="#0c0c12"/>
    ${stars(w - 120, 40, 480)}
    ${bokeh(w - 120, 620, 30)}
    <rect x="60" y="380" width="${w - 120}" height="230" rx="24" fill="url(#ground)"/>
    <line x1="${w / 2}" y1="390" x2="${w / 2}" y2="610" stroke="${Y}" stroke-width="6" opacity="0.5" stroke-dasharray="26 22"/>
    ${glow(300, 420, 70, "url(#haloW)")}
    ${glow(1100, 415, 70, "url(#haloW)")}
    <rect x="${w / 2 - 90}" y="120" width="180" height="70" rx="10" fill="#101016" stroke="#26262e" stroke-width="2"/>
    <g transform="translate(${w / 2},820)">
      <circle r="150" fill="none" stroke="#15151a" stroke-width="34"/>
      <circle r="150" fill="none" stroke="#2c2c34" stroke-width="6"/>
      <line x1="-150" y1="0" x2="-40" y2="-18" stroke="#2c2c34" stroke-width="16" stroke-linecap="round"/>
      <line x1="150" y1="0" x2="40" y2="-18" stroke="#2c2c34" stroke-width="16" stroke-linecap="round"/>
      <circle r="34" fill="#1b1b21"/>
      ${vLogo(-16, -18, 0.75, Y, 0.9)}
    </g>
    <ellipse cx="${w / 2 - 190}" cy="800" rx="52" ry="34" fill="${SIL}"/>
    <ellipse cx="${w / 2 + 190}" cy="800" rx="52" ry="34" fill="${SIL}"/>
    <rect x="0" y="${h - 40}" width="${w}" height="40" fill="${INK}" opacity="0.6"/>
  `;
  write("conducteur-nuit.svg", svg(w, h, inner));
}

function equipe() {
  const w = 1400, h = 900, hy = 560;
  const inner = `
    <rect width="${w}" height="${h}" fill="#0a0a0e"/>
    <rect x="80" y="40" width="${w - 160}" height="${hy - 60}" rx="18" fill="#0e0e14"/>
    ${stars(w, 30, hy - 120)}
    ${bokeh(w, hy, 14)}
    <rect x="0" y="${hy}" width="${w}" height="${h - hy}" fill="url(#ground)"/>
    <line x1="0" y1="${hy}" x2="${w}" y2="${hy}" stroke="#26262e" stroke-width="4"/>
    <ellipse cx="${w / 2}" cy="${hy + 250}" rx="520" ry="120" fill="#111116"/>
    <rect x="${w / 2 - 460}" y="${hy + 130}" width="920" height="40" rx="10" fill="#1a1a21"/>
    <rect x="${w / 2 - 430}" y="${hy + 170}" width="34" height="150" fill="#141419"/>
    <rect x="${w / 2 + 396}" y="${hy + 170}" width="34" height="150" fill="#141419"/>
    ${[0,1,2,3].map(i => {
      const x = w / 2 - 330 + i * 220;
      return `<g transform="translate(${x},${hy + 60})">
        <rect x="-52" y="-34" width="104" height="66" rx="6" fill="#0c0c10" stroke="#33333c" stroke-width="3" transform="skewX(-6)"/>
        <rect x="-44" y="-26" width="88" height="50" rx="3" fill="${Y}" opacity="0.9" transform="skewX(-6)"/>
        <circle cx="0" cy="-30" r="46" fill="url(#haloY)" opacity="0.35"/>
      </g>`;
    }).join("")}
    ${person(w / 2 - 380, hy + 330, 1.9)}
    ${person(w / 2 - 130, hy + 345, 2.0)}
    ${person(w / 2 + 140, hy + 345, 2.0)}
    ${person(w / 2 + 390, hy + 330, 1.9)}
    ${vLogo(w - 220, 90, 2.2, Y, 0.9)}
    <rect x="0" y="${h - 50}" width="${w}" height="50" fill="${INK}" opacity="0.5" filter="url(#b6)"/>
  `;
  write("equipe.svg", svg(w, h, inner));
}

function moteur() {
  const w = 1200, h = 675;
  const inner = `
    <rect width="${w}" height="${h}" fill="#08080b"/>
    ${glow(w / 2, h / 2, 420)}
    <ellipse cx="${w / 2}" cy="${h - 90}" rx="430" ry="60" fill="#0e0e12"/>
    <rect x="${w / 2 - 260}" y="${h / 2 - 90}" width="520" height="200" rx="30" fill="${SIL}"/>
    <rect x="${w / 2 - 210}" y="${h / 2 - 130}" width="420" height="70" rx="18" fill="${SIL2}"/>
    <rect x="${w / 2 - 160}" y="${h / 2 - 170}" width="90" height="50" rx="10" fill="${SIL2}"/>
    <rect x="${w / 2 - 40}" y="${h / 2 - 170}" width="90" height="50" rx="10" fill="${SIL2}"/>
    <rect x="${w / 2 + 80}" y="${h / 2 - 170}" width="90" height="50" rx="10" fill="${SIL2}"/>
    <circle cx="${w / 2 - 115}" cy="${h / 2 - 145}" r="12" fill="${Y}"/>
    <circle cx="${w / 2 + 5}" cy="${h / 2 - 145}" r="12" fill="${Y}"/>
    <circle cx="${w / 2 + 125}" cy="${h / 2 - 145}" r="12" fill="${Y}"/>
    <path d="M ${w / 2 - 260} ${h / 2 + 10} C ${w / 2 - 380} ${h / 2 + 10} ${w / 2 - 380} ${h / 2 - 60} ${w / 2 - 300} ${h / 2 - 60}" stroke="${SIL2}" stroke-width="24" fill="none"/>
    <path d="M ${w / 2 + 260} ${h / 2 + 30} C ${w / 2 + 380} ${h / 2 + 30} ${w / 2 + 380} ${h / 2 + 120} ${w / 2 + 300} ${h / 2 + 120}" stroke="${SIL2}" stroke-width="24" fill="none"/>
    <rect x="${w / 2 - 60}" y="${h / 2 + 40}" width="120" height="70" rx="14" fill="#0c0c10" stroke="${Y}" stroke-width="4"/>
    ${vLogo(w / 2 - 22, h / 2 + 52, 1.0, Y, 1)}
    ${[0,1,2].map(i => `<line x1="${w / 2 + 180 + i * 30}" y1="${h / 2 - 60 - i * 14}" x2="${w / 2 + 215 + i * 34}" y2="${h / 2 - 95 - i * 12}" stroke="${Y}" stroke-width="5" stroke-linecap="round" opacity="${0.8 - i * 0.25}"/>`).join("")}
    <rect x="0" y="${h - 40}" width="${w}" height="40" fill="${INK}" opacity="0.55" filter="url(#b6)"/>
  `;
  write("moteur.svg", svg(w, h, inner));
}

const ALL_SCENES = [heroHome, cardParticuliers, cardPros, proHero, mecanicien, mainsMecano, conducteurNuit, equipe, moteur];

ALL_SCENES.forEach((f) => f());
console.log("done");
