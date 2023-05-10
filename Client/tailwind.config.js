/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : { 
        primary : '#FF3811', 
        secondary : '#737373', 
      }
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui")],
}