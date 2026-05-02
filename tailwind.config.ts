import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef5fb",
          100: "#d9e9f5",
          700: "#174469",
          800: "#113654",
          900: "#0a263f",
          950: "#071d31",
        },
        gold: {
          100: "#fff2c7",
          300: "#f6d477",
          400: "#e9bd45",
          500: "#c99522",
        },
        sand: {
          50: "#fbf7ef",
          100: "#f3ead9",
          200: "#e5d3b6",
        },
        skysoft: "#d9edf7",
        ink: "#233343",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(7, 29, 49, 0.12)",
      },
    },
  },
  plugins: [],
} satisfies Config;
