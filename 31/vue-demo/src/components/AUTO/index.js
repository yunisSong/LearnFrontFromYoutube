import { defineAsyncComponent } from "vue";

// 默认一个文件夹文件自动注册全局组件
export default {
  install(app) {
    console.log("app: ", app);
    // import.meta.glob是vite的api
    // import.meta.globEager新的vite版本已弃用
    const components = import.meta.glob("./*/*.vue");
    console.log("components: ", components);
    // 遍历组件模块实现自动注册
    for (const [key, value] of Object.entries(components)) {
      // 拼接组件注册的 name
      const pathSplit = key.replace("./", "").split("/");
      const [fileName] = pathSplit.slice(-1);
      const filePrefix = fileName.split(".")[0];
      const componentName = "Auto-" + pathSplit[0] + filePrefix;
      console.log(componentName);
      // 通过 defineAsyncComponent 异步导入指定路径下的组件
      app.component(componentName, defineAsyncComponent(value));
    }
  },
};
