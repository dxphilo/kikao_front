<script lang="ts" setup>
import CheckCircleIcon from './icons/CheckCircleIcon.vue'
</script>

<template>
  <div class="mx-auto w-3/5">
    <div class="py-10">
      <h1 class="header_text">
        Why you should join us
      </h1>
      <p class="b_text text-center">
        Let your customers be your best brand ambassadors
      </p>
    </div>

    <div class="w-full flex items-center py-20 md:gap-x-20">
      <div class="w-full lg:w-1/2">
        <div class="py-4">
          <div class="flex items-center gap-x-4 py-2 text-2xl text-[#222222]">
            <CheckCircleIcon class="text-green-500" />
            <h1 class="font-bold">
              Businesses
            </h1>
          </div>
          <p class="normal_text py-3">
            Receive genuine ratings, reviews and feedback from your customers. Gain insight into customer preferences and boost your revenue
          </p>
        </div>
        <div class="py-4">
          <div class="flex items-center gap-x-4 py-2 text-2xl text-[#222222]">
            <CheckCircleIcon class="text-green-500" />
            <h1 class="font-semibold">
              Consumers
            </h1>
          </div>
          <p
            class="normal_text py-3"
          >
            Read unbiased ratings and reviews to make better choices. Share your personal story with products, services and Businesses
          </p>
        </div>
      </div> <!-- image showcase -->
      <div class="hidden w-1/2 lg:block">
        <img src="https://images.pexels.com/photos/6466293/pexels-photo-6466293.jpeg?auto=compress&cs=tinysrgb&w=1600" class="w-full bg-cover object-cover" alt="" srcset="">
      </div>
    </div>
  </div>
</template>
