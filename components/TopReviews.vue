<script setup lang="ts">
import { useReviewStore } from '~/store/reviews'
import Dropdown from '@/components/icons/Dropdown.vue'

const reviewStore = useReviewStore()
const start_review_slice = ref(0)
const stop_review_slice = ref(9)
const reviewers = computed(() => {
  const all_reviews = reviewStore.$state.reviews
  if (all_reviews.length > 9)
    return all_reviews.slice(start_review_slice.value, stop_review_slice.value)

  return all_reviews
},
)

function showMoreReviews() {
  stop_review_slice.value += 9
}
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
    <div v-if="reviewStore.$state.reviews.length > 9" class="flex justify-center py-9 b_text">
      <button class="hover:text-underline" @click="showMoreReviews">
        <Dropdown class="inline" /> show more reviews
      </button>
    </div>
  </div>
</template>
