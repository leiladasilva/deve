<script setup>
import { useCounterStore } from '@/stores/counter';
const counterStore= useCounterStore()
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <H2>CONTADOR: {{ counterStore.count }}</H2>
    <h2>dobro contador: {{ counterStore.doubleCount }}</h2>
    <button @click="counterStore.increment">+</button>
  </div>
</template>
<style>
.about{
  background-color: rgb(172, 184, 159);
}
button{
  background-color: aliceblue;
  width: 100px;
  height: 30px;
}
</style>