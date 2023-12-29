<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue'
</script>

<template>
  <SpeedInsights />
  <main>
    <Header />
    <slot />
    <Footer v-if="$route.path !== '/register'" />
  </main>
</template>
