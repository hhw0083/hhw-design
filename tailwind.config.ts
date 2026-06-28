import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0f766e",
          accent: "#14b8a6",
          secondary: "#047857",
          warm: "#b45309",
          danger: "#be123c",
        },
        surface: {
          canvas: "#f6f7f9",
          paper: "#ffffff",
          panel: "#ffffff",
          hero: "#04101b",
          contact: "#06111d",
          dark: "#020617",
          chip: "#0f172a",
        },
        copy: {
          primary: "#111827",
          secondary: "#475569",
          muted: "#64748b",
          inverse: "#f8fafc",
          inverseMuted: "#cbd5e1",
          inverseSubtle: "#94a3b8",
        },
        stroke: {
          soft: "#e5e7eb",
          muted: "#e2e8f0",
        },
        ink: "#111827",
        panel: "#ffffff",
        canvas: "#f6f7f9",
        paper: "#ffffff",
        line: "#e5e7eb",
        cyanline: "#0f766e",
        mint: "#047857",
        brass: "#b45309",
        signal: "#be123c",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"],
        noto: [
          "var(--font-noto-sans-tc)",
          "Noto Sans TC",
          "ui-sans-serif",
          "system-ui",
        ],
      },
      boxShadow: {
        "panel-glow": "0 24px 70px rgba(15, 23, 42, 0.12)",
        "portfolio-card": "0 18px 50px rgba(15, 23, 42, 0.08)",
        "brand-button": "0 12px 30px rgba(15, 118, 110, 0.28)",
        "glass-panel": "0 24px 80px rgba(0, 0, 0, 0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
