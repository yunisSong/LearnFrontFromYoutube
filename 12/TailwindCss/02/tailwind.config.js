/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
        },
      },
    },
  },
  plugins: [],
};
