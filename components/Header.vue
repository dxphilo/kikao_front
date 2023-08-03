<script setup lang="ts">
import LogoIcon from '@/components/icons/LogoIcon.vue'
import KenyanFlag from '@/components/icons/KenyanFlag.vue'

const { status, data, signOut } = useAuth()

const route = useRoute()

const showdropdown = ref(false)

const isExcluded = computed(() => {
  const excludedPaths = ['/register', '/blog', '/about', '/login']
  const currentPath = route.path
  if (excludedPaths.includes(currentPath))
    return true
  if (currentPath.startsWith('/biashara/'))
    return true

  return false
})

function handleShow() {
  showdropdown.value = !showdropdown.value
}
</script>

<template>
  <div class="sticky top-0 z-20 bg-gray-50">
    <nav class="mx-auto w-4/5 flex items-center justify-center justify-between py-2 lg:w-2/3">
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
      {{ status }} <br>
      {{ data }}
      <div class="flex items-center justify-center gap-x-8 text-[15px] font-light text-gray-500 text-gray-500 lg:gap-x-8">
        <router-link
          v-if="!isExcluded"
          to="/category" class="hidden lg:block hover:text-gray-900 hover:underline hover:underline-offset-8"
          :class="$route.path === '/category' ? ` text-gray-900 underline underline-offset-8` : ` `"
        >
          Businesses
        </router-link>
        <router-link
          v-if="!isExcluded && status === 'unauthenticated'"
          to="/reviews" class="hidden lg:block hover:text-gray-900 hover:underline hover:underline-offset-8"
          :class="$route.path === '/reviews' ? ` text-gray-900 underline underline-offset-8` : ` `"
        >
          Write a review
        </router-link>
        <router-link
          v-if="status === 'authenticated' && route.path !== '/register'"
          to="/register" class="flex items-center justify-center gap-x-2 border border-gray-400 rounded-full px-3 py-2 text-center text-black lg:block hover:bg-gray-100 hover:text-gray-900"
          :class="$route.path === '/register' ? ` bg-gray-100 ` : ` `"
        >
          <p> <IconsAddIcon class="mr-1 inline text-black" />Add a business</p>
        </router-link>

        <router-link
          v-if="status === 'unauthenticated' && route.path !== '/signup' && route.path !== '/login'"
          class="flex cursor-pointer items-center border border-rounded-500 rounded-full px-4 py-2.5 text-center text-sm text-black"
          to="/login"
        >
          Log In
        </router-link>
        <router-link
          v-if="status === 'unauthenticated' && route.path !== '/signup'"
          class="flex cursor-pointer items-center rounded-full bg-green-500 px-4 py-2.5 text-center text-sm text-white hover:bg-green-600"
          to="/signup"
        >
          Sign Up
        </router-link>
        <div v-if="status === 'authenticated'" class="dropdown relative inline-block">
          <button class="inline-flex items-center text-center text-sm font-medium" type="button" @click="handleShow">
            <img v-if="data?.user?.image" :src="data.user.image" :alt="`${data.user.name} avatar image`" srcset="" class="h-9 w-9 rounded-full">
            <svg class="ml-2.5 h-2.5 w-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>
          <!-- Dropdown menu -->
          <ul class="dropdown-menu absolute hidden rounded-md pt-2 text-gray-700">
            <li class="">
              <a class="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-100 px-9 py-3 hover:bg-gray-400" href="#">Profile</a>
            </li>
            <li class="">
              <a class="whitespace-no-wrap block w-full cursor-pointer bg-gray-100 px-9 py-3 hover:bg-red-400" @click="signOut()">Logout</a>
            </li>
          </ul>
        </div>
        <div>
          <KenyanFlag class="h-5 w-5 rounded-md" />
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
