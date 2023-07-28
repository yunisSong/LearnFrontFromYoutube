<template>
  <div class="flex px-[1rem]">
    <Aside class="w-[16rem]" />
    <Middle class="flex-1" />
    <Right class="h-full w-[200px]" />
  </div>
</template>

<script setup>
import Aside from "./Aside.vue";
import Middle from "./Middle.vue";
import Right from "./Right.vue";
</script>

<style lang="scss" scoped></style>
