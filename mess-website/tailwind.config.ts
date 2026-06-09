import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cougar: {
          red: "#C8102E",
          dark: "#960C22",
          cream: "#FFF8EF",
          charcoal: "#1F2933",
          gold: "#B88A2E",
          teal: "#0F766E",
        },
      },
      boxShadow: {
        soft: "0 18px 50px rgba(31, 41, 51, 0.10)",
        premium: "0 24px 80px rgba(15, 23, 42, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
