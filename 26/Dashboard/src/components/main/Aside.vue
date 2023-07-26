<template>
  <div class="flex justify-center items-center">
    <div class="flex items-center w-[96%] bg-skin-base min-h-full flex-col">
      <button id="closeButton" class="hidden">
        <span class="material-symbols-sharp"> close </span>
      </button>
      <div
        class="sidebar flex-1 flex flex-col items-start mt-4 text-skin-gray relative"
      >
        <template v-for="(item, index) in items">
          <a
            class="flex justify-start items-center gap-[1.2rem] hover:text-skin-purple h-[4.2rem] p-4 hover:pl-[2rem]"
            :class="{
              'bg-skin-base1 before:absolute before:w-[8px] before:bg-skin-purple before:left-0 before:h-[4rem] text-skin-purple':
                index == showIndex,
            }"
            @click="changeShowIndex(index)"
          >
            <span class="material-symbols-sharp text-[1.7rem]">
              {{ item.icon }}
            </span>
            <h4>{{ item.title }}</h4>
          </a>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const items = [
  {
    icon: 'dashboard',
    title: 'dashboard',
  },
  {
    icon: 'currency_exchange',
    title: 'Exchange',
  },
  {
    icon: 'wallet',
    title: 'Wallet',
  },
  {
    icon: 'payment',
    title: 'Transactions',
  },
  {
    icon: 'pie_chart',
    title: 'Analytics',
  },
  {
    icon: 'message',
    title: 'Messages',
  },
  {
    icon: 'help_center',
    title: 'Help Center',
  },
  {
    icon: 'settings',
    title: 'Setting',
  },
];
const showIndex = ref(0);
const changeShowIndex = (index) => {
  showIndex.value = index;
};
</script>

<style lang="scss" scoped></style>
