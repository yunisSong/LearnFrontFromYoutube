/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          gray: 'var(--color-text-gray)',
          primary: 'var(--color-primary)',
          success: 'var(--color-success)',
          danger: 'var(--color-danger)',
          purple: 'var(--color-purple)',
        },
      },
      backgroundColor: {
        skin: {
          base: 'var(--color-base)',
          base1: 'var(--color-base1)',
          gray: 'var(--color-gray)',
          dark: 'var(--color-dark)',
        },
      },
      borderRadius: {
        base1: '1rem',
        base2: '8px',
      },
    },
  },
  plugins: [],
};
