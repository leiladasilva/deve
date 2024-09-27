<script setup>
import { useproductStore } from '@/stores/product';
const productStore = useproductStore()
</script>

<template>
  
   <thead>
    <h1>listagem de produtos</h1>
    <tr>
      <th>#</th>
      <th>nome</th>
      <th>preço</th>
      <th>ações</th>
      </tr>
  </thead>
<table>
 
</table>
<tbody>
  <tr v-for="product in productStore.products" :key="product.id">
    <td>{{ product.id }}</td>
    <td>{{ product.name }}</td>
    <td> {{ product.price }}</td>
    <td><button>ver</button></td>
  </tr>
</tbody>
</template>
