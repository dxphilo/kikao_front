<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
import { reactions } from '@/config/Reactions'
import type { Review } from '~/types'
import { formatDate } from '~/utils'

withDefaults(
  defineProps<{
    review: Review
  }>(),
  {},
)

const showFullText = ref(false)
const showShare = ref(false)

function toggleText() {
  showFullText.value = !showFullText.value
}
</script>

<template>
  <div class="mx-20 w-full border border border-gray-300 rounded-lg p-8 md:mx-0 md:w-3/5">
    <div class="fle-row flex justify-between">
      <div class="flex items-center gap-x-6">
        <img class="h-14 w-14 cursor-pointer rounded-full bg-cover object-cover" :src="`${review.image}`" alt="Kikao reviewr avatar image" loading="eager">
        <div>
          <div class="flex items-center justify-between">
            <h1 class="text-[18px] font-semibold">
              {{ review.name }}
            </h1>
          </div>
          <div class="flex items-center pt-1">
            <IconsStartFull
              v-for="i in review.rating" :key="i"
              class="h-4 w-4 text-yellow-500"
            />
            <IconsStartFull v-for="i in (5 - review.rating)" :key="i" class="h-4 w-4" />
          </div>
        </div>
      </div>
      <div class="flex items-center gap-x-4">
        <p class="text-[14px] text-gray-400">
          {{ formatDate(review.createdAt) }}
        </p>
        <button class="h-12 w-12 flex items-center justify-center border border-gray-200 rounded-full hover:bg-gray-100" @click="showShare = !showShare">
          <IconsShareFat class="h-5 w-5" />
        </button>
      </div>
    </div>
    <div class="pt-4">
      <p class="font-light leading-7 text-gray-500">
        {{ showFullText ? `${review.text}` : `${review.text.slice(0, 500)}...` }}
        <span v-if="review.text.length > 500" class="cursor-pointer text-sky-400 underline underline-offset-4 hover:text-sky-600" @click="toggleText()"> {{ showFullText ? `Show less` : `Read more` }}</span>
      </p>
      <div class="flex gap-x-3 pt-5">
        <button v-for="(reaction, index) in reactions" :key="index" class="flex items-center gap-x-2 border rounded-full bg-gray-100 px-4 py-1 text-center text-[15px] hover:bg-gray-200">
          <component :is="reaction.iconComponent" class="h-5 w-5 rounded-full" />
          <p class="text-xs">
            1
          </p>
        </button>
      </div>
      <div class="pt-5">
        <button class="gap-x-4 border border-gray-200 rounded-full px-3 py-1 text-center text-[15px] hover:bg-gray-300">
          Reply
        </button>
      </div>
    </div>
  </div>
  <div>
    <PopupsShareComment v-if="showShare" :review="review" @close="showShare = !showShare" />
  </div>
</template>
