<script setup lang="ts">
import type { Article } from '~/types'

withDefaults(
  defineProps<{
    article: Article
  }>(),
  {},
)

function convertDate(date: string | number) {
  const da = new Date(date)
  return da.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <article class="w-[400px] overflow-hidden border border-[#e1e1e1] rounded rounded-tl rounded-tr hover:shadow-lg">
    <div
      class=""
    >
      <nuxt-link :to="article._path">
        <img
          :src="article.imgurl"
          :alt="article.title"
          class="h-[250px] w-full bg-cover object-cover"
        >

        <div class="">
          <div class="p-5">
            <div>
              <p class="normal_text uppercase">
                {{ article.category }}
              </p>
            </div>

            <h4 class="!important whitespace-pre-line py-2 text-2xl font-bold leading-9 tracking-wide text-[#222222]">
              {{ article.title }}
            </h4>
            <div class="flex items-center gap-x-4 pb-1 pt-2 font-normal text-gray-500">
              <p class="normal_text">
                {{ article.author }}
              </p>
              <p class="h-1 w-1 rounded-full bg-gray-500" />
              <p class="normal_text">
                {{ convertDate(article.createdAt) }}
              </p>
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>
  </article>
</template>
