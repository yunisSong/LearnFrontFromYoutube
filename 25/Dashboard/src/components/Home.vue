<template>
  <div class="min-h-screen flex">
    <Navigation :class="navWidthClass" />
    <div class="flex-1">
      <!-- button -->
      <!-- icon-menu -->
      <a class="w-[60px] h-[60px]" @click="toggleNavShow">
        <span
          class="flex flex-shrink-0 justify-center items-center text-lg iconfont icon-menu"
        ></span>
      </a>
      <Main />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Navigation from './Navigation.vue';
import Main from './Main.vue';
let showLargeNavigation = true;
let navWidthClass = ref('showLargeWidth');
const toggleNavShow = () => {
  showLargeNavigation = !showLargeNavigation;
  if (showLargeNavigation) {
    navWidthClass.value = 'showLargeWidth';
  } else {
    navWidthClass.value = 'showDefaultWidth';
  }
};
</script>

<style>
.showLargeWidth {
  width: 300px;
}
.showDefaultWidth {
  width: 80px;
}
</style>
