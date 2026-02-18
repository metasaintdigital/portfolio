/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dhb': '#000080', // Navy
        'eln': '#FFD700', // Gold
        'altered': '#C0C0C0', // Silver
        'lumina': '#FFF200', // Neon Yellow
        'aequitas': '#CCCCFF', // Periwinkle
      }
    },
  },
  plugins: [],
}
