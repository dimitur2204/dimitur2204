/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,ts,tsx}"],
  important: false,
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        blue: colors.blue,
        green: colors.green,
        cyan: colors.cyan,
        violet: colors.violet,
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["timberline", "serif"],
      body: ["Montserrat", "sans-serif"],
      number: ["Fjalla One"],
    },
    lineHeight: {
      negative: "0.8",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
