import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vroom: {
          yellow: "#FFD60A",
          black: "#050505",
          card: "#101010",
          card2: "#161616",
          line: "rgba(255,255,255,0.08)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1200px",
      },
      boxShadow: {
        "yellow-glow": "0 0 60px rgba(255,214,10,0.25)",
        card: "0 20px 50px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
export default config;
