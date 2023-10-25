<script setup lang="ts">
import NextIcon from '@/components/icons/NextIcon.vue'
import PreviousIcon from '@/components/icons/PreviousIcon.vue'
import { reactions } from '@/config/Reactions'
import type { Review } from '~/types'
import { formatDate } from '~/utils'

const props = withDefaults(
  defineProps<{
    review: Review
  }>(),
  {},
)

const showFullText = ref(false)
const showShare = ref(false)
const imageIndex = ref(0)
const showPrevNext = ref(false)
const showImages = ref(false)

function toggleText() {
  showFullText.value = !showFullText.value
}

// methods
function handleNextImage() {
  if (imageIndex.value < props.review.images.length - 1)
    imageIndex.value++
}

function handlePreviousImage() {
  if (imageIndex.value > 0)
    imageIndex.value--
}
console.log(props.review.text.length)
</script>

<template>
  <div class="w-[400px] border border-gray-200 rounded-lg px-5">
    <div class="fle-row flex justify-between pt-4">
      <div class="flex items-center gap-x-6">
        <img class="avatar_icon" :src="`${review.user.photo}`" alt="Kikao reviewer avatar image" loading="eager">
        <div>
          <div class="flex items-center justify-between">
            <h1 class="text-[14px] font-semibold">
              {{ review.user.full_name }}
            </h1>
          </div>
          <div class="flex items-center">
            <IconsStartFull
              v-for="i in review.rating" :key="i"
              class="star text-yellow-500"
            />
            <IconsStartFull v-for="i in (5 - review.rating)" :key="i" class="star text-gray-500" />
          </div>
        </div>
      </div>
      <div class="flex items-center gap-x-4">
        <p class="date">
          {{ formatDate(review.created_at) }}
        </p>
        <button class="h-9 w-9 flex items-center justify-center border border-gray-200 rounded-full hover:bg-gray-100" @click="showShare = !showShare">
          <IconsShareFat class="h-5 w-5" />
        </button>
      </div>
    </div>
    <div v-if="showImages">
      <div
        id="default-carousel"
        class="relative"
        data-carousel="static"
        @mouseenter="showPrevNext = true"
        @mouseleave="showPrevNext = false"
      >
        <transition name="fade">
          <img
            :src="review.images[imageIndex]"
            alt="business listing image from kikao"
            loading="eager"
            fetchpriority="true"
            class="h-[200px] w-full border border-gray-200 rounded-xl bg-cover object-cover object-center duration-700 ease-in-out hover:cursor-pointer"
            width="280"
            height="280"
          >
        </transition>
        <!-- Slider indicators -->
        <div
          v-if="review.images.length > 1"
          class="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 space-x-2"
        >
          <button
            v-for="but in review.images"
            :key="but"
            type="button"
            class="h-1.5 w-1.5 rounded-full"
            :class="
              but === review.images[imageIndex]
                ? ' bg-white'
                : ' bg-slate-400'
            "
            aria-current="false"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          />
        </div>
        <!-- Slider controls -->
        <button
          v-if="review.images.length > 1 && showPrevNext && imageIndex > 0"
          type="button"
          class="group absolute left-0 top-0 z-10 h-full flex cursor-pointer items-center justify-center px-8 focus:outline-none"
          data-carousel-prev
          @click="handlePreviousImage"
        >
          <span
            class="h-6 w-6 inline-flex items-center justify-center rounded-full bg-white group-hover:bg-white group-focus:outline-none group-focus:ring-4 group-focus:ring-white"
          >
            <PreviousIcon />
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          v-if="review.images.length > 1 && showPrevNext && !(imageIndex === review.images.length - 1)"
          type="button"
          class="group absolute right-0 top-0 z-10 h-full flex cursor-pointer items-center justify-center px-8 focus:outline-none"
          data-carousel-next
          @click="handleNextImage"
        >
          <span
            class="h-6 w-6 inline-flex items-center justify-center rounded-full bg-white group-hover:bg-white group-focus:outline-none group-focus:ring-4 group-focus:ring-white"
          >
            <NextIcon />
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
    <div class="pt-2">
      <p class="normal_text">
        {{ showFullText ? review.text : `${review.text.slice(0, 350)}...` }}
      </p>
      <span v-if="review.text.length > 350" class="cursor-pointer text-sky-400 underline underline-offset-4 hover:text-sky-600" @click="toggleText()"> {{ showFullText ? `Show less` : `Read more` }}</span>
      <div class="flex justify-between py-5">
        <div class="flex items-center gap-x-3">
          <button v-for="(reaction, index) in reactions" :key="index" class="flex items-center gap-x-2 btn_reaction">
            <component :is="reaction.iconComponent" class="h-5 w-5 rounded-full" />
            <p class="text-xs">
              1
            </p>
          </button>
        </div>
        <button class="btn_reaction">
          Reply
        </button>
      </div>
    </div>
  </div>
  <div>
    <PopupsShareComment v-if="showShare" :review="review" @close="showShare = !showShare" />
  </div>
</template>
