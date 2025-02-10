/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#003366', // Navy blue from logo
        secondary: '#0088FF' // Light blue from logo
      },
      animation: {
        'slide-up': 'slideUp 0.5s ease-out'
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        sans: ['"Open Sans"', 'sans-serif']
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui()]
}
