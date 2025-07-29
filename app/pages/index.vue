<template>
  <div class="relative overflow-hidden min-h-screen">
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 z-0"></div>
    <div class="relative z-10 text-center py-16 px-4 sm:px-6 lg:px-8">
      <h1 class="text-5xl font-extrabold text-blue-700 mb-4 animate-fade-in-down">
        Selamat Datang di <span class="text-indigo-600">Toko Online Lagikoding</span>
      </h1>
      <p class="text-gray-600 text-lg mb-8 animate-fade-in-up">
        Temukan produk unggulan pilihan dengan harga terbaik hanya untukmu.
      </p>
      <NuxtLink to="/products"
        class="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full shadow-lg text-lg hover:bg-indigo-700 transition duration-300">
        Jelajahi Produk
      </NuxtLink>
    </div>
    <div class="mt-16 mb-24 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center z-10 relative pb-20">
      <div class="p-6 bg-white rounded-xl shadow hover:shadow-lg transition duration-300">
        <h3 class="text-xl font-semibold text-blue-700 mb-2">Gratis Ongkir</h3>
        <p class="text-gray-600">Untuk pembelian di atas Rp 300.000 ke seluruh Indonesia.</p>
      </div>
      <div class="p-6 bg-white rounded-xl shadow hover:shadow-lg transition duration-300">
        <h3 class="text-xl font-semibold text-blue-700 mb-2">Pembayaran Aman</h3>
        <p class="text-gray-600">Didukung berbagai metode seperti e-wallet, transfer, dan lainnya.</p>
      </div>
      <div class="p-6 bg-white rounded-xl shadow hover:shadow-lg transition duration-300">
        <h3 class="text-xl font-semibold text-blue-700 mb-2">Garansi Produk</h3>
        <p class="text-gray-600">Pengembalian mudah jika produk tidak sesuai ekspektasi.</p>
      </div>
    </div>
  </div>
</template>


<script setup>
import { useHead } from '#imports'
useHead({
  title: 'Home - Toko Online Lagikoding',
  meta: [
    {
      name: 'description',
      content: 'Selamat datang di toko online terbaik, temukan berbagai produk dengan harga terbaik.',
    },
  ],
});
</script>

<style scoped>
@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes zoom-in {
  from {
    opacity: 0;
    transform: scale(0.9);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in-down {
  animation: fade-in-down 0.8s ease-out;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out;
}

.animate-zoom-in {
  animation: zoom-in 1s ease-out;
}
</style>
