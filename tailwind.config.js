/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'custom-bg': "url('/src/assets/fon.png')",
      'custom-bg2': "url('/src/assets/fon2.png')",
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'white' : '#FFFFFF',    
      'gray': '#1D1D1D',
      'blue': '#054FD7',
      'darkblue': '#0B0590',
      'black': '#000000',
    },
    boxShadow: {
      'for-card': '0px 0px 50px 0px rgba(5, 79, 215, 0.2)',
      'for-button': '0px 0px 20px 0px rgba(52, 6, 238, 0.2)',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif'],
      catallina: ['Catallina', 'sans-serif'],
    },
  },
  plugins: [],
}