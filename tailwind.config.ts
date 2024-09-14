import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "10rem",
      screens: {
        "2xl": "1200px",
      },
    },
    screens: {
      xxs: "300px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        red: "var(--red)",
        yellow: "var(--yellow)",
        blue: "var(--blue)",
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
