import { h } from "vue";
import Line from "../Component/Line.vue";

export default {
  props: {
    msg: "",
  },
  setup(props) {
    // 返回渲染函数
    return () =>
      h("div", ["render 函数渲染已经存在的模板组件", h(Line, props)]);
  },
};
