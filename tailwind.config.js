/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4502C7",
      },
      fontFamily: {
        Lexend: ["Lexend Deca", "sans-serif"],
      },
    },
  },
  plugins: [],
};
