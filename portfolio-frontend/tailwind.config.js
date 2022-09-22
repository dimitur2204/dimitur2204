/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["work-sans", "sans-serif"],
      serif: ["timberline", "serif"],
    },
    lineHeight: {
      negative: "0.8",
    },
  },
  plugins: [],
};
