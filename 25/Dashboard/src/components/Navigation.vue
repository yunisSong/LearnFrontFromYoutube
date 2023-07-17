<!-- 导航菜单 -->
<template>
  <div
    class="bg-blue-400 py-3 overflow-hidden transition-['width'] duration-350 ease-in-out border-l-[10px] border-blue-400"
  >
    <ul>
      <template v-for="item in items">
        <li
          class="text-white h-[60px] hover:text-blue-400 hover:bg-white outRound rounded-l-[30px] w-full"
        >
          <a class="flex h-full w-full">
            <span
              :class="
                'flex flex-shrink-0 justify-center items-center w-[60px] h-[60px] text-lg iconfont  ' +
                item.iconClass
              "
            ></span>
            <span class="items-center pl-3 leading-[60px] whitespace-nowrap">{{
              item.title
            }}</span>
          </a>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup>
const items = [
  {
    iconClass: 'icon-Home',
    title: 'Dashboard',
  },
  {
    iconClass: 'icon-person',
    title: 'Customers',
  },
  {
    iconClass: 'icon-xiaoxi',
    title: 'Message',
  },
  {
    iconClass: 'icon-help',
    title: 'Help',
  },
  {
    iconClass: 'icon-setting',
    title: 'Setting',
  },
  {
    iconClass: 'icon-password',
    title: 'Password',
  },
  {
    iconClass: 'icon-sign-out',
    title: 'Sign out',
  },
];
</script>

<style lang="scss" scoped></style>
