/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layout/**/*.{html,js}', './slbs/**/*.{html,js}'],
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
