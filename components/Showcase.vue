<script  setup lang="ts">
const image_slider = ref<string>('')
const images = [
  '/images/artem-beliaikin-jt9Lnsmq-3Y-unsplash.jpg',
  '/images/clark-street-mercantile-qnKhZJPKFD8-unsplash.jpg',
  '/images/nrd-D6Tu_L3chLE-unsplash.jpg',
  '/images/qui-nguyen-S6atLH5Rf0U-unsplash.jpg',
  'heather-m-edwards-iMER-LjhSlM-unsplash.jpg',
]
function imageSliders() {
  const randomIndex = Math.floor(Math.random() * images.length)
  image_slider.value = images[randomIndex]
}
onMounted(() => {
  // Initial call
  imageSliders()

  // Set up interval to change the image every 5 seconds
  setInterval(() => {
    imageSliders()
  }, 5000)
})
</script>

<template>
  <div class="relative h-[500px] w-full flex bg-cover bg-center object-cover" :style="`background-image: url('${image_slider}');`">
    <!-- Overlay div for text readability -->
    <div class="absolute inset-0 bg-black opacity-60" />
    <div class="relative z-10 mx-auto w-full pt-28 text-white lg:w-3/5">
      <div class="py-4 text-white header_text">
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
      <!-- <div class="flex flex-col items-center justify-center gap-y-2 pt-6">
        <div class="flex items-center text-base space-x-2">
          <h4 class="font-medium text-slate-900">
            Reviewers
          </h4>
          <span class="rounded-full bg-slate-200 px-2 py-1 text-xs font-semibold text-slate-700">{{ all_reviews.length }}+</span>
        </div>
        <div class="flex overflow-hidden py-3 -space-x-2">
          <img v-for="(reviewer, index) in reviewers" :key="index" class="inline-block avatar_icon ring-2 ring-white" :src="reviewer.user.photo" :alt="`${reviewer.user.full_name} reviewer photo`">
        </div>
        <div class="text-sm font-medium">
          <p class="text-green-500">
            +{{ (2000 - reviewers.length).toLocaleString('en-US') }} others
          </p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
</style>
