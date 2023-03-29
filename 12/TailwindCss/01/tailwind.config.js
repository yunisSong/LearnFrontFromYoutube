/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          content: 'var(--color-text-content)',
        },
      },
      backgroundColor: {
        skin: {
          base: 'var(--color-fill)',
          button: 'var(--color-button-primary)',
          hover: 'var(--color-button-primary-hover)',
        },
      },
    },
  },
  plugins: [],
};
