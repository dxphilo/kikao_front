<script setup lang="ts">
import { useBusinessesStore } from '~/store/businesses'

const businessStore = useBusinessesStore()

const businessChunks = computed(() => businessStore.$state.businesses.slice(0, 6))

// methods
</script>

<template>
  <div class="mx-auto w-4/5">
    <div class="py-10 text-center">
      <h2 class="header_text">
        Top rated businesses
      </h2>
      <p class="text-center b_text">
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
