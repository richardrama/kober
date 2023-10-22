/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#1D0A5B',
      'cream': '#CD8C2A',
      'white': '#EEEBE1',
      'black': '#1E1E1E',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      inter: ['Inter', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
