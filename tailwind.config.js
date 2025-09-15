/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        giaza: ['Giaza', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        buster: ['Buster', 'sans-serif'],

      },
    },
  },
  plugins: [],
}