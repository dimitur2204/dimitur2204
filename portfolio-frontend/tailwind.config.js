/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#0057FF",
      secondary: "#FFAB73",
      tertiary: "#96EA8C",
      link: "#80ABFF",
      black: "#222431",
      white: "#ffffff",
    },
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
