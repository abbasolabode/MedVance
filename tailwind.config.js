/* eslint-env node */
/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '390px',
        'sm': '428px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
        lato: ['"Lato"', 'sans-serif'],
      },
      colors: {
        white: 'hsla(0, 0%, 100%, 1)',
        utiliBlue: 'hsla(210, 100%, 36%, 1)',
        dimBlack: 'hsla(210, 9%, 5%, 1)',
        dimGray: 'hsla(195, 9%, 11%, 1)',
        spanYellow: 'hsla(44, 100%, 49%, 1)',
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
