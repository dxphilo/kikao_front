<script setup lang="ts">
import LogoIcon from '@/components/icons/LogoIcon.vue'
import KenyanFlag from '@/components/icons/KenyanFlag.vue'
import HeaderDropdown from '@/components/HeaderDropdown.vue'

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
      <div class="flex items-center justify-center gap-x-8 text-[15px] font-light text-gray-500 text-gray-500 lg:gap-x-8">
        <router-link
          v-if="!isExcluded"
          to="/category" class="hidden lg:block hover:text-gray-900 hover:underline hover:underline-offset-8"
          :class="$route.path === '/category' ? ` text-gray-900 underline underline-offset-8` : ` `"
        >
          Businesses
        </router-link>
        <router-link
          v-if="status === 'authenticated' && route.path !== '/register'"
          to="/register" class="hidden flex items-center justify-center gap-x-2 lg:block btn"
          :class="$route.path === '/register' ? ` bg-gray-100 ` : ` `"
        >
          <p><IconsAddIcon class="mr-1 inline text-black" />Add a business</p>
        </router-link>
        <HeaderDropdown v-if="status === 'authenticated'" placement="right">
          <!-- Button content -->
          <template #button>
            <img v-if="data?.user?.image" class="mr-3 h-10 w-10 border-2 border-gray-600 rounded-full" :src="data.user.image" :alt="`${data.user.name} avatar image`">

            <span class="mr-2">{{ data.user.name }}</span>

            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z" />
            </svg>
          </template>

          <!-- Opened dropdown content -->
          <template #content>
            <a class="my-1 w-full flex items-center justify-between rounded px-2 py-1 hover:bg-indigo-600 hover:text-white" href="#">Profile</a>
            <a class="my-1 w-full flex items-center justify-between rounded px-2 py-1 hover:bg-indigo-600 hover:text-white" href="#">Settings</a>
            <a class="my-1 w-full flex items-center justify-between rounded px-2 py-1 hover:bg-indigo-600 hover:text-white" href="#">Help</a>

            <hr>

            <a class="my-1 w-full flex items-center justify-between rounded px-2 py-1 hover:bg-red-600 hover:text-white" @click="signOut()">Logout</a>
          </template>
        </HeaderDropdown>
        <router-link
          v-if="status === 'unauthenticated' && route.path !== '/signup' && route.path !== '/login'"
          class="btn"
          to="/login"
        >
          Log In
        </router-link>
        <router-link
          v-if="status === 'unauthenticated' && route.path !== '/signup'"
          class="btn_green"
          to="/signup"
        >
          Sign Up
        </router-link>
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
