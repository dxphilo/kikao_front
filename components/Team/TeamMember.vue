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
      <img class="team_avatar_icon" :src="profile.avatar" :alt="profile.name">
      <h3 class="pt-4 text-xl font-medium tracking-wide text-gray-900 dark:text-white">
        {{ profile.name }}
      </h3>
      <p class="normal_text">
        {{ profile.role }}
      </p>
      <ul class="flex py-2 space-x-1">
        <li class="team_social_icons">
          <a :href="profile.twitter" target="_blank" rel="noopener noreferrer" class="team_a_link">

            <IconsSocialsTwitter class="icon" />
          </a>
        </li>
        <li class="team_social_icons">
          <a :href="profile.github" target="_blank" rel="noopener noreferrer" class="team_a_link">
            <IconsSocialsGithub class="icon" />
          </a>
        </li>
        <li class="team_social_icons">
          <a :href="profile.website" target="_blank" rel="noopener noreferrer" class="text-[#ea4c89] team_a_link">

            <IconsSocialsWebsite class="icon" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
