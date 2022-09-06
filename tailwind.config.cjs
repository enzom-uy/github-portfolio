/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'background-dark': '#0D1117',
        'background-light': '#F6F8FA',
        'accent': '#2C974B',
        'accent-light': '#35b85a',
        'accent-red': '#A40E26',
        'light': '#C9D1D9',
        'dark': '#24292F',
        'black': '0_0px_70px_0px_rgba(0, 0, 0, 1)',
      },
      fontFamily: {
        'sans': ['IBM Plex Sans', 'system-ui', 'sans-serif' ]
      },
    },
  },
  plugins: [require('daisyui')],
  darkMode: 'class'
};
