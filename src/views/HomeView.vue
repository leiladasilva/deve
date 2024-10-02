<script setup>
import { useRouter } from 'vue-router';
import { useproductStore } from '@/stores/product';
const productStore = useproductStore()
const router = useRouter()

function visualizar(id){
router.push(`/product/${id}`);
}
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
    <td><button @click="visualizar(product.id)">ver</button></td>
  </tr>

  <button>excluir</button>
</tbody>
</template>
