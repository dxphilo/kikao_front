<script setup lang="ts">
import { useHead } from 'unhead'
import ChatIcon from '@/components/icons/ChatIcon.vue'
import { useReviewStore } from '~/store/reviews'
import { useBusinessesStore } from '~/store/businesses'

const route = useRoute()
const router = useRouter()
const review = useReviewStore()
const businessesStore = useBusinessesStore()

const showPopup = ref<boolean>(false)
const business_id = computed(() => route.params.id)
const business = computed(() => businessesStore.business_info[`${business_id.value}`])
const showAddReviewPopup = ref(false)

useHead({
  title: `${business.value ? business.value.name : 'Business'} - Kikao`,
})

if (business_id)
  review.getBusinessReviews(String(business_id.value))

// methods
function handleReview() {
  if (route.name === 'Biashara-id')
    return

  router.go(-1)
}
</script>

<template>
  <div v-if="business">
    <section
      class="w-full pb-4 antialiased"
    >
      <header class="w-full">
        <div class="overview relative h-72 w-full bg-[url('https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover object-cover">
          <button class="absolute right-10 top-10 z-10 flex cursor-pointer items-center gap-x-1 border border-gray-200 rounded bg-white px-4 py-1.5 text-base md:right-40 hover:bg-gray-100" @click="showPopup = !showPopup">
            <IconsViewAllIcon class="h-6 w-6" />
            <p>
              View all {{ business.images.length }} photos
            </p>
          </button>
        </div>
      </header>
    </section>
    <div class="absolute left-1/4 top-77 mx-auto w-2/5 flex items-center justify-center rounded bg-white text-[18px]">
      <button
        class="group flex-1 py-4 text-center font-normal text-gray-500 hover:text-gray-900"
        :class="[$route.name === 'Biashara-id' ? ' border-b-2 border-gray-500 text-gray-900' : ' ']" @click="handleReview"
      >
        <div class="flex items-center justify-center px-4">
          <ChatIcon class="h-6 w-6" />
          <p>Reviews</p>
        </div>
      </button>
      <router-link
        to="/biashara/posts"
        class="group flex-1 py-4 text-center font-normal text-gray-500 hover:text-gray-900" :class="[$route.path === '/biashara/posts' ? ' border-b-2 border-gray-500 text-gray-900' : ' ']"
      >
        <div class="flex items-center justify-center gap-x-4">
          <IconsPostAdd class="h-6 w-6" />
          <p>Posts</p>
        </div>
      </router-link>
    </div>
    <div class="mx-auto w-full flex flex-col md:w-2/5">
      <div class="flex flex-col gap-x-2">
        <div class="flex flex-row items-center gap-x-1 pt-5">
          <h2 class="text-center text-5xl font-bold text-[#222222]">
            {{ business.name }}
          </h2>
          <IconsVerifiedIcon class="h-5 w-5 rounded-full text-indigo-500 -right-5" />
        </div>
        <div class="flex items-center gap-x-4 py-3">
          <p class="leading[20px] !important inline-flex whitespace-pre-line text-center text-[14px] font-light capitalize text-gray-400">
            {{ business.category }}
          </p>
          <div class="leading[20px] !important flex gap-x-4 whitespace-pre-line text-center text-[14px]">
            <div class="flex items-center gap-x-2">
              <IconsStartFull class="h-4 w-4 text-yellow-500" />
              <p class="font-medium">
                4.5
              </p>
              <p class="font-light text-gray-400">
                Rating
              </p>
            </div>
            <div class="flex items-center gap-x-2">
              <span class="font-medium">
                20 </span>
              <p class="leading[20px] !important inline-flex whitespace-pre-line text-[14px] font-light text-gray-400">
                reviews
              </p>
            </div>
            <div class="flex items-center gap-x-2">
              <span class="font-medium">
                30 </span>
              <p class="leading[20px] !important inline-flex whitespace-pre-line text-[14px] font-light text-gray-400">
                posts
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-x-10">
        <p class="leading[20px] !important inline-flex whitespace-pre-line text-center text-[17px] font-medium text-green-500">
          Open Now
        </p>

        <a href="http://" target="_blank" rel="noopener noreferrer" class="flex items-center gap-x-2"><IconsLinkExternal /> Website</a>
        <button
          to="/register"
          class="flex items-center justify-center gap-x-2 border border-gray-400 rounded-full px-4 py-2 text-center text-black lg:block hover:bg-gray-100 hover:text-gray-900" :class="$route.path === '/register' ? ` bg-gray-100 ` : ` `"
          @click=" showAddReviewPopup = !showAddReviewPopup"
        >
          Review business
        </button>
      </div>
    </div>
  </div>
  <div v-else>
    <p>loading ...</p>
  </div>
  <div class="flex flex-col text-base font-semibold">
    <div>
      <NuxtPage />
    </div>
    <Teleport to="body">
      <PopupsBusinessImages v-if="showPopup" :image="business.images" @close="showPopup = !showPopup" />
      <PopupsAddReview v-if="showAddReviewPopup" @close="showAddReviewPopup = !showAddReviewPopup" />
    </Teleport>
  </div>
</template>

<style>
.overview{
  background-image: url('https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
