<script setup lang="ts">
import { useBusinessesStore } from '~/store/businesses'

const businessesStore = useBusinessesStore()

const route = useRoute()

businessesStore.fetchBusiness(route.params.id as string)
</script>

<template>
  <BusinessOverview />
</template>
