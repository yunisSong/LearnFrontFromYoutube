YouTube：[tailwindcss](https://www.youtube.com/watch?v=lCxcTsOHrjo&ab_channel=DaveGray)

### 使用 tailwindcss

1.  `npx tailwindcss init` 初始化
2.  `npx tailwindcss init` 初始化
3.  配置 tailwindcss，在生成的 `tailwind.config.js`(如果你想自定义这个文件的名字，请使用`npx tailwindcss init tailwindcss-config.js`) 中配置选项。
    1.  `content` ：配置所有 HTML 模板、JS 组件以及包含 Tailwind 类名的任何其他文件的路径。
    2.  `theme` ： 自定义颜色、字体、边距等。
    3.  `plugins`
    4.  `Prefix` ：向 Tailwind 生成的代码添加自定义前缀（`prefix: 'tw-'`）
4.  美化 `tailwind`,安装 `prettier-plugin-tailwindcss`, `npm i prettier-plugin-tailwindcss`
5.  打开 `VSCode` 偏好设置，搜索 `format on save`,找到这个选项，然后每次保存的时候会自动调用插件来美化 `tailwind` 代码的顺序。

```
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          content: 'var(--color-text-content)',
          button: 'var(--color-text-button)',
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
```
