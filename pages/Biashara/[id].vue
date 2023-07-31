<script setup lang="ts">
import { useBusinessesStore } from '~/store/businesses'
import { useReviewStore } from '~/store/reviews'

const businessesStore = useBusinessesStore()
const reviewStore = useReviewStore()
const route = useRoute()

// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: 'profile-layout',
})

const reviews = computed(() => reviewStore.$state.business_review[`${route.params.id}`])

businessesStore.fetchBusiness(route.params.id as string)
</script>

<template>
  <div class="mx-auto w-full py-10 md:w-4/5">
    <div class="flex flex-row gap-3">
      <BusinessReview v-for="(review, index) in reviews" :key="index" :review="review" />
    </div>
  </div>
</template>
