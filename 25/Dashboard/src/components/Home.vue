<template>
  <div class="min-h-screen flex">
    <Navigation :class="navWidthClass" />
    <div class="flex-1">
      <!-- button -->
      <button @click="toggleNavShow">111</button>
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
  width: 180px;
}
.showDefaultWidth {
  width: 100px;
}
</style>
