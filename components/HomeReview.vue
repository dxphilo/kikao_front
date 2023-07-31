<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue'
import type { Reviewer } from '~/types'

withDefaults(
  defineProps<{
    reviewer: Reviewer
  }>(),
  {},
)

// TODO: allow sharing of home reviews to social network
</script>

<template>
  <div class="w-[360px] border border-gray-200 rounded-lg p-6 shadow-sm hover:bg-slate-50">
    <p class="py-2 text-base font-light text-gray-500">
      "{{ reviewer.review.length > 450 ? `${reviewer.review.slice(0, 450)}...` : reviewer.review }}"
    </p>
    <div class="flex pt-3">
      <img class="h-12 w-12 cursor-pointer rounded-full bg-cover object-cover" :src="reviewer.avatar" alt="&{reviewer.name}">
      <div class="ml-3 flex gap-x-8 gap-y-1">
        <div>
          <p class="text-base">
            {{ reviewer.name }}
          </p>
          <div class="flex items-center text-sm">
            <IconsStartFull v-for="(star, index) in Number(reviewer.rating)" :key="index" class="text-yellow-500" />
            <IconsStartFull v-for="(star, idx) in (5 - Number(reviewer.rating))" :key="idx" class="text-gray-500" />
            <p class="font-gray-500 text-sm font-light">
              ({{ reviewer.rating }})
            </p>
          </div>
        </div>
        <p class="text-sm font-light text-gray-400">
          {{ formatDate(reviewer.createdAt) }}
        </p>
      </div>
    </div>
  </div>
</template>
