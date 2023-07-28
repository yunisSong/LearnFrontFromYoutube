<template>
  <div>
    <Header></Header>
    <Card :cards="cards"></Card>
  </div>
</template>

<script setup>
import Header from "./MiddleItems/Header.vue";
import Card from "./MiddleItems/Card.vue";

const cards = [
  {
    category: "BTC",
    price: "99,900",
    data: "09/29",
  },
  {
    category: "EHT",
    price: "99,900",
    data: "09/29",
  },
  {
    category: "EUR",
    price: "99,900",
    data: "09/29",
  },
];
</script>

<style lang="scss" scoped></style>
