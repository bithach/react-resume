const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      aqua: "#00ffff",
      black: "#000000",
      white: colors.white,
      gray: colors.gray,
      slate: colors.slate,
    },
    extend: {},
  },
  plugins: [],
};
