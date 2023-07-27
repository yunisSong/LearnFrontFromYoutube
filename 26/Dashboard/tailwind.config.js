/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        skin: {
          primary: "var(--color-primary)",
          minor: "var(--color-minor)",
          success: "var(--color-success)",
          danger: "var(--color-danger)",
        },
      },
      textColor: {
        skin: {
          primary: "var(--text-color-primary)",
          minor: "var(--text-color-minor)",
          // minor
          select: "var(--text-color-select)",
          gray: "var(--text-color-help)",
          placeholder: "var(--text-color-placeholder)",
        },
      },
      backgroundColor: {
        skin: {
          normal: "var(--background-color-normal)",
          minor: "var(--background-color-minor)",
          danger: "var(--background-color-danger)",
          select: "var(--background-color-select)",
          select1: "var(--background-color-select1)",
          select2: "var(--background-color-select2)",
        },
      },
      borderRadius: {
        base1: "1rem",
        base2: "8px",
        small: "8px",
        card: "1rem",
      },
      boxShadow: {
        base: " 0 0 5px color.dark.light, 0 0 20px color.light.dark",
      },
    },
  },
  plugins: [],
};
