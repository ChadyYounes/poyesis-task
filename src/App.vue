<script setup lang="ts">
import ProductList from '@/components/ProductList.vue'
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
    <ProductList v-else :products="products" />
  </div>
</template>
