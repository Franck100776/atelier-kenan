/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.html",
    "./assets/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0f172a",
          dark: "#334155",
          base: "#64748b",
          light: "#f1f5f9",
          bg: "#ffffff",
          wood: "#c2410c",
        },
      },
      fontFamily: {
        serif: ['"Space Grotesk"', "sans-serif"],
        sans: ['"Inter"', "sans-serif"],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [],
};
