<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Product } from '@/types/product'
import ProductCard from './ProductCard.vue'
import FiltersBar from './FiltersBar.vue'

const { products } = defineProps<{
  products: Product[]
}>()

const searchQuery = ref('')
const selectedCategory = ref('')

const categories = computed(() => {
  const uniqueCategories = new Set(products.map((p) => p.category))
  return Array.from(uniqueCategories).sort()
})
const filteredProducts = computed(() => {
  return products.filter((product) => {
    const matchesTitle = product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesCategory =
      selectedCategory.value === '' || product.category === selectedCategory.value
    return matchesTitle && matchesCategory
  })
})
</script>

<template>
  <div>
    <FiltersBar
      v-model="searchQuery"
      v-model:selectedCategory="selectedCategory"
      :categories="categories"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>
  </div>
</template>
