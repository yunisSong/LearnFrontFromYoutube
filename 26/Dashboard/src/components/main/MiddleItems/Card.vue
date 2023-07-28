<template>
  <div class="grid grid-cols-3">
    <template v-for="card in cards" :key="card.category">
      <div>
        <div>
          <div>
            <img src="../../../assets/images/BTC.png" />
            <h4>{{ card.category }}</h4>
          </div>
          <img src="../../../assets/images/visa.jpeg" alt="" />
        </div>
        <div>
          <h1>{{ card.price }}</h1>
          <img src="../../../assets/images/bank.png" alt="" />
        </div>
        <div>
          <div>
            <small>Card Halader</small>
            <h5>Lorem ipsum</h5>
          </div>
          <div>
            <small></small>
            <h5>{{ card.data }}</h5>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  cards: [],
});
</script>

<style lang="scss" scoped></style>
