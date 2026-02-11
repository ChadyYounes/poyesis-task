import { ref, onMounted } from 'vue'
import type { Product } from '@/types/product'
import axios from 'axios'
export function useProducts() {
  const products = ref<Product[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchProducts = async () => {
    loading.value = true
    error.value = null
    try {
      const response = await axios.get('https://fakestoreapi.com/products')
      products.value = response.data
    } catch (err) {
      console.error(
        'Error fetching products:',
        err instanceof Error ? err.message : 'Unknown error',
      )
      error.value = 'Error fetching products, please try again.'
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    fetchProducts()
  })
  return { products, loading, error }
}
