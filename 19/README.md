# react tailwind vite demo

[TOC]
https://www.youtube.com/watch?v=TVQnhcVFTVs&ab_channel=CodeCommerce

https://www.youtube.com/watch?v=2kg0z1qNrkw&ab_channel=CodeCommerce

### creat app

```
npm create vite@latest

```

### taildwind

#### install taildwind

https://tailwindcss.com/docs/guides/vite

```
npm install -D tailwindcss postcss autoprefixer
npm install -D tailwindcss postcss autoprefixer concurrently
npx tailwindcss init -p

```

#### config taildwind

tailwind.config.js

```
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

./src/index.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### format css

```
npm i -D concurrently
npm install -D prettier prettier-plugin-tailwindcss

```

#### 设置 prettier 样式

##### 新建 .prettierrc 文件

```
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "none",
  "semi": false,
  "endOfLine": "auto",
  "prettier/prettier": [
    "error",
    {
      "endOfLine": "auto"
    }
  ]
}
```

##### 新建 .prettierignore 文件

```
/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*

```

### normalize.css

`npm install normalize.css`

### tips

根据条件展示不同的组件

```js
{
  !nav ? <FaBars /> : <FaTimes />;
}
```
