<script setup lang="ts">
import { useBusinessesStore } from '~/store/businesses'

const businessesStore = useBusinessesStore()

const route = useRoute()

// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: 'profile-layout',
})

businessesStore.fetchBusiness(route.params.id as string)
</script>

<template>
  <div class="mx-auto w-full py-10 md:w-4/5" />
</template>
