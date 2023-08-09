<script setup lang="ts">
import { useToast } from 'vue-toastification'

import { useHead } from 'unhead'

useHead({
  title: 'Addpost - Kikao',
})

const toast = useToast()

const previewImages = ref<string[]>([])
const selectedFile = ref()

function getImageDataURL(imageFile: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => {
      resolve(reader.result)
    })
    reader.addEventListener('error', () => {
      reject(reader.error)
    })
    reader.readAsDataURL(imageFile)
  })
}
async function onFileSelected(event: Event) {
  if (!event.target)
    return

  const target = event.target as HTMLInputElement
  if (!target.files) {
    // TODO:toastError('No image selected')
    toast.info('Please upload images')
    return
  }

  selectedFile.value = target.files

  const imageUrl = []
  for (const imageFile of target.files) {
    const imageSrc = await getImageDataURL(imageFile)
    imageUrl.push(imageSrc as string)
    previewImages.value = [...imageUrl]
  }
}

function clearPreview(index: number) {
  previewImages.value.splice(index, 1)
  const newSelectedFiles = Array.from(selectedFile.value).slice()
  newSelectedFiles.splice(index, 1)
  selectedFile.value = newSelectedFiles
}

async function handleSubmit() {
  // TODO: Handle image submit here
}
</script>

<template>
  <div class="mx-auto min-h-screen w-full pt-10 md:w-2/5">
    <!-- step 4 add images baout your shop -->
    <div class="w-full pt-10 text-center md:text-left">
      <h1 class="text-center text-[32px] font-normal leading-[36px] tracking-normal text-slate-900 md:text-left">
        Add a business post for your customers
      </h1>
      <p class="!important leading[20px] whitespace-pre-line pt-4 text-center text-[19px] font-light text-gray-500 md:text-left">
        Add a caption to your photos and make sure they are well-lit.
      </p>
      <div class="flex flex-wrap gap-4 py-7">
        <div class="w-full">
          <input id="email" type="text" class="block w-full border border-gray-300 rounded bg-gray-50 px-4 py-3 text-sm text-gray-900 dark:border-gray-600 focus:border-blue-500 dark:bg-gray-700 dark:text-white focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder-gray-400" placeholder="Enter caption about the business post" required>
        </div>
        <!-- start image upload -->
        <div class="mb-5 flex flex-wrap gap-y-5">
          <div v-for="(image, index) in previewImages" :key="index">
            <img
              :src="image"
              class="mb-1 mr-2 h-24 w-32 cursor-pointer border border-gray-300 rounded bg-cover object-cover"
              srcset=""
            >
            <div class="mt-2">
              <button
                type="button"
                class="flex transform items-center justify-center justify-around gap-x-1 text-gray-400 transition-all hover:fill-red-500 hover:text-red-500"
                @click="clearPreview(index)"
              >
                <IconsDelete class="h-6 w-6 fill-gray-400" />
                <span>Remove</span>
              </button>
            </div>
          </div>
        </div>
        <div class="w-full flex items-center justify-center">
          <label
            for="dropzone-file"
            class="mx-10 w-full flex flex-col cursor-pointer items-center justify-center border-2 border-gray-300 rounded-lg border-dashed bg-gray-50 md:mx-0 hover:bg-gray-100"
          >
            <div
              class="flex flex-col items-center justify-center py-4"
            >
              <IconsUpload />
              <input
                id="dropzone-file"
                type="file"
                class="hidden"
                accept="image/jpeg, image/png"
                name="kikaoimage"
                multiple
                @change="onFileSelected"
              >
              <div class="flex flex-col items-center py-2 text-center text-gray-700">
                <PhotosIcon class="" />
                <p class="text-3xl font-bold">Click to upload</p>
                <p class="text-sm text-gray-400">Choose at least 2 photos</p>
              </div>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                PNG, or JPG (MAX. 800 x 400px)
              </p>
            </div>
          </label>
        </div>
        <!-- end image upload -->
        <div class="w-full pt-8">
          <button type="button" class="w-full rounded bg-blue-700 px-5 py-4 text-base font-medium text-white dark:bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="handleSubmit">
            Submit post
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
