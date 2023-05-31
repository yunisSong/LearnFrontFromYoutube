```css
/* 通过动画锚点 设置动画值 */
button .borderLine:nth-child(1) {
  left: 0;
  top: 0;
  transform-origin: left;
  transform: scaleX(0);
}
button:hover .borderLine:nth-child(1) {
  transform: scaleX(1);
  transition: 0.2s;
  transition-delay: 0s;
}
```

![](demo.gif)
