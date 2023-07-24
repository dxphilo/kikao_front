<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
import type { Person } from '@/types'

withDefaults(
  defineProps<{
    profile: Person
  }>(),
  {},
)
</script>

<template>
  <div class="grid gap-8">
    <div class="text-center text-gray-500 dark:text-gray-400">
      <img class="h-36 w-36 rounded" :src="profile.avatar" :alt="profile.name">
      <h3 class="pt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <a href="#">{{ profile.name }}</a>
      </h3>
      <p class="font-gray-500 pt-3 font-light">
        {{ profile.role }}
      </p>
      <ul class="mt-4 flex justify-center space-x-4">
        <li class="h-10 w-10 flex cursor-pointer items-center justify-center rounded-full hover:border hover:bg-gray-300">
          <a :href="profile.twitter" class="h-6 w-6 flex items-center justify-center text-[#00acee] hover:text-gray-900 dark:hover:text-white">
            <IconsSocialsTwitter />
          </a>
        </li>
        <li class="h-10 w-10 flex cursor-pointer items-center justify-center rounded-full hover:border hover:bg-gray-300">
          <a :href="profile.github" class="text-gray-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            <IconsSocialsGithub />
          </a>
        </li>
        <li class="h-10 w-10 flex cursor-pointer items-center justify-center rounded-full hover:border hover:bg-gray-300">
          <a :href="profile.website" class="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white">
            <IconsSocialsWebsite />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
