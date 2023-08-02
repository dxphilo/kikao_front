<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main p="x4 y32" text="center green-700 dark:gray-200">
    <div text-4xl>
      <div i-carbon-warning inline-block class="h-32 w-32" />
    </div>
    <div>Not found</div>
    <div>
      <button text-sm btn m="3 t8" class="rounded bg-green-400 px-10 py-3 text-white hover:bg-green-500" @click="router.back()">
        Back
      </button>
    </div>
  </main>
</template>
