/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Déploiement Cloud Run : serveur Node autonome conteneurisable
  output: "standalone",
  poweredByHeader: false,
  images: {
    // Visuels servis directement depuis le CDN Unsplash (déjà optimisés) :
    // pas d'optimiseur next/image côté serveur (économise CPU/requêtes Cloud Run)
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
