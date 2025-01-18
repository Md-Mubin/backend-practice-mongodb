/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      // ======== common color
      colors : {
        "brandColor" : "#14a800",
      },
    },

    // ========== contianer
    container : {
      center : true
    },

    // ========== font link
    fontFamily :{
      "brandFont" : ["Libre Franklin", "serif"]
    },
  },
  plugins: [],
}