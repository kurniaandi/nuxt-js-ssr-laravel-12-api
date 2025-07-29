<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-100 py-10">
    <div class="container mx-auto px-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold text-gray-800">Daftar Produk</h1>
        <NuxtLink
          to="/product/create"
          class="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition"
        >
          + Tambah Produk
        </NuxtLink>
      </div>

      <div v-if="loading" class="text-gray-500 text-center">Loading...</div>
      <div v-else-if="error" class="text-red-500 text-center">{{ error }}</div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="product in products"
          :key="product.id"
          class="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
        >
          <div class="p-5">
            <h2 class="text-xl font-semibold text-gray-800">{{ product.name }}</h2>
            <p class="text-gray-600 mt-1">{{ formatPrice(product.price) }}</p>
            <p class="text-gray-500 mt-2 text-sm">{{ product.description }}</p>
            <p class="text-gray-500 text-sm mt-1">
              Stok: <span class="font-medium">{{ product.stock }}</span>
            </p>

            <div class="flex justify-between mt-4">
              <button
                @click="deleteProductById(product.id)"
                class="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition"
              >
                Hapus
              </button>
              <NuxtLink
                :to="`/product/edit/${product.id}`"
                class="bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-600 transition"
              >
                Edit
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-6 space-x-2">
        <button
          @click="loadProducts(meta.current_page - 1)"
          :disabled="meta.current_page === 1"
          class="px-4 py-2 rounded-lg text-sm font-medium bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
        >
          ‹ Prev
        </button>

        <span class="px-4 py-2 bg-gray-200 rounded-lg">
          Page {{ meta.current_page }} of {{ meta.last_page }}
        </span>

        <button
          @click="loadProducts(meta.current_page + 1)"
          :disabled="meta.current_page === meta.last_page"
          class="px-4 py-2 rounded-lg text-sm font-medium bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
        >
          Next ›
        </button>
      </div>
    </div>
  </div>
</template>



<script setup>
import { ref, onMounted } from "vue";
import { useHead } from '#imports'


const { fetchProducts, deleteProduct } = useProducts();
const products = ref([]);
const meta = ref({});
const loading = ref(false);
const error = ref(null);

const loadProducts = async (page = 1) => {
    try {
        loading.value = true;
        const response = await fetchProducts(page);
        products.value = response.data; 
        meta.value = response.meta; 
    } catch (err) {
        error.value = err.message;
    } finally {
        loading.value = false;
    }
};
useHead({
    title: "Daftar Produk | Toko Online",
    meta: [
        {
            name: "description",
            content: "Lihat daftar produk terbaik dengan harga terbaik di toko online kami.",
        },
    ],
});


const deleteProductById = async (id) => {
    if (!confirm("Apakah Anda yakin ingin menghapus produk ini?")) return;
    try {
        await deleteProduct(id);
        products.value = products.value.filter((product) => product.id !== id);
    } catch (err) {
        error.value = err.message;
    }
};

const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(price);
};

onMounted(loadProducts);
</script>