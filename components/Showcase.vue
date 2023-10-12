<script  setup lang="ts">
import { useReviewStore } from '~/store/reviews'

const reviewStore = useReviewStore()

const reviewers = computed(() => reviewStore.$state.reviews)
</script>

<template>
  <div class="w-full flex object-cover">
    <div class="mx-auto w-full pt-28 lg:w-3/5">
      <div class="py-4 header_text">
        <h1>
          Discover Great Products,
        </h1>
        <h1>
          Services, and Businesses
        </h1>
      </div>

      <p class="text-center b_text">
        Let your customers be your best brand ambassadors with reviews
      </p>
      <div class="flex flex-col items-center justify-center gap-y-2 pt-6">
        <div class="flex items-center text-base space-x-2">
          <h4 class="font-medium text-slate-900">
            Reviewers
          </h4>
          <span class="rounded-full bg-slate-200 px-2 py-1 text-xs font-semibold text-slate-700">{{ reviewers.length }}+</span>
        </div>
        <div class="flex overflow-hidden py-3 -space-x-2">
          <img v-for="(reviewer, index) in reviewers" :key="index" class="inline-block avatar_icon ring-2 ring-white" :src="reviewer.user.photo" :alt="`${reviewer.user.full_name} reviewer photo`">
        </div>
        <div class="text-sm font-medium">
          <p class="text-green-500">
            +{{ (2000 - reviewers.length).toLocaleString('en-US') }} others
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

  <style scoped>
</style>
