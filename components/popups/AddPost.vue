<script setup lang="ts">
import { defineEmits } from 'vue'

defineEmits(['close'])
</script>

<template>
  <div
    class="modal-animation popup fixed bottom-0 left-0 right-0 top-0 z-30 h-screen w-full flex flex-col items-center justify-center bg-gray-800 bg-opacity-50 py-16 dark:bg-opacity-50"
    @click.self="$emit(`close`)"
  >
    <div class="w-full flex items-center justify-center rounded-lg bg-white px-5 md:w-2/5">
      <!-- Modal content -->
      <div class="relative rounded-lg bg-white pt-5">
        <!-- Modal header -->
        <div class="flex items-center justify-between p-5">
          <h3 class="text-xl font-medium text-gray-900">
            Share Review
          </h3>
          <button
            class="h-12 w-12 flex items-center justify-center border border-gray-300 rounded-full text-center hover:bg-gray-200 focus:outline-none"
            @click="$emit(`close`)"
          >
            <IconsXIcon class="h-6 w-6" />
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6">
          <div>
            <div class="w-full border border border-gray-300 rounded-lg p-5" />
          </div>
          <div class="pt-5">
            <p class="py-2 text-xl font-medium text-gray-900">
              Socials
            </p>
            <div>
              <p>this is someting that came over</p>
            </div>
          </div>
          <!-- Modal footer -->
          <div class="flex items-center justify-start pt-8 space-x-2">
            <button data-modal-hide="small-modal" type="button" class="border border-gray-200 rounded-lg bg-white px-8 py-3 text-sm font-medium text-gray-500 focus:z-10 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-200" @click.self="$emit(`close`)">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
