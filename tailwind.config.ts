import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Portfolio home — pure black & white tokens (no accent)
        bg: "#000000",
        fg: "#fefeff",
        "text-body": "#b4b4b4",
        "text-muted": "#9a9a9a",
        "text-tag": "#8a8a8a",
        "text-label": "#7d7d7d",
        "text-meta": "#6e6e6e",
        "nav-idle": "#5a5a5a",
        "text-faint": "#454545",
        "border-card": "#232323",
        "border-pill": "#242424",
        "border-rule": "#1f1f1f",
        "border-divider": "#1c1c1c",
        "card-bg": "#0b0b0b",
        "card-bg-hover": "#101010",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
