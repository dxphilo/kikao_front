<script setup lang="ts">
import { businesses as Biz } from '~/constants'

const businesses = ref(Biz)

const businessChunks = computed(() => {
  return businesses.value.slice(0, 6)
})

// methods
</script>

<template>
  <div class="mx-auto w-4/5">
    <div class="py-10 text-center">
      <h2 class="block text-center text-5xl font-bold text-[#222222]">
        Top rated businesses
      </h2>
      <p class="pt-4 text-center text-xl font-light text-gray-500 dark:text-gray-400">
        Empowering local businesses
      </p>
    </div>
    <div class="w-full flex flex-wrap items-center justify-center gap-8 pb-10">
      <RatingCard
        v-for="(chunk, index) in businessChunks" :key="index"
        :business="chunk"
      />
    </div>
  </div>
</template>
