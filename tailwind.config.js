/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],

        yellowtail: ["Yellowtail", "cursive"],
        Open: ["Open Sans", "sans-serif"],
      },
      colors: {
        green: "#68A47F",
        primary: "#274C5B",
        white: "#ffffff",
        yellow: "#EFD372",
        gray: "#F9F8F8",
      },
    },
  },
  plugins: [],
};
