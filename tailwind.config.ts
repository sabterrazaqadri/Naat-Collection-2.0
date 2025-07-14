import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "#e9c46a",
        deepgreen: "#0f5132",
        white: "#fff",
        card: "rgba(255,255,255,0.15)",
      },
      fontFamily: {
        urdu: ['"Noto Nastaliq Urdu"', "serif"],
        calligraphic: ['"Scheherazade New"', 'serif'],
        modern: ['"Segoe UI"', 'Arial', 'sans-serif'],
      },
      screens: {
        xs: "480px", // Custom breakpoint for extra small screens
      },
    },
  },
  plugins: [
    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, any>, options?: any) => void;
    }) {
      addUtilities(
        {
          ".text-shadow-glow": {
            textShadow:
              "0 0 10px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.2)",
          },
          ".text-shadow-blueGlow": {
            textShadow:
              "0 0 10px rgba(0, 0, 255, 0.4), 0 0 20px rgba(0, 0, 255, 0.3)",
          },
        },
        { variants: ["responsive"] }
      );
    },
  ],
} satisfies Config;

