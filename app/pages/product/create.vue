<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-100 py-10">
    <h1 class="text-3xl font-bold text-gray-800 mb-6 text-center">Tambah Produk</h1>

    <form @submit.prevent="submitProduct" class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-1">Nama Produk</label>
        <input v-model="product.name" type="text" class="w-full p-2 border rounded-lg" required />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-1">Harga</label>
        <input v-model="product.price" type="number" class="w-full p-2 border rounded-lg" required />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-1">Deskripsi</label>
        <textarea v-model="product.description" class="w-full p-2 border rounded-lg" required></textarea>
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-1">Stok</label>
        <input v-model="product.stock" type="number" class="w-full p-2 border rounded-lg" required />
      </div>

      <div class="flex justify-between">
        <NuxtLink to="/products" class="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition">
          Kembali
        </NuxtLink>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          Simpan
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useHead } from '#imports'

const { addProduct } = useProducts();
useHead({
  title: "Tambah Produk | Toko Online Lagikoding",
  meta: [
    {
      name: "description",
      content: "Tambah data produk terbaik dengan harga terbaik di toko online kami.",
    },
  ],
});
const router = useRouter();
const product = ref({
  name: "",
  price: "",
  description: "",
  stock: "",
});

const submitProduct = async () => {
  const response = await addProduct(product.value);
  if (response) {
    alert("Produk berhasil ditambahkan!");
    router.push("/products");
  } else {
    alert("Gagal menambahkan produk. Silakan coba lagi.");
  }
};
</script>