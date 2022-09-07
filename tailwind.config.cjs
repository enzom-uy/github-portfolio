/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'background-dark': '#0D1117',
        'background-light': '#F6F8FA',
        accent: '#238636',
        'accent-light': '#2ea043 ',
        'accent-red': '#A40E26',
        light: '#C9D1D9',
        dark: '#24292F',
        black: '0_0px_70px_0px_rgba(0, 0, 0, 1)',
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 20px 30px 10px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [require('daisyui')],
}
