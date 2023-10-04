<script setup lang="ts">
import { useHead } from 'unhead'
import { categories } from '~/config/categories'
import { useBusinessesStore } from '~/store/businesses'

useHead({
  title: 'Category - Kikao',
})

const route = useRoute()
const businessesStore = useBusinessesStore()

const category = computed(() => categories.find(category => category.icon === route.params.category))
const businesses = computed(() =>
  businessesStore.$state.businesses.filter(business => business.category === route.params.category),
)
</script>

<template>
  <div v-if="category">
    <div

      class="relative z-10 h-80 w-full bg-cover bg-center bg-no-repeat object-cover"
      :style="{ backgroundImage: `url(${category.image})` }"
    >
      <div class="absolute inset-0 bg-gray-900 opacity-75" />
      <div class="absolute inset-0 flex items-center justify-center text-center text-white">
        <div>
          <h2 class="py-5 text-center text-4xl font-extrabold leading-snug tracking-normal text-white lg:text-5xl">
            {{ category.name }}
          </h2>
          <p class="pt-4 text-center b_text">
            {{ category.description }}
          </p>
          <div class="flex items-center justify-center pt-4">
            <p class="flex items-center justify-center">
              <component :is="category.iconComponent" class="h-8 w-8" />
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="businesses.length > 0" class="w-full flex flex-wrap justify-center gap-x-6 gap-y-2 px-10 py-8">
      <RatingCard v-for="(business, index) in businesses" :key="index" :business="business" />
    </div>
    <div v-else class="flex items-center justify-center py-20 text-center">
      <div class="">
        <p class="b_text">
          Businesses for the category <span class="text-red-500">{{ route.params.category }}</span> are not available at the moment
        </p>
        <button class="my-10 btn_inner" @click="$router.push('/category')">
          Back to Categories
        </button>
      </div>
    </div>
  </div>
  <div v-else class="flex items-center justify-center py-48 text-center">
    <div>
      <p class="text-xl">
        The category <span class="text-red-500">{{ route.params.category }}</span> does not exist yet
      </p>
      <button class="my-8 rounded bg-green-400 px-6 py-3 text-white hover:bg-green-500" @click="$router.push('/category')">
        Go to Categories
      </button>
    </div>
  </div>
</template>
