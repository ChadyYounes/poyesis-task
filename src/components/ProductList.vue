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
const viewMode = ref<'grid' | 'list'>('grid')

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
  <div class="w-full">
    <FiltersBar
      v-model="searchQuery"
      v-model:selectedCategory="selectedCategory"
      :categories="categories"
    />

    <div class="flex justify-end mb-4 mt-6">
      <button
        @click="viewMode = 'grid'"
        :class="{
          'bg-blue-600 text-white': viewMode === 'grid',
          'bg-gray-200': viewMode !== 'grid',
        }"
        class="px-3 py-1 rounded-l text-sm font-medium"
      >
        Grid
      </button>
      <button
        @click="viewMode = 'list'"
        :class="{
          'bg-blue-600 text-white': viewMode === 'list',
          'bg-gray-200': viewMode !== 'list',
        }"
        class="px-3 py-1 rounded-r text-sm font-medium border-l"
      >
        List
      </button>
    </div>

    <!-- Grid View -->
    <div v-if="viewMode === 'grid'" class="grid grid-cols-4 gap-4 w-full">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        view-mode="grid"
      />
    </div>

    <!-- List View -->
    <div v-else class="space-y-3 w-full">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        view-mode="list"
      />
    </div>
  </div>
</template>
