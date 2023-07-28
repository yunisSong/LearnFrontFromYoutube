<template>
  <div class="flex h-[88vh] flex-col items-center justify-between">
    <div class="flex h-[88vh] w-[96%] flex-col justify-between">
      <button id="closeButton" class="hidden">
        <span class="material-symbols-sharp"> close </span>
      </button>
      <div class="sidebar relative mt-4 flex flex-1 flex-col text-skin-primary">
        <template v-for="(item, index) in items">
          <a
            class="group flex h-[4.2rem] items-center gap-[1.2rem] p-4 text-skin-gray transition-all duration-150 hover:text-skin-select"
            :class="{
              'bg-skin-normal text-skin-select  before:absolute before:left-0 before:h-[4rem] before:w-[8px] before:bg-skin-select2':
                index == showIndex,
            }"
            @click="changeShowIndex(index)"
          >
            <span
              class="material-symbols-sharp ml-[3rem] text-[1.7rem] transition-all duration-150 group-hover:ml-[2rem]"
              :class="{
                'ml-[2rem]': index == showIndex,
              }"
            >
              {{ item.icon }}
            </span>
            <h4 class="">
              {{ item.title }}
            </h4>
          </a>
        </template>
      </div>
    </div>
    <div
      class="update flex w-[96%] flex-col items-center gap-4 rounded-base1 bg-skin-normal p-4 pb-6"
    >
      <span class="material-icons-sharp"> update </span>
      <h4>Update Available</h4>
      <small class="text-[12px] text-skin-gray">Security Updates</small>
      <small class="text-[12px]">General Updates</small>
      <a
        href="#"
        class="ease w-full rounded-full bg-skin-primary px-4 py-2 text-center text-skin-minor transition-all duration-300 hover:shadow-hover"
        >Update Now</a
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const items = [
  {
    icon: "dashboard",
    title: "dashboard",
  },
  {
    icon: "currency_exchange",
    title: "Exchange",
  },
  {
    icon: "wallet",
    title: "Wallet",
  },
  {
    icon: "payment",
    title: "Transactions",
  },
  {
    icon: "pie_chart",
    title: "Analytics",
  },
  {
    icon: "message",
    title: "Messages",
  },
  {
    icon: "help_center",
    title: "Help Center",
  },
  {
    icon: "settings",
    title: "Setting",
  },
];
const showIndex = ref(0);
const changeShowIndex = (index) => {
  showIndex.value = index;
};
</script>

<style lang="scss" scoped></style>
