<template>
  <div class="flex">
    <Aside class="w-[200px] min-h-full" />
    <Middle class="flex-1" />
    <Right class="w-[200px] h-full" />
  </div>
</template>

<script setup>
import Aside from './Aside.vue';
import Middle from './Middle.vue';
import Right from './Right.vue';
</script>

<style lang="scss" scoped></style>
