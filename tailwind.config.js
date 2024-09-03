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
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'dl': '870px',
      'gd': '920px',
      'lg': '1024px',
      'xg': '1155px',
      'xl': '1280px',
      '1xl': '1440px',
      '2xl': '1536px',
      '3xl': '1680px',
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
    },
  },
  plugins: [],
}