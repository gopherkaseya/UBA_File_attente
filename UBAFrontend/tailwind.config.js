/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/material-icons/**/*.{html,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors:{
        customRed : '#D42E12',
        customeGray : '#D9D9D9'
      },
      fontFamily :{
        roboto:['Roboto', 'sans-serif'],
        comfortaa:['comfortaa','sans-serif']
      }
    },
  },
  plugins: [],
}

