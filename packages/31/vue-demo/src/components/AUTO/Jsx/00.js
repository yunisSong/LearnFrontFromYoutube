import { ref, h } from "vue";

export default {
  props: {
    msg: "",
  },
  setup(props) {
    console.log("props: ", props);
    const count = ref(1);

    // 返回渲染函数
    return () => h("div", props.msg);
  },
};
