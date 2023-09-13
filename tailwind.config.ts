import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#1a1a1a",
      white: "#f8f8ff",
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      main: "#0d6efd",
      secondary: "#cbd8ee",
    },
  },
  plugins: [typography],
};

export default config;
