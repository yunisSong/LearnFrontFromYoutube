<template>
  <Auto-ComponentAttrs
    attr="test"
    @click="
      (e) => {
        console.log(e);
      }
    "
  />
  <Auto-ComponentLine />

  <Auto-ComponentSlots> </Auto-ComponentSlots>
  <Auto-ComponentLine />

  <Auto-ComponentSlots> 这是传入的内容，会替换掉默认内容 </Auto-ComponentSlots>
  <Auto-ComponentLine />

  <Auto-ComponentSlots>
    <!-- 这是具名插槽 -->
    <template v-slot:header>
      <!-- header 插槽的内容放这里 -->
      这是具名插槽--header
    </template>
    <template #default> 这里是向默认插槽填入的内容 </template>
    <template #footer>
      <!-- header 插槽的内容放这里 -->
      这是具名插槽--footer
    </template>
  </Auto-ComponentSlots>
  <Auto-ComponentLine />

  <Auto-ComponentSlots>
    <!-- 这是具名插槽 -->
    <template v-slot:header>
      <!-- header 插槽的内容放这里 -->
      这是具名插槽--header
    </template>

    这里是向默认插槽填入的内容
    <template #footer>
      <!-- header 插槽的内容放这里 -->
      这是具名插槽--footer
    </template>
    <template #scope="anyName">
      <!-- header 插槽的内容放这里 -->
      这是作用域插槽--footer；传递的参数 {{ anyName }}
    </template>
  </Auto-ComponentSlots>
  <Auto-ComponentLine />
  <URender msg="自定义 render 函数 props 传递数据" />
  <Auto-ComponentLine />
  <URender1 msg="render 函数可以渲染模板组件" />
  <Auto-Jsx02 />
  <Auto-ComponentLine />
  <TFunction />
  <Auto-ComponentLine />
  <TFunction2 />
  <Auto-ComponentLine />
</template>

<script setup>
import URender from "./components/AUTO/Jsx/00";
import URender1 from "./components/AUTO/Jsx/01";
import TFunction from "./components/AUTO/Jsx/TFunction";
import TFunction2 from "./components/AUTO/Jsx/TFunction2";
</script>

<style scoped></style>
