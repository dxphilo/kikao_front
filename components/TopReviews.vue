<script setup lang="ts">
import { reviewes } from '~/config/reviewers'
</script>

<template>
  <div class="mx-auto w-4/5">
    <div class="py-10 text-center">
      <h2 class="block text-center text-5xl font-bold text-[#222222]">
        Top Reviews
      </h2>
      <p class="pt-4 text-center text-xl font-light text-gray-500 dark:text-gray-400">
        Let your customers be your best brand ambassadors
      </p>
    </div>
    <div class="w-full flex flex-wrap items-center justify-center gap-6 py-8">
      <HomeReview v-for="(reviewer, index) in reviewes" :key="index" :reviewer="reviewer" />
    </div>
  </div>
</template>
