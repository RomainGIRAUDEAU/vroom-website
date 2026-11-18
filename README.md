# Vroom — Site vitrine

Site vitrine de **Vroom**, l'assistance auto nouvelle génération (particuliers & pros / Vroom Pro).
Design inspiré des maquettes validées (fond noir, accent jaune `#FFD60A`).

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS 3.4**
- Images : CDN Unsplash (`images.unsplash.com`) via `next/image`
- Aucune base de données, 100 % statique (SSG)

## Pages

| Route          | Contenu                                                            |
| -------------- | ------------------------------------------------------------------ |
| `/`            | Accueil : hero, « Deux solutions, un même engagement », services, carte de France, téléchargement de l'app |
| `/pro`         | Vroom Pro : avantages, étapes, offre 69,90 €/mois, témoignage       |
| `/contact`     | Moyens de contact, FAQ (accordéon), formulaire de contact           |
| `/a-propos`    | Mission, engagements, **développé par Riviera Flow (Sophia Antipolis — rivieraflow.com)** |
| `/entreprises` | Solutions flottes & partenariats entreprises                        |

## Lancer en local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
npm start        # sert le build
```

## Déployer sur Vercel

Le projet est prêt pour Vercel (Next.js détecté automatiquement, aucune configuration requise) :

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/RomainGIRAUDEAU/vroom-website)

Ou manuellement :

1. Aller sur [vercel.com/new](https://vercel.com/new)
2. « Import Git Repository » → sélectionner ce dépôt GitHub
3. Laisser les réglages par défaut (framework **Next.js**, build `next build`) → **Deploy**
4. Chaque `git push` sur `main` déclenche un nouveau déploiement de production

Domaine conseillé : `vroom.rivieraflow.com` (à configurer dans les settings du projet Vercel).

## Structure

```
app/            # pages (App Router) + layout + globals.css + icon.svg
components/     # Header, Footer, icônes SVG, carte de France, mockup app, FAQ, formulaire
lib/img.ts      # URLs des visuels (CDN Unsplash — aucun binaire dans le repo)
app/icon.svg    # favicon (V jaune)
```
