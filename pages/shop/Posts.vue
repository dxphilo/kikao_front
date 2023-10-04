<script setup lang="ts">
definePageMeta({
  layout: 'profile-layout',
})
const posts = ref([])
</script>

<template>
  <div v-if="!posts" class="flex items-center justify-center py-20">
    <h1>There are no posts for this business, please come back later</h1>
  </div>
  <div v-else class="flex items-center justify-center py-20">
    <p>render the posts Here</p>
  </div>
</template>
