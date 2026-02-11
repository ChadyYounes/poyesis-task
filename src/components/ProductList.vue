<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Product } from '@/types/product'
import ProductCard from './ProductCard.vue'
import FiltersBar from './FiltersBar.vue'

const { products } = defineProps<{
  products: Product[]
}>()

const searchQuery = ref('')
const filteredProducts = computed(() => {
  return products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})
</script>

<template>
  <div>
    <FiltersBar v-model="searchQuery" />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>
  </div>
</template>
