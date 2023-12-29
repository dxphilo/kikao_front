<script setup lang="ts">
import { useHead } from 'unhead'
import { useReviewStore } from '~/store/reviews'
import { useBusinessesStore } from '~/store/businesses'
import { amenities } from '~/config/amenities'

const route = useRoute()
const reviewStore = useReviewStore()
const businessesStore = useBusinessesStore()

const showPopup = ref<boolean>(false)
const business_id = computed(() => route.params.id)
const business = computed(() => businessesStore.business_info[`${business_id.value}`])
const showAddReviewPopup = ref(false)

useHead({
  title: `${business.value ? business.value.name : 'Business'} - Kikao`,
})

const showShareBusiness = ref<boolean>(false)
const link = ref(window.location.href)

const reviews = computed(() => reviewStore.$state.business_review[`${route.params.id}`])
const amenitiesFromDB = computed(() => {
  return amenities.filter(amenity => business.value.amenities.includes(amenity.name))
})

businessesStore.fetchBusiness(route.params.id as string)
reviewStore.getBusinessReviews(route.params.id as string)
</script>

<template>
  <div v-if="business" class="py-10">
    <section
      class="mx-auto w-full pb-4 antialiased md:w-3/5"
    >
      <h2 class="text-2xl font-semibold text-gray-900">
        {{ business.name }}
      </h2>
      <div class="flex flex-row items-center justify-between gap-x-2 text-center">
        <div class="">
          <p class="flex flex-row items-center gap-x-2 b_text">
            <IconsLocation class="icon" />
            {{ business.county }}, {{ business.town }}
          </p>
        </div>
        <div class="flex items-center gap-x-3">
          <p class="flex cursor-pointer items-center gap-x-2 rounded-lg px-3 py-1 text-sm underline underline-offset-6 hover:bg-gray-100" @click="showShareBusiness = true">
            <IconsShareIcon class="icon" />
            Share
          </p>
          <p class="flex cursor-pointer items-center gap-x-2 rounded-lg px-3 py-1 text-sm underline underline-offset-6 hover:bg-gray-100">
            <IconsLoveIcon class="icon" />
            Save
          </p>
        </div>
      </div>
      <!-- images sesction -->
      <div class="my-4 w-full border border-gray-300">
        <!-- TODO: find a better way to diplay all the business images -->
        <img :src="business.images[0]" class="h-[400px] w-full bg-cover object-cover" alt="">
      </div>
      <!-- amenities setion -->
      <div class="pt-6">
        <p class="text-2xl font-semibold text-gray-900">
          What this business offers
        </p>
        <div class="flex flex-wrap items-center gap-x-10 gap-y-4 py-10">
          <div v-for="(amenity, index) in amenitiesFromDB" :key="index" class="flex items-center justify-center gap-x-2 text-center b_card">
            <component :is="amenity.iconComponent" class="h-7 w-7" />
            <p class="pt-3 normal_text">
              {{ amenity.name }}
            </p>
          </div>
        </div>
      </div>
      <!-- reviers -->
      <div class="pt-6">
        <div class="">
          <p class="py-3 text-2xl font-semibold text-gray-900">
            What people say about this business
          </p>
          <div class="py-4">
            <button class="flex items-center gap-x-2 btn" @click="showAddReviewPopup = !showAddReviewPopup">
              <IconsPen />
              Add Review
            </button>
          </div>
        </div>
        <div class="flex flex-row flex-wrap gap-x-3 gap-y-6 py-5">
          <BusinessReview v-for="(review, index) in reviews" :key="index" :review="review" />
        </div>
      </div>
    </section>
  </div>
  <div v-else class="py-50 text-center">
    <p>loading ...</p>
  </div>
  <div class="flex flex-col text-base font-semibold">
    <div>
      <NuxtPage />
    </div>
    <Teleport to="body">
      <PopupsBusinessImages v-if="showPopup" :image="business.images" @close="showPopup = !showPopup" />
      <PopupsAddReview v-if="showAddReviewPopup" @close="showAddReviewPopup = !showAddReviewPopup" />
      <PopupsShareBusiness v-if="showShareBusiness" :link="link" :business="business" @close="showShareBusiness = !showShareBusiness" />
    </Teleport>
  </div>
</template>

<style>
</style>
