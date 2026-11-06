import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            DEFAULT: "#008be0",
            50: "#f0f9ff",
            100: "#e0f2fe",
            200: "#bae6fd",
            300: "#7dd3fc",
            400: "#38bdf8",
            500: "#008be0",
            600: "#0284c7",
            700: "#0369a1",
            800: "#075985",
            900: "#0c4a6e",
          },
          navy: {
            DEFAULT: "#003155",
            50: "#f1f5f9",
            100: "#e2e8f0",
            200: "#cbd5e1",
            300: "#94a3b8",
            400: "#64748b",
            500: "#003155",
            600: "#002845",
            700: "#001f36",
            800: "#001728",
            900: "#000f1a",
            950: "#000910",
          },
          cta: {
            DEFAULT: "#10b981", // Emerald Green strictly for CTAs
            hover: "#059669",
            active: "#047857",
            light: "#34d399",
            glow: "rgba(16, 185, 129, 0.35)",
          },
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
        heading: [
          '"Segoe UI Variable Display"',
          '"Segoe UI"',
          "segoeui",
          '"Helvetica Neue"',
          "helvetica",
          "arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(0, 139, 224, 0.3)",
        "glow-cta": "0 0 25px -5px rgba(16, 185, 129, 0.4)",
        card: "0 10px 30px -10px rgba(0, 49, 85, 0.08)",
        "card-hover": "0 20px 40px -15px rgba(0, 139, 224, 0.15)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "mesh-dark":
          "radial-gradient(at 0% 0%, rgba(0, 139, 224, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(0, 49, 85, 0.4) 0px, transparent 50%)",
        "mesh-light":
          "radial-gradient(at 0% 0%, rgba(0, 139, 224, 0.06) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(0, 49, 85, 0.04) 0px, transparent 50%)",
      },
    },
  },
  plugins: [],
};
export default config;
