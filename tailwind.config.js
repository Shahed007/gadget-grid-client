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
        'webBg': '#E5E5E5',
        'dark': '#0B0B0C',
      }
    },
  },
  plugins: [require("daisyui")],
}

