<script setup lang="ts">
import { categories } from '~/config/categories'
</script>

<template>
  <div class="mx-auto w-3/5 py-10">
    <div class="py-10 text-center">
      <h1 class="text-center text-5xl font-medium leading-snug tracking-wide text-slate-900">
        Categories
      </h1>
      <p class="pt-4 text-center text-lg font-light text-gray-500 dark:text-gray-400">
        Browse popular categories
      </p>
    </div>
    <div class="w-full flex flex-wrap justify-center gap-7 pt-10">
      <RouterLink
        v-for="(category, index) in categories"
        :key="index
        " :to="`/category/${category.icon}`"
        class="w-[310px] cursor-pointer border border-gray-300 rounded-lg bg-white p-8 hover:bg-gray-100"
      >
        <div class="flex items-center justify-center py-5">
          <component :is="category.iconComponent" class="h-12 w-12" />
        </div>

        <h3 class="text-center text-xl font-semibold text-[#222222]">
          {{ category.name }}
        </h3>
        <p class="pt-2 text-center text-base font-light text-gray-500 dark:text-gray-400">
          {{ category.description }}
        </p>
      </RouterLink>
    </div>
  </div>
</template>
