<script setup lang="ts">
import { useOnline } from '@vueuse/core'
import { useBusinessesStore } from './store/businesses'
import { appName } from '~/constants'
import { useRootStore } from '~/store/index'

const rootStore = useRootStore()
const businessesStore = useBusinessesStore()

const online = useOnline()

useHead({
  title: appName,
})

businessesStore.fetchBusinesses()
const showAddPopup = computed(() => rootStore.addPopupState)
</script>

<template>
  <div>
    <VitePwaManifest />
    <NuxtLayout>
      <NuxtPage
        v-if="online
        "
      />
      <div v-else class="h-[500px] py-20">
        <div class="flex flex-col items-center gap-y-4 text-center">
          <IconsOffline class="h-20 w-20" />
          <h1 class="text-xl font-semibold">
            It seems that you're offline
          </h1>
          <p class="py-3 font-light text-gray-500">
            Please check your connection and try again
          </p>
          <button class="rounded bg-green-500 px-10 py-2 text-white hover:bg-green-600" @click="location.reload()">
            Retry
          </button>
        </div>
      </div>
    </NuxtLayout>
    <div>
      <PopupsAddPost v-if="showAddPopup" @close="rootStore.toggleShowAddPopup" />
    </div>
  </div>
</template>

<style>
html, body , #__nuxt{
  margin: 0;
  padding: 0;
  background: white;
  color: black;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
}

html.dark {
  background: #222;
  color: white;
}
</style>
