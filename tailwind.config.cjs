/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/**/*.{html,js}',
    './slbs/**/*.{html,js}',
    './product/**/*.{html,js}',
    './order/**/*.{html,js}',
    './member/**/*.{html,js}',
    './myshop/**/*.{html,js}',
    './board/**/*.{html,js}',
    './board/free/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['telegraf', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundSize: {
        half: '50%',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
