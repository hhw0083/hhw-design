import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#05070a",
        panel: "#0d1117",
        line: "#202b37",
        cyanline: "#67e8f9",
        mint: "#6ee7b7",
        brass: "#f5c86a",
        signal: "#fb7185",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        "panel-glow": "0 28px 80px rgba(0, 0, 0, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
