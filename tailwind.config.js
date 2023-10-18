/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter: "'Inter', sans-serif",
      },
      colors: {
        'webBg': '#FFFAFA',
        'web-dark': '#0B0B0C',
        'primary': '#7F80FE',
        'secondary': '#D29AFB',
      }
    },
  },
  plugins: [require("daisyui")],
}

