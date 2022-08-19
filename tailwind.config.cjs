/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        livishly: ["Lavishly Yours", "cursive"],
        serif: ["Noto Serif Display", "serif"],
        noto: ["Noto Serif Display", "serif"],
      },
    },
  },
  plugins: [],
};
