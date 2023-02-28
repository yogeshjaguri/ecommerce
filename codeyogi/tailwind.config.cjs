/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        12.5: "50px"
      }
    },

    colors:{
      primary:{
        light: "rgb(245, 148, 148)",
        default:"rgb(255, 81, 81)",
        dark: "rgb(248, 47, 47)",
      },
      gray: colors.gray,
      white: colors.white,
      black: colors.black,
    },
  },
  plugins: [],
}