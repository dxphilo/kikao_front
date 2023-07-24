<script  setup lang="ts">
import { reviewers } from '~/config/reviewers'
</script>

<template>
  <div class="w-full flex object-cover">
    <div class="mx-auto w-full pt-28 lg:w-3/5">
      <h1 class="text-center text-3xl font-extrabold leading-snug tracking-wide text-slate-900 lg:text-6xl md:text-4xl">
        Discover Great Products, <br> Services, and Businesses
      </h1>
      <p class="leading[20px] !important whitespace-pre-line pt-8 text-center font-light text-gray-500 sm:text-lg dark:text-gray-400">
        Let your customers be your best brand ambassadors with reviews
      </p>
      <div class="flex flex-col items-center justify-center gap-y-2 pt-6">
        <div class="flex items-center text-base space-x-2">
          <h4 class="font-semibold text-slate-900">
            Reviewers
          </h4>
          <span class="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">2,000+</span>
        </div>
        <div class="mt-3 flex overflow-hidden -space-x-2">
          <img v-for="(reviewer, index) in reviewers" :key="index" class="inline-block h-12 w-12 rounded-full bg-cover object-cover ring-2 ring-white" :src="reviewer" :alt="reviewer">
        </div>
        <div class="mt-3 text-sm font-medium">
          <p class="text-green-400">
            +{{ (2000 - reviewers.length).toLocaleString('en-US') }} others
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

  <style scoped>
</style>
