<!-- 导航菜单 -->
<template>
  <div class="bg-blue-400 w-[240px] py-3 overflow-hidden">
    <ul>
      <template v-for="item in items">
        <li
          class="pl-5 h-10 text-white hover:text-blue-400 hover:bg-white leading-10 outRound ml-5 rounded-l-[20px]"
        >
          <span :class="'iconfont ' + item.iconClass"></span>
          {{ item.title }}
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
