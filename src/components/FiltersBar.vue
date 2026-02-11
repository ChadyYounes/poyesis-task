<script setup lang="ts">
defineProps<{
  modelValue: string
  selectedCategory: string
  categories: string[]
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'update:selectedCategory': [value: string]
}>()
</script>

<template>
  <div class="mb-6 flex gap-4">
    <input
      :value="modelValue"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      type="text"
      placeholder="Search products by title..."
      class="flex-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <select
      :value="selectedCategory"
      @change="emit('update:selectedCategory', ($event.target as HTMLSelectElement).value)"
      class="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">All Categories</option>
      <option v-for="category in categories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>
  </div>
</template>
