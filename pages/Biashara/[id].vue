<script setup lang="ts">
import { reviews } from '~/constants/reviews'

// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: 'profile-layout',
})
</script>

<template>
  <div class="mx-auto w-full flex flex-col items-center gap-y-7 pb-10 pt-6 md:w-4/5">
    <BusinessReview v-for="(review, index) in reviews" :key="index" :review="review" />
  </div>
</template>
