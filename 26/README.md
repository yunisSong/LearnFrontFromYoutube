[React Admin Dashboard Tutorial | Responsive React Admin Panel UI Design Course](https://www.youtube.com/watch?v=fq7k_gVV5x8&ab_channel=LamaDev)

![](demo.gif)

### 0 init

```
npm create vite@latest react-admin-dashboard
cd react-admin-dashboard
npm i
npm run dev

```

### config

#### tailwind css

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

#### normalize

`npm i normalize.css`
