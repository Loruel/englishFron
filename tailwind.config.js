/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        xustomBlue: "#2a3d5d",
        xustomBrown: "#c4af90",
        xustomZoom: "#4087FC",
        xustomDarck: "#3b3b3b"
      }
    },
  },
  plugins: [],
}