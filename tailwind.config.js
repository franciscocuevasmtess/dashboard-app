/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc', // Azul
        secondary: '#6574cd', // Morado
        danger: '#e3342f', // Rojo
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Cambia la fuente predeterminada
      },
    },
  },
  plugins: [],
};