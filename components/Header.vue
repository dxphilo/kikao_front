<script setup lang="ts">
import LogoIcon from '@/components/icons/LogoIcon.vue'
import KenyanFlag from '@/components/icons/KenyanFlag.vue'

const { status, data, signOut } = useAuth()

const route = useRoute()

const isExcluded = computed(() => {
  const excludedPaths = ['/register', '/blog', '/about']
  const currentPath = route.path
  if (excludedPaths.includes(currentPath))
    return true
  if (currentPath.startsWith('/biashara/'))
    return true

  return false
})

// function togglePopup() {
//   rootStore.toggleShowAddPopup()
// }
</script>

<template>
  <div class="sticky top-0 z-90 bg-gray-50">
    <nav class="mx-auto w-4/5 flex items-center justify-center justify-between py-1 lg:w-2/3">
      <div>
        <router-link
          to="/" class="flex transform items-center justify-center gap-x-2 text-xl font-normal tracking-wide transition-colors duration-300 dark:text-white"
        >
          <LogoIcon class="inline h-7 w-7 text-green-500" />
          <h1 class="text-center text-xl font-medium text-[#222222]">
            Kikao
          </h1>
        </router-link>
      </div>
      <div class="flex items-center justify-center gap-x-8 text-[15px] font-light text-gray-500 text-gray-500 lg:gap-x-8">
        <router-link
          v-if="!isExcluded"
          to="/category" class="hidden lg:block hover:text-gray-900 hover:underline hover:underline-offset-8"
          :class="$route.path === '/category' ? ` text-gray-900 underline underline-offset-8` : ` `"
        >
          Businesses
        </router-link>
        <router-link
          v-if="!isExcluded"
          to="/reviews" class="hidden lg:block hover:text-gray-900 hover:underline hover:underline-offset-8"

          :class="$route.path === '/reviews' ? ` text-gray-900 underline underline-offset-8` : ` `"
        >
          Reviews
        </router-link>
        <router-link
          v-if="!isExcluded"
          to="/resume" class="hidden lg:block hover:text-gray-900 hover:underline hover:underline-offset-8"
          :class="$route.path === '/resume' ? ` text-gray-900 underline underline-offset-8` : ` `"
        >
          Write a review
        </router-link>
        <router-link
          v-if="status === 'authenticated'"
          to="/register" class="flex items-center justify-center gap-x-2 border border-gray-400 rounded-full px-3 py-2 text-center text-black lg:block hover:bg-gray-100 hover:text-gray-900"
          :class="$route.path === '/register' ? ` bg-gray-100 ` : ` `"
        >
          <p> <IconsAddIcon class="mr-1 inline text-black" />Add a business</p>
        </router-link>
        <router-link
          v-if="status === 'unauthenticated' && route.path !== '/signup'"
          class="flex cursor-pointer items-center rounded-full bg-green-500 px-4 py-2.5 text-center text-sm text-white hover:bg-green-600"
          to="/signup"
        >
          <IconsAddIcon class="h-4 w-4 text-white transition-colors duration-200" />
          Create free account
        </router-link>
        <div v-if="status === 'authenticated'" @click="signOut()">
          <img v-if="data?.user?.image" :src="data.user.image" :alt="`${data.user.name} avatar image`" srcset="" class="h-9 w-9 rounded-full">
        </div>
        <div>
          <KenyanFlag class="h-6 w-6 rounded-md" />
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
.dropdown:focus-within .dropdown-menu {
  opacity:1;
  transform: translate(0) scale(1);
  visibility: visible;
  z-index: 999;
}
</style>
