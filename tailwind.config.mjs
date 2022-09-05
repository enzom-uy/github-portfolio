/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'background-dark': '#0D1117',
        'background-light': '#F6F8FA',
        'accent': '#2C974B',
        'accent-red': '#A40E26',
        'text-light': '#C9D1D9',
        'text-dark': '#24292F',
      }
    },
  },
  plugins: [require('daisyui')],
  darkMode: 'class'
};
