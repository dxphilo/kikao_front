<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'

defineProps({
  placement: {
    type: String,
    default: 'right',
    validator: value => ['right', 'left'].includes(value),
  },

})
const open = ref(false)

function onEscape(e) {
  if (e.key === 'Esc' || e.key === 'Escape')
    open.value = false
}
document.addEventListener('keydown', onEscape)

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onEscape)
})
</script>

<template>
  <div class="relative">
    <button class="relative z-10 flex select-none items-center focus:outline-none" @click="open = !open">
      <slot name="button" />
    </button>

    <!-- to close when clicked on space around it -->
    <button v-if="open" class="fixed inset-0 h-full w-full cursor-default focus:outline-none" tabindex="-1" @click="open = false" />

    <!-- dropdown menu -->
    <transition enter-active-class="transition-all duration-200 ease-out" leave-active-class="transition-all duration-750 ease-in" enter-class="opacity-0 scale-75" enter-to-class="opacity-100 scale-100" leave-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-75">
      <div v-if="open" class="absolute z-10 mt-4 w-48 border rounded bg-white px-2 py-1 text-sm shadow-lg" :class="placement === 'right' ? 'right-0' : 'left-0'">
        <slot name="content" />
      </div>
    </transition>
  </div>
</template>
