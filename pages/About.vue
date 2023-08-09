<script setup lang="ts">
import { useHead } from 'unhead'

useHead({
  title: 'About - Kikao',
})
</script>

<template>
  <div class="mx-auto min-h-screen w-4/5 lg:w-2/5">
    <div class="pt-32 text-center header_text">
      <h1>
        Empowering businesses to reach their potential customers
      </h1>
    </div>
    <p class="py-4 text-center b_text">
      Let your customers be your best brand ambassadors.
    </p>
    <div class="flex items-center justify-center gap-4 pt-8 text-sm">
      <RouterLink to="/register" class="btn_inner_green">
        Get Started
      </RouterLink>
      <RouterLink to="/pricing" class="btn_inner">
        View Pricing
      </RouterLink>
    </div>
  </div>
</template>
