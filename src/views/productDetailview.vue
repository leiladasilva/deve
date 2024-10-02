<script setup>
import { ref, onMounted } from 'vue';
import { useproductStore } from '@/stores/product';

const props = defineProps(['id'])
const product = ref ({})
const productStore = useproductStore()
 
onMounted(() => {
    product.value = productStore.getProductById(props.id)
})

</script>


<template>
    <div class="box">
    <h1> Detalhes do produto - {{ id }}</h1>
    <h2>nome:{{ product.name }}</h2>
    <h2>preço:{{ product.price }}</h2>
    <h2>quantidade: {{ product.qty }}</h2></div>
</template>
<style scoped>
.box{
background-color: aqua;
}
</style>