<script setup lang="ts">
import ProductList from '@/components/ProductList.vue'
import { useProducts } from '@/composables/useProducts'

const { products, loading, error } = useProducts()
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white border-b border-gray-200 py-6 px-6">
      <h1 class="text-3xl font-bold text-gray-900">Product Catalog</h1>
    </header>

    <div class="p-6">
      <div v-if="loading" class="text-center py-12">
        <p class="text-gray-600">Loading products...</p>
      </div>
      <div v-else-if="error" class="text-center py-12">
        <p class="text-red-600">{{ error }}</p>
      </div>
      <ProductList v-else :products="products" />
    </div>
  </div>
</template>
