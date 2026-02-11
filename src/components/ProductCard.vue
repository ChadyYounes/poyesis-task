<script setup lang="ts">
import type { Product } from '@/types/product'

const props = defineProps<{
  product: Product
  viewMode?: 'grid' | 'list'
}>()
</script>

<template>
  <!-- Grid View -->
  <div
    v-if="props.viewMode === 'grid' || !props.viewMode"
    class="border p-2 rounded-lg shadow hover:shadow-lg transition duration-300"
  >
    <div class="flex justify-center items-center mb-2 bg-gray-100 rounded h-36">
      <img :src="product.image" :alt="product.title" class="w-28 h-28 object-contain" />
    </div>
    <h2 class="font-semibold text-xs line-clamp-2">{{ product.title }}</h2>
    <p class="text-blue-600 font-bold mt-1 text-sm">${{ product.price }}</p>
  </div>

  <!-- List View -->
  <div
    v-else-if="props.viewMode === 'list'"
    class="flex gap-4 border p-3 rounded-lg hover:shadow-md transition"
  >
    <img
      :src="product.image"
      :alt="product.title"
      class="w-24 h-24 object-contain bg-gray-100 rounded"
    />
    <div class="flex-1">
      <h3 class="font-semibold text-sm">{{ product.title }}</h3>
      <p class="text-gray-600 text-xs line-clamp-2">{{ product.description }}</p>
      <div class="flex justify-between items-center mt-2">
        <span class="text-blue-600 font-bold">${{ product.price }}</span>
        <span class="text-gray-500 text-xs">{{ product.category }}</span>
      </div>
    </div>
  </div>
</template>
