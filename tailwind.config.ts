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
        primary: "var(--primary)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        josefin: ["var(--font-josefin-sans)", "sans-serif"],
      },
    },
    keyframes: {
      "bounce-scale": {
        "0%": { transform: "scale(1)" },
        "50%": { transform: "scale(3)" },
        "100%": { transform: "scale(0)" },
      },
    },
    animation: {
      "bounce-scale": "bounce-scale 1.8s ease-in-out forwards",
    },
  },
  plugins: [],
};
export default config;
