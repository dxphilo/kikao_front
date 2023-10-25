<script setup lang="ts">
import { useToast } from 'vue-toastification'
import axios from 'axios'
import PhotosIcon from '@/components/icons/PhotosIcon.vue'
import Delete from '@/components/icons/Delete.vue'
import { useUserStore } from '@/store/user'
import { useReviewStore } from '@/store/reviews'

const emit = defineEmits(['close'])

const route = useRoute()
const userStore = useUserStore()
const userReview = useReviewStore()
const config = useRuntimeConfig()
const toast = useToast()
const rating = ref(0)
const selectedFile = ref()
const previewImages = ref<string[]>([])
const text = ref('')
const loading = ref(false)
const business_id = computed(() => route.params.id)
const showAddImage = ref(false)

function addRating() {
  if (rating.value === 5)
    return

  rating.value++
}

function minusRating() {
  if (rating.value === 0)
    return

  rating.value--
}

async function onFileSelected(event: Event) {
  if (!event.target)
    return

  const target = event.target as HTMLInputElement
  if (!target.files) {
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

function clearPreview(index: number) {
  previewImages.value.splice(index, 1)
  const newSelectedFiles = Array.from(selectedFile.value).slice()
  newSelectedFiles.splice(index, 1)
  selectedFile.value = newSelectedFiles
}

async function submitReview() {
  if (rating.value === 0)
    return toast.info('Kindly provide a minimum rating of 1')

  else if (text.value.length < 350)
    return toast.info(`Your review should be at least 350 characters, write ${350 - text.value.length} more characters`)

  loading.value = true
  const access_token = window.localStorage.getItem('kikao_token')
  const headers = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${access_token}`,
    },
  }

  try {
    const review_url = `${config.public.BASE_URL}/reviews/`

    const formData = new FormData()

    formData.append('text', text.value)
    formData.append('user_id', userStore.$state.user_info.id)
    formData.append('rating', String(rating.value))
    formData.append('business_id', business_id.value as string)

    if (selectedFile && selectedFile.value && selectedFile.value.length >= 1) {
      for (let j = 0; j < selectedFile.value.length; ++j)
        formData.append('images', selectedFile.value[j])
    }

    const response = await axios.post(`${review_url}`, formData, headers)
    const data = await response.data
    if (data.status === '201')
      toast.success('Your review for this business has been published')

    const review: Review = {
      id: 1,
      name: userStore.$state.user_info.name,
      user_id: userStore.$state.user_info.name,
      text: text.value,
      rating: rating.value,
      createdAt: new Date().toLocaleString(),
      review: text.value,
      business_id: business_id.value,
      user: {
        full_name: userStore.$state.user_info.name,
        photo: userStore.$state.user_info.photo,
      },
    }
    userReview.updateReview(review, business_id.value)
    resetFormValues()
    emit('close')
  }
  catch (error) {
    handleError(error)
  }
  finally {
    loading.value = !loading.value
  }
}

function resetFormValues() {
  text.value = ''
  selectedFile.value = null
  rating.value = 0
}

function toggleImageUpload() {
  showAddImage.value = !showAddImage.value
}
</script>

<template>
  <div
    class="modal-animation popup fixed bottom-0 left-0 right-0 top-0 z-30 h-screen w-full flex flex-col items-center justify-center bg-gray-800 bg-opacity-70 py-16 dark:bg-opacity-50"
    @click.self="$emit(`close`)"
  >
    <div class="w-full flex items-center justify-center rounded-lg bg-white px-5 md:w-2/5">
      <!-- Modal content -->
      <div class="relative mx-auto w-full rounded-lg bg-white px-10 pt-5">
        <!-- Modal header -->
        <div class="flex justify-between">
          <h3 class="text-xl font-medium text-gray-900">
            How was your experience?
          </h3>
          <button
            class="h-9 w-9 flex items-center justify-center border border-gray-300 rounded-full text-center hover:bg-gray-200 focus:outline-none"
            @click="$emit(`close`)"
          >
            <IconsXIcon class="h-4 w-4" />
          </button>
        </div>
        <!-- Modal body -->
        <div class="pb-12">
          <div class="pt-5">
            <p class="text-base">
              Rating
            </p>
            <div class="flex items-center gap-x-5 py-5">
              <button class="flex items-center justify-center border-2 border-gray-200 rounded-md px-4 py-3 hover:bg-gray-200" @click="minusRating()">
                <IconsMinusIcon />
              </button>
              <p class="text-xl">
                {{ rating }}
              </p>
              <button class="flex items-center justify-center border-2 border-gray-200 rounded-md px-4 py-3 hover:bg-gray-200" @click="addRating()">
                <IconsPlusIcon />
              </button>
            </div>
            <div>
              <button v-if="!showAddImage" class="btn" @click="toggleImageUpload()">
                Add Images
              </button>
              <div v-if="showAddImage" class="mb-5 flex flex-wrap gap-y-2">
                <div v-for="(image, index) in previewImages" :key="index">
                  <img
                    :src="image" class="mb-1 mr-2 h-24 w-32 cursor-pointer border border-gray-100 rounded object-cover"
                    srcset=""
                  >
                  <div class="mt-2">
                    <button
                      type="button"
                      class="flex transform items-center justify-center justify-around gap-x-1 text-gray-400 transition-all hover:fill-red-500 hover:text-red-500"
                      @click="clearPreview(index)"
                    >
                      <Delete class="h-6 w-6 fill-gray-400" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              </div>
              <label
                v-if="showAddImage"
                for="dropzone-file"
                class="w-full flex flex-col cursor-pointer items-center justify-center border-2 border-gray-300 rounded-lg border-dashed bg-gray-50 md:mx-0 hover:bg-gray-100"
              >
                <div class="flex flex-col items-center justify-center py-2">
                  <input
                    id="dropzone-file" type="file" class="hidden" accept="image/jpeg, image/png" name="kikaoimage"
                    multiple @change="onFileSelected"
                  >
                  <div class="flex flex-col items-center py-2 text-center text-gray-700">
                    <PhotosIcon class="" />
                    <p class="text-xl font-bold">Click to upload</p>
                    <p class="text-sm text-gray-400">Choose at least 1 photo</p>
                  </div>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    PNG, or JPG (MAX. 800 x 400px)
                  </p>
                </div>
              </label>
            </div>
            <div>
              <p class="py-4 font-light text-gray-400">
                Your review should reflect your experience and help others make an informed decision
              </p>
              <textarea id="" v-model="text" class="w-full border border-gray-200 rounded-md p-4 py-2" placeholder="Review should be at least 500 characters" name="" cols="30" rows="4" />
            </div>
          </div>
          <!-- Modal footer -->
          <div class="flex items-center justify-between pt-8 space-x-2">
            <button data-modal-hide="small-modal" type="button" class="btn" @click.self="$emit(`close`)">
              Cancel
            </button>
            <button data-modal-hide="small-modal" type="button" class="btn_green" @click="submitReview()">
              <IconsLoading v-if="loading" />
              <p v-else>
                Submit
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
