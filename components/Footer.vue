<script setup lang="ts">
import LogoIcon from './icons/LogoIcon.vue'

const socials = [
  { name: 'Twitter', link: 'https://twitter.com/kikaohq' },
  { name: 'Facebook', link: 'https://www.facebook.com/kikaohq' },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/kikaohq' },
  { name: 'TikTok', link: 'https://www.tiktok.com/kikaohq' },
  { name: 'YouTube', link: 'https://www.youtube.com/kikaohq' },
]

const resources = [
  {
    name: 'Privacy',
    link: '/privacy',
  },
  {
    name: 'Guide',
    link: '/guide',
  },
  {
    name: 'Businesses',
    link: '/businesses',
  },
  {
    name: 'Customers',
    link: '/customers',
  },
  {
    name: 'Careers',
    link: '/careers',
  },
]

const product = [
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Blog',
    link: '/blog',
  },
  {
    name: 'Team',
    link: '/team',
  },
  {
    name: 'Docs',
    link: '/docs',
  },
  {
    name: 'Changelog',
    link: '/changelog',
  },
]

const Help = [
  {
    name: 'Contact',
    link: '/contact',
  },
  {
    name: 'Terms',
    link: '/terms',
  },
  {
    name: 'FAQ\'\s',
    link: '/faq',
  },
  {
    name: 'Report',
    link: '/issues',
  },
  {
    name: 'Github',
    link: '/github',
  },
]
</script>

<template>
  <footer
    class="bg-primary sticky border-t border-gray-200 pb-20 pt-10"
  >
    <div class="mx-auto w-3/5">
      <div class="flex flex-col lg:flex-row">
        <div
          class="h-full w-full flex items-center justify-center px-4 lg:justify-start lg:text-start"
        >
          <div class="bt-0 mb-8 mt-0 pt-0">
            <div class="mb-5 flex gap-x-2 text-xl font-medium text-black">
              <LogoIcon class="h-9 w-9 text-green-500" />
              <p class="h-auto tracking-wide">
                Kikao
              </p>
            </div>
            <ul class="h-auto flex flex-row items-center justify-center gap-x-2 font-light tracking-wide text-gray-500">
              <li v-for="{ name, link } in socials" :key="name" class="">
                <a
                  :href="`${link}`"
                  target="_blank" rel="noopener noreferrer"
                >
                  <IconsSocialsFacebook v-if="name === 'Facebook'" class="h-6 w-6 hover:text-gray-900" />
                  <IconsSocialsTwitter v-if="name === 'Twitter'" class="h-6 w-6 hover:text-gray-900" />
                  <IconsSocialsTikTok v-if="name === 'TikTok'" class="h-6 w-6 hover:text-gray-900" />
                  <IconsSocialsYoutube v-if="name === 'YouTube'" class="h-6 w-6 hover:text-gray-900" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="w-full flex items-center justify-center px-4 text-center lg:justify-start lg:text-start"
        >
          <div class="mb-8">
            <h2 class="mb-5 text-lg font-medium text-black">
              Product
            </h2>
            <ul class="flex flex-col gap-y-2 font-light tracking-wide text-gray-500">
              <li v-for="{ name, link } in product" :key="name" class="pb-1">
                <a
                  :href="`${link}`"
                  class="leading[20px] !important whitespace-pre-line text-center text-[16px] hover:text-black hover:underline hover:underline-offset-7"
                >
                  {{ name }}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="w-full flex items-center justify-center px-4 text-center lg:justify-start lg:text-start"
        >
          <div class="mb-8">
            <h2 class="mb-5 text-lg font-normal text-black">
              Resources
            </h2>
            <ul class="flex flex-col gap-y-3 font-light tracking-wide text-gray-500">
              <li v-for="{ name, link } in resources" :key="name" class="pb-1">
                <a
                  :href="`${link}`"
                  class="leading[20px] !important whitespace-pre-line text-center text-[16px] hover:text-black hover:underline hover:underline-offset-7"
                >
                  {{ name }}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="w-full flex items-center justify-center pl-4 text-center lg:w-4/12 md:w-1/2 xl:w-3/12 lg:justify-start lg:text-start"
        >
          <div class="mb-8">
            <h2 class="mb-5 text-lg font-normal text-black">
              Help
            </h2>
            <ul class="flex flex-col gap-y-2 font-light tracking-wide tracking-wide text-gray-500">
              <li v-for="{ name, link } in Help" :key="name" class="pb-1">
                <a
                  :href="`${link}`"
                  class="leading[20px] !important whitespace-pre-line text-center text-[16px] hover:text-black hover:underline hover:underline-offset-7"
                >
                  {{ name }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
