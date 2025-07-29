<template>
    <header class="bg-blue-500 text-white py-4 shadow-md">
      <div class="container mx-auto px-6 flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-semibold text-white hover:text-gray-200 transition">
          Toko Online LagiKoding
        </NuxtLink>
  
        <nav>
          <ul class="flex space-x-6">
            <li v-for="item in menuItems" :key="item.name">
              <NuxtLink
                :to="item.path"
                class="relative px-3 py-2 transition hover:text-gray-200"
                :class="{ 'text-gray-200 font-semibold': $route.path === item.path }"
              >
                {{ item.name }}
                <span
                  v-if="$route.path === item.path"
                  class="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200"
                ></span>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <script setup>
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Produk", path: "/products" },
  ];
  </script>
  