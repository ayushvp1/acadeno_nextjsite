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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#00286d",
        surface: "#f8f9fd",
        "on-surface": "#191c1f",
        "on-surface-variant": "#444651",
        "outline-variant": "#c4c6d3",
        "surface-container-lowest": "#ffffff"
      },
      fontFamily: {
        body: ["var(--font-plus-jakarta-sans)", "sans-serif"],
        headline: ["var(--font-outfit)", "sans-serif"],
      },
      animation: {
        'gradient-flow': 'gradientFlow 4s linear infinite',
        'continuous-color-loop': 'continuousColorLoop 6s linear infinite',
      },
      keyframes: {
        gradientFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        continuousColorLoop: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '300% 0%' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
