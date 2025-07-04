/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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
  darkMode: 'class',
};