import { ref} from 'vue'
import { defineStore } from 'pinia'

export const useproductStore = defineStore('product', () => {
  const products = ref([
    {id: 1 , name:'salgados fritos' ,price: 5.5, qty:100},
    {id: 2 , name:'pão de queijo' ,price: 6.5, qty:30},
    {id: 3 , name:'fritos' ,price: 9.5, qty:60},
    {id: 4 , name:'trento' ,price: 8.5, qty:80}  
])

function getProductById(id){
  for(let product of products.value){
    if(product.id == id)
      return product
    }
}

  return { products, getProductById}
})
