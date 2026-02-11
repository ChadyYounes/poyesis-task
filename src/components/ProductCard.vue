<script setup lang="ts">
import type { Product } from '@/types/product'

defineProps<{
  product: Product
}>()
</script>

<template>
  <div class="border p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
    <div class="flex justify-center items-centoverflower mb-2">
      <img
        :src="product.image"
        :alt="product.title"
        class="w-auto h-auto object-contain rounded-lg"
      />
    </div>
    <h2 class="font-semibold text-lg truncate">{{ product.title }}</h2>
    <p class="text-blue-600 font-bold mt-1">${{ product.price }}</p>
  </div>
</template>
