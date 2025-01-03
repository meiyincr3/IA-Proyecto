/** @type {import('tailwindcss').Config} */
const animations = require('@midudev/tailwind-animations');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ajusta según la estructura de tu proyecto
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"], // Agrega tu fuente personalizada
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float infinite ease-in-out 6s", // Define el nombre de la animación
      },
    },
  },
  plugins: [],
};

