<script setup lang="ts">
import { defineEmits, defineProps, withDefaults } from 'vue'

import XIcon from '@/components/icons/XIcon.vue'

const props = withDefaults(
  defineProps<{
    image: string[]
  }>(),
  {},
)

defineEmits(['close'])
const index = ref<number>(0)

// methods
function handleNext() {
  if (index.value === (props.image.length - 1))
    return

  index.value = index.value + 1
}

function handlePrev() {
  if (index.value === 0)
    return

  index.value = index.value - 1
}
</script>

<template>
  <!-- Photo popup -->
  <div
    class="popup modal-animation fixed bottom-0 left-0 right-0 top-0 z-30 h-screen w-full flex flex-col items-center justify-center bg-gray-800 bg-opacity-50 py-16 dark:bg-opacity-50"
    @click.self="$emit(`close`)"
  >
    <div class="mx-auto w-full flex items-center justify-center rounded-xl bg-white py-10 md:w-3/4">
      <div class="w-4/5 flex flex-col gap-x-4">
        <div class="mx-auto w-full flex justify-between md:w-3/4">
          <div class="flex gap-x-4">
            <img :src="props.image[index]" alt="" class="h-14 w-14 rounded-full bg-cover object-cover">
            <div>
              <p class="text-base font-semibold">
                John Philip
              </p>
              <p class="font-light text-gray-500">
                Shopping Salon
              </p>
            </div>
          </div>
          <button
            class="h-12 w-12 flex items-center justify-center border border-gray-300 rounded-full text-center hover:bg-gray-200 focus:outline-none"
            @click="$emit(`close`)"
          >
            <XIcon class="h-6 w-6" />
          </button>
        </div>
        <div class="relative py-10">
          <img
            :src="props.image[index]"
            alt=""
            srcset=""
            class="modal-content overflow-hiddenbg-cover relative m-0 mx-auto w-full object-cover md:w-4/5"
          >
          <button class="absolute left-0 top-1/2 h-5 w-5 flex transform items-center justify-center border border-gray-400 rounded-full bg-gray-200 md:h-14 md:w-14 -translate-y-1/2 hover:bg-gray-200" @click="handlePrev">
            <IconsPreviousIcon class="h-12 w-12 font-semibold text-gray-900" />
          </button>
          <button
            class="absolute right-0 top-1/2 h-5 w-5 flex transform items-center justify-center border border-gray-400 rounded-full bg-gray-200 md:h-14 md:w-14 -translate-y-1/2 hover:bg-gray-200" @click="handleNext"
          >
            <IconsNextIcon class="h-12 w-12 font-semibold text-gray-900" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
