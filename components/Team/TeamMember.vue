<script setup lang="ts">
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
    <div class="text-gray-500 dark:text-gray-400">
      <img class="h-36 w-36 rounded" :src="profile.avatar" :alt="profile.name">
      <h3 class="pt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <a href="#">{{ profile.name }}</a>
      </h3>
      <p class="font-gray-500 py-3 font-light">
        {{ profile.role }}
      </p>
      <ul class="flex space-x-1">
        <li class="h-8 w-8 flex cursor-pointer items-center justify-center rounded-full hover:border hover:bg-gray-200">
          <a :href="profile.twitter" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center text-black hover:text-gray-900 dark:hover:text-white">

            <IconsSocialsTwitter />
          </a>
        </li>
        <li class="h-8 w-8 flex cursor-pointer items-center justify-center rounded-full hover:border hover:bg-gray-300">
          <a :href="profile.github" target="_blank" rel="noopener noreferrer" class="text-gray-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            <IconsSocialsGithub />
          </a>
        </li>
        <li class="h-8 w-8 flex cursor-pointer items-center justify-center rounded-full hover:border hover:bg-gray-300">
          <a :href="profile.website" target="_blank" rel="noopener noreferrer" class="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white">

            <IconsSocialsWebsite />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
