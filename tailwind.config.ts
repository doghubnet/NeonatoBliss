import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        sage: "#A8CABA",
        terracotta: "#E07A5F",
        beige: "#F5EDE1",
        navy: "#1E3A5F"
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 30px rgba(30,58,95,0.08)"
      }
    }
  },
  plugins: []
};

export default config;
