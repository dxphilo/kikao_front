<script setup>
import readingTime from '@/utils/index'

const { path } = useRoute()

const { data } = await useAsyncData(`content-${path}`, async () => {
  const article = queryContent().where({ _path: path }).findOne()

  const surround = queryContent()
    .only(['_path', 'title', 'description'])
    .sort({ date: 1 })
    .findSurround(path)

  return {
    article: await article,
    surround: await surround,
  }
})
const [prev, next] = data.value.surround

useHead({
  title: data.value.article.title,
  meta: [
    { name: 'description', content: data.value.article.description },
    {
      hid: `${data.value.imgurl}`,
      property: `${data.value.imgurl}`,
      content: `https://kikao.co.ke/${data.value.article.img}`,
    },
  ],
})
</script>

<template>
  <main id="main" class="article-main">
    <header v-if="data.article" class="article-header">
      <h1 class="heading text-center">
        {{ data.article.title }}
      </h1>
      <div class="supporting my-3 flex flex-wrap justify-center">
        <span>
          {{ data.article.description }}
        </span>
        <span>
          <span class="ml-4 mt-0.5 font-bold">{{ readingTime(data.article) }}
          </span>
          Min read
        </span>
      </div>

      <div class="img-cont my-4 h-[450px]">
        <img
          :src="`${data.article.imgurl}`"
          :alt="data.article.title"
          class="rounded"
        >
      </div>
      <a
        :href="`${data.article.imgurl}`"
        target="_blank"
        rel="noopener noreferrer"
        class="my-2 flex justify-center text-sm no-underline hover:underline"
      >{{ data.article.attribution }}</a>
      <ul class="article-tags">
        <li v-for="(tag, i) in data.article.tags" :key="i" class="tag">
          {{ tag }}
        </li>
      </ul>
    </header>
    <Hr />
    <section class="article-section mb-2">
      <aside class="aside">
        <Toc :links="data.article.body.toc.links" />
      </aside>
      <article class="article">
        <ContentRenderer :value="data.article">
          <ContentRendererMarkdown :value="data.article" />
        </ContentRenderer>
      </article>
    </section>

    <!-- social media share button -->
    <PrevNext :prev="prev" :next="next" />
    <Hr />
  </main>
</template>

<style scoped>
.article-main {
  @apply p-4 max-w-5xl m-auto;
}

.article-header {
  @apply p-4 py-6;
}
h2{
    @apply py-3 text-base;
}

ul li strong{
    @apply py-2;
}
.article-header .heading {
  @apply font-extrabold text-5xl;
}

.article-header .supporting {
  @apply font-medium text-lg;
}

.article-section {
  @apply grid grid-cols-8;
}

.article {
  @apply col-span-full md:col-span-6 md:col-start-1 md:row-start-1 prose w-full p-4 max-w-3xl m-auto;
}
.article[data-v-2c96bb26] :where(ul > li):not(:where([class~="not-prose"] *)) {
  @apply text-base;
}
.article[data-v-02b6418b] :where(a):not(:where([class~="not-prose"] *)) {
  @apply no-underline text-2xl;
}
.article[data-v-02b6418b] :where(a):not(:where([class~="not-prose"] *)):hover {
  @apply underline;
}
a {
  text-decoration: none;
}

.icon {
  @apply inline-flex w-6 h-6;
}

.icon.solid {
  @apply fill-slate-500;
}

.icon.stroke {
  @apply stroke-slate-500;
}

.cta {
  @apply p-1.5 px-2 bg-slate-50 border border-slate-200 font-semibold rounded-lg;
  @apply transition-all hover:-translate-y-0.5 focus:bg-slate-100 active:translate-y-0.5 active:shadow-inner;
}

.cta.w-icon {
  @apply flex items-center gap-2 pr-3;
}

.img-cont img {
  @apply h-full w-full object-cover;
}

.article-tags {
  @apply flex gap-2 py-3;
}

.article-tags .tag {
  @apply bg-slate-100 text-slate-700 text-sm p-3 py-2 rounded-md;
  @apply cursor-pointer !py-2 hover:-translate-y-3;
}

/* BLOG PAGES */

.page-heading {
  @apply p-12 bg-slate-50;
}

.page-heading > .wrapper {
  @apply max-w-3xl m-auto;
}

.page-section {
  @apply p-4 py-8 m-auto max-w-3xl;
}

.article-list {
  @apply flex flex-col gap-6;
}

.article-item {
  @apply pt-6 first-of-type:border-none border-t border-slate-200;
}

.article-item a {
  @apply no-underline;
}

.article-item > * > .wrapper {
  @apply flex items-start gap-4;
}
</style>
