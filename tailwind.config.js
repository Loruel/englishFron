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
        xustomBlueDark: "#3c62a2",
        xustomBrown: "#c4af90",
        xustomZoom: "#4087FC",
        xustomDarck: "#212121",
        xustomDarckDark: "#3b3b3b"
      }
    },
  },
  plugins: [],
}