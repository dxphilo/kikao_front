<script setup lang="ts">
import { useHead } from 'unhead'
import { categories } from '~/config/categories'

useHead({
  title: 'Category - Kikao',
})
</script>

<template>
  <div class="category h-72 w-full flex items-center justify-center">
    <div>
      <h1 class="py-5 header_text">
        Categories
      </h1>
      <p class="py-3 text-center text-xl font-light text-white dark:text-gray-400">
        Browse popular categories
      </p>
    </div>
  </div>
  <div class="py-10">
    <div class="mx-auto w-3/5 flex flex-wrap gap-x-6 gap-y-8 py-10">
      <RouterLink

        v-for="(category, index) in categories" :key="index
        "
        :to="`/category/${category.icon}`"
        class="verflow-hidden relative h-64 w-[310px] cursor-pointer overflow-hidden border border-gray-200 rounded bg-white hover:bg-gray-100 hover-shadow"
      >
        <img :src="category.image" :alt="category.name" srcset="" class="h-full w-full">
        <div class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-65 p-4 text-center text-white hover:bg-gray-800">
          <div>
            <h3 class="text-center text-2xl font-normal -top-10">
              {{ category.name }}
            </h3>
            <p class="py-2 text-center font-normal text-gray-400">
              {{ category.description }}
            </p>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.category{
  background-image: url('../../components/category.svg');
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
}
</style>
