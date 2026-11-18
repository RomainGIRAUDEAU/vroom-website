# Vroom — Site vitrine

Site vitrine de **Vroom**, l'assistance auto nouvelle génération (particuliers & pros / Vroom Pro).
Design inspiré des maquettes validées (fond noir, accent jaune `#FFD60A`).

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS 3.4**
- Images : photos des maquettes client (`design/maquettes/`) extraites par `scripts/extract-photos.py` → `public/images/photos/*.jpg`
- Aucune base de données, 100 % statique (SSG)

## Pages

| Route          | Contenu                                                            |
| -------------- | ------------------------------------------------------------------ |
| `/`            | Accueil : hero « Reprenez le contrôle », « Deux solutions, un même engagement », services, carte de France, téléchargement de l'app |
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

## Déployer sur GCP (Cloud Run — prod)

Le site est déployé sur **Cloud Run** dans le projet GCP **`vroom-1776153394` (Vroom - Prod)**, région `europe-west1` (même région que `vroom-api`) :

- URL de prod : https://vroom-website-981436003035.europe-west1.run.app
- Service : `vroom-website` (public, 512Mi / 1 CPU, 0–10 instances)

Redéployer depuis la source (Cloud Build construit l'image Docker via le `Dockerfile`, `output: "standalone"`) :

```bash
gcloud run deploy vroom-website \
  --source . \
  --region europe-west1 \
  --allow-unauthenticated \
  --memory 512Mi --cpu 1 --min-instances 0 --max-instances 10 \
  --port 8080
```

Le `Dockerfile` produit une image autonome (`.next/standalone` + `public` + `.next/static`, user non-root `nextjs`, port 8080). Les photos sont des JPEG statiques dans `public/images/photos`, aucune dépendance externe au build.

## Structure

```
app/            # pages (App Router) + layout + globals.css + icon.svg
components/     # Header, Footer, HeroPhoto, Visual, icônes SVG, mockup app, FAQ, formulaire
lib/img.ts      # chemins des photos (public/images/photos)
design/maquettes/  # maquettes client RIV-512 (source des photos)
scripts/extract-photos.py  # découpe + nettoyage + upscale des photos depuis les maquettes
                   # (pip install opencv-python-headless numpy ; python3 scripts/extract-photos.py)
app/icon.svg    # favicon (V jaune)
```
