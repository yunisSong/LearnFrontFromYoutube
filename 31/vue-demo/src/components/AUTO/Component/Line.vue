<template>
  <div class="line">{{ msg ? msg : "---" }}</div>
</template>

<script setup>
const props = defineProps({
  msg: "",
});
console.log("props: ", props);
</script>

<style lang="scss" scoped>
.line {
  border-bottom: 1px solid black;
  background-color: rebeccapurple;
  color: white;
  margin: 10px 0;
  text-align: center;
}
</style>
