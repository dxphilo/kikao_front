<script lang="ts" setup>
import type { Review } from '~/types'

withDefaults(
  defineProps<{
    reviewer: Review
  }>(),
  {},
)

// TODO: allow sharing of home reviews to social network
</script>

<template>
  <div class="w-[360px] border border-gray-200 rounded-lg p-6 shadow-sm hover:bg-slate-50">
    <p class="normal_text">
      {{ reviewer.text.length > 450 ? `${reviewer.text.slice(0, 450)}...` : reviewer.text }}
    </p>
    <div class="flex pt-3">
      <img class="avatar_icon" :src="reviewer.user.photo" alt="&{reviewer.user.full_name} business review on kikao">
      <div class="ml-3 flex gap-x-8 gap-y-1">
        <div>
          <p class="text-base">
            {{ reviewer.user.full_name }}
          </p>
          <div class="flex items-center text-sm">
            <IconsStartFull v-for="(star, index) in Number(reviewer.rating)" :key="index" class="star text-yellow-500" />
            <IconsStartFull v-for="(star, idx) in (5 - Number(reviewer.rating))" :key="idx" class="star text-gray-500" />
            <p class="font-gray-500 text-sm font-light">
              ({{ reviewer.rating }})
            </p>
          </div>
        </div>
        <p class="date">
          {{ formatDate(reviewer.created_at) }}
        </p>
      </div>
    </div>
  </div>
</template>
