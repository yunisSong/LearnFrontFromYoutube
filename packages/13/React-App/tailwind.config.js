/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        blue: {
          base: '#3a7cff',
        },
      },
      backgroundColor: {
        blue: {
          base: '#3a7cff',
        },
      },
    },
  },
  plugins: [],
};
