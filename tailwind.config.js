/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor:{
        "color3":"#be6a15",

      },
      colors:{
        "color1":"#fdfdfd",
        "color2":"#f3cf7a",
        "color3":"#be6a15",
      },
      fontFamily:{
        'font1':['Montserrat', 'sans-serif'],
        'font2':['Poppins', 'sans-serif'],
        'logo':['Lumanosimo', 'cursive'],
      }
    },
  },
  plugins: [],
}