import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
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
