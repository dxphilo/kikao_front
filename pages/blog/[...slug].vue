<script setup>
import readingTime from '~/utils'

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
  title: `${data.value.article.title} - Kikao`,
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
      <div class="normal_text flex flex-wrap justify-center py-3">
        <p>
          {{ data.article.description }}
        </p>
        <div class="flex items-center justify-center gap-x-2">
          <p class="pl-2 font-semibold">
            {{ readingTime(data.article) }}
          </p>
          <p>Min read</p>
        </div>
      </div>

      <div class="img-cont h-[500px] py-4">
        <img
          :src="`${data.article.imgurl}`"
          :alt="data.article.title"
          class="w-full rounded"
        >
      </div>
      <a
        :href="`${data.article.imgurl}`"
        target="_blank"
        rel="noopener noreferrer"
        class="flex justify-center py-2 text-sm font-light text-gray-500 no-underline hover:underline"
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
        <BlogToc :links="data.article.body.toc.links" />
      </aside>
      <article class="article">
        <ContentRenderer :value="data.article">
          <ContentRendererMarkdown :value="data.article" />
        </ContentRenderer>
      </article>
    </section>

    <!-- social media share button -->
    <div class="py-10">
      <BlogPrevNext :prev="prev" :next="next" />
    </div>
  </main>
</template>

<style>
.article-main {
  @apply p-4 max-w-5xl m-auto;
}

.article-header {
  @apply p-4 py-6;
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

.aside {
  @apply col-span-full md:col-span-2 row-start-1 w-full pt-14;
}

.aside .toc {
  @apply sticky top-20;
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

h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-header;
}

.article h2 a {
  @apply text-2xl font-semibold py-2;
}
.article h2{
  @apply py-3;
}

.article p{
  @apply font-gray-500 font-light;
}

.article ul li strong{
  @apply font-semibold;
}
.article ul li{
  @apply py-2 font-semibold;
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
  @apply flex gap-2 py-2;
}

.article-tags .tag {
  @apply bg-slate-100 text-slate-700 text-sm py-2 px-3 uppercase rounded-md font-light;
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
