/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('menuOpen', '.menuOpen &');
    },
  ],
};
