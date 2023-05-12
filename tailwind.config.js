/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto : ['Josefin Sans', 'sans-serif']
      },
      colors: {
        "bg__color": "#41945E",
        "hover__color": "#0e612b",
        "nav__bg__color": "#f2fff6",
        "box__bg__color": "#eeffef",
        "silver__color": "#727372",
        "black__color": "#000000",
        "white__color": "#ffffff"

      }
    },
  },
  plugins: [],
}