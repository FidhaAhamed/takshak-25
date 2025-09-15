/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
<<<<<<< HEAD
      fontFamily: {
        giaza: ['Giaza', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        buster: ['Buster', 'sans-serif'],

      },
=======
      textShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.8)',
        DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.5)',
        lg: '0 8px 16px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
>>>>>>> 345b53c8ada844aa2443573822b1d5809615f831
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-sm': {
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)',
        },
        '.text-shadow-lg': {
          textShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}