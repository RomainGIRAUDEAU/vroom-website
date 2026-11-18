/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Déploiement Cloud Run : serveur Node autonome conteneurisable
  output: "standalone",
  poweredByHeader: false,
};

export default nextConfig;
