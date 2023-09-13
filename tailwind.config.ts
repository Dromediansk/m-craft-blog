import { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
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
  plugins: [require("@tailwindcss/typography")],
};
export default config;
