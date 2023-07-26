<script setup lang="ts">
import type { Person } from '@/types/'
import TeamMember from '~/components/Team/TeamMember.vue'

const teamMembers: Person[] = [
  {
    name: 'John Philip',
    twitter: 'https://twitter.com/amjohnphilip',
    avatar: 'https://avatars.githubusercontent.com/u/60175531?v=4',
    github: 'https://www.github.com/dxphilo',
    role: 'Engineering',
    website: 'https://www.johnphilip.dev',
  },
  {
    name: 'Your name here',
    twitter: 'https://twitter.com/kikaohq',
    avatar: 'https://mkpusa.org/wp-content/uploads/2015/04/YourFace.jpg',
    github: '',
    role: 'Your role here',
    website: 'Your website here',
  },
]
</script>

<template>
  <section class="min-h-screen bg-white dark:bg-gray-900">
    <div class="mx-auto px-6 py-20 container">
      <h1
        class="h2 text-center text-3xl font-medium lg:text-4xl dark:text-white"
      >
        Our Team
      </h1>
      <p class="py-14 text-center font-light text-gray-500 sm:text-xl dark:text-gray-400">
        Meet the team behind Kikao
      </p>
      <div class="mx-auto w-4/5 flex flex-wrap items-center justify-center gap-x-20 py-10">
        <TeamMember
          v-for="(member, index) in teamMembers"
          :key="index"
          :profile="member"
        />
      </div>
      <div
        class="mx-auto w-2/4 flex flex-wrap items-center justify-center py-10"
      >
        <p class="text-center font-light text-gray-500 sm:text-lg dark:text-gray-400">
          If you believe in this project, are a team player, ready to roll up
          your sleeves and help drive the project forward and bring our vision
          to life, then we would love to hear from you! Please reach out by email
          at
          <a
            class="text-green-600 underline underline-offset-6 hover:text-green-700"
            href="mailto:developerphilo@gmail.com?subject=Kikao&body=Lets%20Build%20Kikao"
          >contactkikao@gmail.com</a>. Together, we can build something truly special and make a real
          impact.
        </p>
      </div>
    </div>
  </section>
</template>
