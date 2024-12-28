<template>
  <div>
    Slots
    <div><slot name="header"></slot></div>
    <div><slot> 这是默认内容 </slot></div>
    <div><slot name="footer"></slot></div>
    <div><slot name="scope" :obj="{ name: 'yunis', age: 18 }"></slot></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.div-container {
  display: block;
  padding: 40px;
}
</style>
