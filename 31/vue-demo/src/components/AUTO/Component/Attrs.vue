<template>
  Attrs
  <div>1111</div>
  <div>{{ $attrs }}</div>
</template>

<script setup>
import { useAttrs } from "vue";

// 在 js 中获取 属性
const attrs = useAttrs();
console.log("attrs: ", attrs);
defineOptions({
  inheritAttrs: false,
});
</script>

<style lang="scss" scoped></style>
