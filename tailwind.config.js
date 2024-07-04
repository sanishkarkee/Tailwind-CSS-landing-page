/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  theme: {
    extend: {
      // Define custom colors and use garna lai text-sanish
      colors: {
        sanish: '#ee0181',
        ram: '#01ee91',
      },
    },
  },
  plugins: [],
};
