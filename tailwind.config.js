/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "light-grey": "#B7B8BD",
        "grayish-blue": "#D5E0EF",
        "dark-blue": "#384251"
      },
      fontFamily: {
        "outfit": "'Outfit', sans-serif"
      }
    },
  },
  plugins: [],
}
