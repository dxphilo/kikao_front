<script setup>
import CheckIcon from '~/components/icons/CheckIcon.vue'

const plans = [
  {
    name: 'Free plan',
    price: '0',
    packs: ['1 business', 'Register 1 business', 'No-API Access', 'No verification'],
  },
  {
    name: 'Standard plan',
    price: '19',
    packs: ['Multiple business', 'Register many businesses', 'API Access', 'verification'],
  },
]
</script>

<template>
  <div class="flex items-center justify-center gap-x-8 py-30">
    <div v-for="{ name, price, packs, index } in plans" :key="index" class="max-w-sm w-full border border-gray-200 rounded-lg bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 sm:p-8">
      <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
        {{ name }}
      </h5>
      <div class="flex items-baseline text-gray-900 dark:text-white">
        <span class="text-3xl font-semibold">$</span>
        <span class="text-5xl font-extrabold tracking-tight">{{ price }}</span>
        <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
      </div>
      <ul role="list" class="my-7 space-y-5">
        <li v-for="(pack, idx) in packs" :key="idx" class="flex items-center space-x-3">
          <CheckIcon />
          <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{{ pack }}</span>
        </li>
      </ul>
      <button type="button" class="w-full inline-flex justify-center rounded-lg bg-green-600 px-5 py-3 text-center text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-900">
        Choose plan
      </button>
    </div>
  </div>
</template>
