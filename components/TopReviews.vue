<script setup lang="ts">
import { useReviewStore } from '~/store/reviews'

const reviewStore = useReviewStore()

const reviewers = computed(() => reviewStore.$state.reviews)
</script>

<template>
  <div class="mx-auto w-4/5">
    <div class="py-10 text-center">
      <h2 class="header_text">
        Top reviews
      </h2>
      <p class="text-center b_text">
        Let your customers be your best brand ambassadors
      </p>
    </div>
    <div class="w-full flex flex-wrap items-center justify-center gap-6 py-8">
      <HomeReview v-for="(reviewer, index) in reviewers" :key="index" :reviewer="reviewer" />
    </div>
  </div>
</template>
