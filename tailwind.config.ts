import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", "[data-theme='dark']"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--color-primary-hsl))",
          dark: "hsl(var(--color-primary-dark-hsl))",
        },
        secondary: "hsl(var(--color-secondary-hsl))",
        background: "hsl(var(--color-background-hsl))",
        text: {
          primary: "hsl(var(--color-text-primary-hsl))",
          secondary: "hsl(var(--color-text-secondary-hsl))",
          tertiary: "hsl(var(--color-text-tertiary-hsl))",
        },
        error: "hsl(var(--color-error-hsl))",
      },
    },
  },
  plugins: [],
});

export default config;
