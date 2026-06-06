/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        hind: ['Hind', 'sans-serif'],
      },
      colors: {
        fluxyBlue: '#1D2687',
        fluxyPurple: '#9234C9',
        fluxyPink: '#D814BE',
      }
    },
  },
  plugins: [],
}