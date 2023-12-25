/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
      colors: {
        bgColor: "#f4f4f4",
        webBg: "#F0F8FF",
        "web-dark": "#0B0B0C",
        "dark-mode": "#0E0E10",
        primary: "#7F80FE",
        secondary: "#D29AFB",
      },
    },
  },
};
