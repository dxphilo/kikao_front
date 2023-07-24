<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

const props = withDefaults(
  defineProps<{
    available: boolean
  }>(),
  {},
)
</script>

<template>
  <span class="modal-animation mr-4 inline h-2 w-2">
    <span
      class="absolute h-2 w-2 inline-flex animate-ping rounded-full"
      :class="props.available ? `bg-indigo-500` : `bg-red-500`"
    />
  </span>
</template>
