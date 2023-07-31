<script setup>
defineProps(['prev', 'next'])
</script>

<template>
  <ul class="prev-next-cont">
    <li class="prev link-item">
      <NuxtLink v-if="prev" :to="prev._path" class="flex items-center justify-center">
        <IconsArrowLeft class="h-5 text-gray-900" />
        <span class="text-lg"> {{ prev.title }} </span>
      </NuxtLink>
    </li>
    <li class="link-item next">
      <NuxtLink v-if="next" :to="next._path" class="flex items-center justify-center">
        <span class="text-lg"> {{ next.title }} </span>
        <IconsArrowRight class="h-5 text-gray-900" />
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
.prev-next-cont {
  @apply flex gap-4 justify-between text-gray-500 font-light p-4 border border-slate-200 rounded-lg;
}

.link-item a {
  @apply flex gap-2;
}
</style>
