<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import type { Product } from '@/types/product'

const testProduct: Product = {
  id: 1,
  title: 'Test Product',
  price: 29.99,
  description: 'This is a test product',
  category: 'Electronics',
  image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300',
}
</script>

<template>
  <div class="p-10">
    <header class="mb-8">
      <h1 class="text-3xl font-bold">Product Catalog</h1>
    </header>
    <div class="max-w-sm">
      <ProductCard :product="testProduct" />
    </div>
  </div>
</template>
