<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import { useProducts } from '@/composables/useProducts'

const { products, loading, error } = useProducts()
</script>

<template>
  <div class="p-10">
    <header class="mb-8">
      <h1 class="text-3xl font-bold">Product Catalog</h1>
    </header>

    <div v-if="loading" class="text-center">Loading products...</div>
    <div v-else-if="error" class="text-red-500">{{ error }}</div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>
