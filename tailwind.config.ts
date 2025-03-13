import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", "system-ui", "sans-serif"],
        "roboto-mono": ["roboto-mono", "monospace"],
      },
    },
  },
} satisfies Config;
