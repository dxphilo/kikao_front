<script setup lang="ts">
import { useHead } from 'unhead'

useHead({
  title: 'About - Kikao',
})
</script>

<template>
  <div class="mx-auto min-h-screen w-4/5 lg:w-2/5">
    <div class="pt-32 text-center text-2xl font-medium tracking-wide text-black lg:text-4xl lg:leading-[45px]">
      <h1>
        Empowering businesses to reach their potential customers
      </h1>
    </div>
    <p class="py-4 text-center text-xl font-light text-gray-700">
      Let your customers be your best brand ambassadors.
    </p>
    <div class="flex items-center justify-center gap-4 pt-8 text-sm">
<<<<<<< HEAD
<<<<<<< HEAD
      <RouterLink to="/register" class="border border-green-400 rounded-full bg-green-400 px-8 py-3.5 text-white hover:bg-green-500">
=======
      <RouterLink to="/register" class="rounded-full bg-black px-8 py-3.5 text-white">
>>>>>>> e6c2f3d (fix: refactors + footer adjustments)
=======
      <RouterLink to="/register" class="border border-green-400 rounded-full bg-green-400 px-8 py-3.5 text-white hover:bg-green-500">
>>>>>>> bc7227f (fix: several fixes + intergration)
        Get Started
      </RouterLink>
      <RouterLink to="/pricing" class="border border-black rounded-full px-8 py-3.5 text-black hover:bg-gray-100">
        View Pricing
      </RouterLink>
    </div>
  </div>
</template>
