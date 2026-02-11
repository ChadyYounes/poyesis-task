<script setup lang="ts">
import type { Product } from '@/types/product'

const { product, onClose } = defineProps<{
  product: Product
  onClose: () => void
}>()
</script>

<template>
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
      <button @click="onClose" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
        ✕
      </button>

      <img :src="product.image" alt="" class="w-full h-64 object-contain mb-4" />
      <h2 class="text-xl font-bold mb-2">{{ product.title }}</h2>
      <p class="text-gray-700 mb-4">{{ product.description }}</p>
      <p class="font-semibold text-lg">$ {{ product.price }}</p>
    </div>
  </div>
</template>
