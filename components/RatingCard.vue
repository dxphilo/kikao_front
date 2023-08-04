<script setup lang="ts">
import NextIcon from '@/components/icons/NextIcon.vue'
import PreviousIcon from '@/components/icons/PreviousIcon.vue'

import type { businesstype } from '@/types'

const props = withDefaults(
  defineProps<{
    business: businesstype
  }>(),
  {},
)

const imageIndex = ref<number>(0)
const showPrevNext = ref<boolean>(false)

// methods
function handleNextImage() {
  if (imageIndex.value < props.business.images.length - 1)
    imageIndex.value++
}

function handlePreviousImage() {
  if (imageIndex.value > 0)
    imageIndex.value--
}
</script>

<template>
  <transition name="fade">
    <div class="my-4 w-full overflow-hidden bg-white md:w-[330px]">
      <div
        class="mx-auto w-full"
      >
        <div
          id="default-carousel"
          class="relative"
          data-carousel="static"
          @mouseenter="showPrevNext = true"
          @mouseleave="showPrevNext = false"
        >
          <transition name="fade">
            <img
              :src="props.business.images[imageIndex]"
              alt="business listing image from kikao"
              loading="eager"
              fetchpriority="true"
              class="h-[420px] w-full border border-gray-200 rounded-xl bg-cover object-cover object-center duration-700 ease-in-out md:h-[300px] hover:cursor-pointer"
              width="280"
              height="280"
            >
          </transition>
          <!-- Slider indicators -->
          <div
            v-if="props.business.images.length > 1"
            class="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 space-x-2"
          >
            <button
              v-for="but in props.business.images"
              :key="but"
              type="button"
              class="h-1.5 w-1.5 rounded-full"
              :class="
                but === props.business.images[imageIndex]
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
            v-if="props.business.images.length > 1 && showPrevNext && imageIndex > 0"
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
            v-if="props.business.images.length > 1 && showPrevNext && !(imageIndex === business.images.length - 1)"
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
        <div class="">
          <router-link :to="`/biashara/${business.id}`" class="hover:bg-gray-100">
            <div class="">
              <div class="flex items-center justify-between pt-1">
                <p class="truncate pt-2 text-[16px] font-medium text-black">
                  {{ props.business.name }}
                </p>
                <div class="flex items-center gap-x-.5">
                  <IconsStartFull
                    class="h-5 w-5 text-yellow-500"
                  />
                  <span class="font-medium text-gray-800">{{ business.reviewScore }}</span>
                </div>
              </div>
              <div class="flex flex-row justify-between py-1">
                <p class="normal_text flex flex-row items-center gap-x-2 capitalize">
                  <IconsLocation class="icon text-gray-900" />
                  {{ business.town }}
                </p>
                <p class="normal_text capitalize">
                  {{ business.category }}
                </p>
              </div>
              <div class="flex items-center justify-between gap-x-3 truncate py-1 text-[14px] text-gray-500">
                <div class="flex items-center gap-x-2">
                  <p class="truncate text-[16px] font-medium text-black">
                    {{ business.reviews > 1 ? business.reviews : 0 }}
                  </p>
                  <p class="text-center text-base font-light text-gray-500 dark:text-gray-400">
                    {{ business.reviews > 1 ? `Reviews` : `Review` }}
                  </p>
                </div>
                <div class="flex items-center gap-x-2 truncate text-[16px] text-gray-500">
                  <IconsOpenDoor v-if="business.opening" class="h-5 w-5" />
                  <IconsDoorClosed v-else class="h-5 w-5" />
                  <p
                    class="text-base font-light"
                    :class="business.opening ? ` text-green-500` : ` text-red-500`"
                  >
                    {{ business.opening ? `Open now` : `Closed` }}
                  </p>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
