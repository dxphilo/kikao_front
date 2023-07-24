<script setup lang="ts">
definePageMeta({
  layout: 'profile-layout',
})
</script>

<template>
  <div class="mx-auto w-full flex flex-col items-center gap-y-14 pb-10 pt-6 md:w-4/5">
    <BusinessReview v-for="i in 10" :key="i" />
  </div>
</template>
