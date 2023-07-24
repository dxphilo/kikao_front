<script setup lang="ts">
import type { Article } from '~/types'

useHead({
  title: 'Blog - Kikao',
  meta: [
    { name: 'description', content: 'Listicle of all the articles on this blog' },
  ],
})

const articles: Article[] = await queryContent('articles').sort({ createdAt: 1 }).find() as Article[]
</script>

<template>
  <div>
    <div class="pt-24">
      <h1 class="block text-center text-6xl font-bold text-[#222222]">
        Kikao Blog
      </h1>
      <p class="pt-6 text-center text-lg font-light text-gray-500 dark:text-gray-400">
        Get the Inside Scoop: latest news and updates from us
      </p>
    </div>
    <section>
      <div class="mx-auto w-4/5 flex flex flex-wrap items-center gap-7 py-28">
        <BlogArticle
          v-for="(article, index) in articles"
          :key="index"
          :article="article"
        />
      </div>
    </section>
    <div>
      <Hr />
    </div>
  </div>
</template>
