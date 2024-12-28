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

### 父子组件间的参数、事件传递

子组件

```jsx
interface Props {
  input: string;
  outPass: (out: string) => void;
}

function EventDemo({ input, outPass }: Props) {
  return (
    <button
      className=' my-2 rounded-xl bg-slate-700 p-2 px-3 text-white'
      onClick={() => {
        touchEvent(outPass);
      }}
    >
      {input}
    </button>
  );
}

const touchEvent = (outPass: (out: string) => void) => {
  outPass('向外传递参数、事件');
};
```

父组件

```jsx
import EventDemo from './components/EventDemo';

function Father() {
  const outPass = (out: string) => {
    console.log('out: ', out);
  };
  return <EventDemo input='事件参数传递' outPass={outPass}></EventDemo>;
}
```
