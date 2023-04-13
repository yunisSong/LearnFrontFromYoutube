[React Tutorial for Beginners](https://www.youtube.com/watch?v=SqcY0GlETPk&ab_channel=ProgrammingwithMosh)

创建 `react` 项目有两种方式 `vite` 和 `react-creat-app`

### vite

1. `npm create vite@latest npm create vite@4.1.0`
2. Y
3. name
4. react
5. typescript
6. npm i
7. npm run dev

### react-creat-app

1. `npx create-react-app cra-demo`
2. y
3. `cd cra-demo`
4. `npm start`

#### Tips

### className 根据条件添加或者删除 class

```js
<div
  className={`  ${hoverState ? 'block' : 'hidden'} h-36 w-36 bg-black`}
></div>
```

### 将 css 当做 module 加载，做到样式隔离

1. 将 `css` 文件命名为 `Slider.module.css`
2. 在要使用的地方导入 `import SliderStyles from './Slider.module.css'`
3. 使用的时候 `{SliderStyles.bg}`

> VSCode 中可以使用 `css module` 插件
