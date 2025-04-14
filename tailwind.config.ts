import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components,locales}/**/*.{ts,tsx,js,jsx,json}",
  ],
  darkMode: "class", // Enables dark mode using the "class" strategy
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", "system-ui", "sans-serif"],
        "roboto-mono": ["roboto-mono", "monospace"],
      },
    },
  },
} satisfies Config;
