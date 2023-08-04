<script lang="ts" setup>
import { useToast } from 'vue-toastification'
import { useHead } from 'unhead'
import axios from 'axios'
import Location from '@/components/icons/Location.vue'
import Delete from '@/components/icons/Delete.vue'
import PhotosIcon from '@/components/icons/PhotosIcon.vue'

import { categories } from '~/config/categories'
import { businessTypes } from '~/config/businesstype'
import { amenities } from '~/config/amenities'
import { counties } from '~/utils/counties'
import { daysOfTheWeek } from '~/constants/days'
import { handleError } from '~/utils/error'
import { useUserStore } from '~/store/user'

useHead({
  title: 'Host your business on Kikao',
})

const toast = useToast()
const userStore = useUserStore()
const router = useRouter()
const config = useRuntimeConfig()

const step = ref<number>(0)
const business = ref<string>('')
const businesstype = ref<string>('')
const location = ref<string>('')
const selectedAmenities = ref<string[]>([])
const selectedFile = ref()
const previewImages = ref<string[]>([])
const businessName = ref<string>('')
const telephoneNumber = ref<string>('')
const businessDescription = ref<string>('')
const daysOfOperation = ref<string[]>([])
const openingHours = ref<string>('')
const closingHours = ref<string>('')
const county = ref<string>('')
const town = ref<string>('')
const loading = ref<boolean>(false)

const localBusiness = ref({
  id: 0,
  name: businessName.value,
  handle: county.value,
  reviews: 0,
  reviewScore: 0,
  location: location.value,
  opening: true,
  images: previewImages.value,
  businessDescription: businessDescription.value,
  category: businesstype.value,
  creationDate: Date.now(),
  verified: false,
  telephoneNumber: telephoneNumber.value,
})

watch([businessName, county, location, previewImages, businessDescription, businesstype, telephoneNumber], () => {
  localBusiness.value = {
    id: 0,
    name: businessName.value,
    handle: county.value,
    reviews: 0,
    reviewScore: 0,
    location: location.value,
    opening: true,
    images: previewImages.value,
    businessDescription: businessDescription.value,
    category: businesstype.value,
    creationDate: Date.now(),
    verified: false,
    telephoneNumber: telephoneNumber.value,
  }
})

// TODO: perist user info to localstorage so we can prompt the later to complete registration incase
// they leave in the middle of something
// function storeInfo() {
//   localStorage.setItem('businessDetails', JSON.stringify(localBusiness))
//   const userDetails = JSON.parse(localStorage.getItem('businessDetails')!)
//   console.log(userDetails)
// }

function handleSelected(name: string): void {
  if (!name) {
    // todo:toast some erroe hre
    return
  }
  if (business.value === name)

    business.value = ''

  else
    business.value = name
}

function handleNext() {
  if (step.value === 0 && !business.value) {
    // TODO: toast a message here
    toast.info('Please select business category')
    return
  }
  if (step.value === 1 && !businesstype.value) {
    // TODO: Toast a message to select business place
    toast.info('Please select a business setup')
    return
  }

  if (step.value === 2 && !location.value) {
    // TODO: Toast allow location
    toast.info('Please allow location')
    return
  }

  if (step.value === 3 && selectedAmenities.value.length === 0) {
    // TODO: Toast selected amenities error
    toast.info('Please select amenities')
    return
  }
  if (step.value === 4 && previewImages.value.length === 0) {
    // TODO: Toast selected images error
    toast.info('Please upload images')
    return
  }
  if (step.value === 5 && (!businessName.value || !county.value || !town.value)) {
    // TODO: Toast not business name or county or town
    if (!businessName.value) {
      toast.info('Please enter business name')
      return
    }
    if (!county.value) {
      toast.info('Please enter county of operation')
      return
    }
    if (!town.value) {
      toast.info('Please enter town of operation')
      return
    }
  }

  if (step.value === 6) {
    if (daysOfOperation.value.length < 3) {
      toast.info('Select at least 3 days')
      return
    }
    if (!openingHours.value) {
      toast.info('Enter opening Hours')
      return
    }
    if (!closingHours.value) {
      toast.info('Enter closing Hours')
      return
    }
  }
  step.value++
}

function handleBiz(name: string): void {
  if (!name) {
    // TODO: toast a message here
    toast.info('Please provide a name')
    return
  }
  if (businesstype.value === name)
    businesstype.value = ''

  else
    businesstype.value = name
}

function getUserLocation() {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 60000,
  }

  function success(position: any) {
    const crd = position.coords
    location.value = `Lat: ${crd.latitude}, Lng: ${crd.longitude}`
  }

  function error(error: any) {
    toast.error(`ERROR(${error.code}): ${error.message}`)
  }

  window.navigator.geolocation.getCurrentPosition(success, error, options)
}

function handleAmenity(name: string) {
  if (!name) {
    toast.info('Please provide amenity')
    return
  }

  const index = selectedAmenities.value.findIndex(selected => selected === name)
  if (index === -1)
    selectedAmenities.value.push(name)

  else
    selectedAmenities.value.splice(index, 1)
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

function handleBack() {
  if (step.value > 0)
    step.value--
}

async function publish() {
  const access_token = userStore.$state.user_info.access_token
  const headers = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${access_token}`,
    },
  }

  loading.value = true

  try {
    const business_url = `${config.public.BASE_URL}/businesses/`

    const formData = new FormData()

    formData.append('name', businessName.value)
    formData.append('handle', businessName.value)
    formData.append('location', location.value)
    formData.append('opening', openingHours.value)
    formData.append('closing', closingHours.value)
    formData.append('business_description', businesstype.value)
    formData.append('telephone_number', telephoneNumber.value)
    formData.append('category', business.value)
    formData.append('county', county.value)
    formData.append('town', town.value)
    formData.append('user_id', userStore.$state.user_info.id)

    for (let i = 0; i < selectedAmenities.value.length; ++i)
      formData.append('amenities', selectedAmenities.value[i])

    for (let j = 0; j < selectedFile.value.length; ++j)
      formData.append('images', selectedFile.value[j])

    const response = await axios.post(`${business_url}`, formData, headers)
    const data = await response.data
    if (data.status === '201') {
      toast.success(`Your business ${businessName.value} has been published on Kikao`)
      resetFormValues()
      router.push('/')
    }
  }
  catch (error) {
    handleError(error)
  }
  finally {
    loading.value = false
  }
}

function handleDaysOfOperation(day: string) {
  if (!day)
    return
  if (daysOfOperation.value.includes(day)) {
    const index = daysOfOperation.value.indexOf(day)
    daysOfOperation.value.splice(index, 1)
  }
  else {
    daysOfOperation.value.push(day)
  }
}

function resetFormValues() {
  step.value = 0
  business.value = ''
  businesstype.value = ''
  location.value = ''
  selectedAmenities.value = []
  selectedFile.value = null
  previewImages.value = []
  businessName.value = ''
  telephoneNumber.value = ''
  businessDescription.value = ''
  daysOfOperation.value = []
  openingHours.value = ''
  closingHours.value = ''
  county.value = ''
  town.value = ''
}
</script>

<template>
  <div class="w-full pt-8 lg:mx-auto lg:w-2/5" style="height: calc(100vh - 100px); overflow-y: auto;">
    <!-- step one 0 -->
    <div v-if="step === 0" class="md:items-left w-full flex flex-col justify-center pb-20">
      <div>
        <h1 class="text-center text-[32px] font-normal leading-[36px] tracking-normal text-slate-900 md:text-left">
          What's your business category?
        </h1>
        <p
          class="b_text"
        >
          Select what best describes your business
        </p>
      </div>

      <div class="flex flex-wrap items-center justify-center gap-5 py-7">
        <button
          v-for="(category, index) in categories" :key="index"
          class="b_card"
          :class="business === category.icon ? `border-2 bg-gray-100 border-gray-900` : ` `"
          @click="handleSelected(category.icon)"
        >
          <div class="flex items-center justify-center">
            <component :is="category.iconComponent" class="h-10 w-10" />
          </div>

          <p
            class="normal_text py-5 text-center"
          >
            {{ category.name }}
          </p>
        </button>
      </div>
    </div>
    <!-- step two 1 -->
    <div v-if="step === 1" class="md:items-left w-full flex flex-col justify-center pb-20">
      <h1 class="text-center text-[32px] font-normal leading-[36px] tracking-normal text-slate-900 md:text-left">
        What do your business offers
      </h1>
      <p
        class="b_text"
      >
        Select what your business setup looks like
      </p>
      <div class="flex flex-wrap justify-center gap-x-4 gap-y-5 py-3">
        <button
          v-for="(biz, index) in businessTypes" :key="index"
          class="b_card"
          :class="businesstype === biz.name ? `  border-2 bg-gray-100 border-gray-900` : ` `"
          @click="handleBiz(biz.name)"
        >
          <div class="flex items-center justify-center pb-4">
            <component :is="biz.iconComponent" class="h-10 w-10 text-black" />
          </div>
          <p
            class="normal_text py-4"
          >
            {{ biz.name }}
          </p>
        </button>
      </div>
    </div>
    <!-- step 2 location -->
    <div v-if="step === 2" class="md:items-left w-full flex flex-col justify-center pb-20">
      <h1 class="text-center text-[32px] font-normal leading-[36px] tracking-normal text-slate-900 md:text-left">
        Where's your business located?
      </h1>
      <p
        class="b_text"
      >
        Make it easy for customers to find your business.
      </p>
      <div class="my-20 h-80 w-4/5 flex items-center justify-center border-3 rounded-xl border-dotted md:w-full">
        <Location class="h-10 w-10 cursor-pointer" @click="getUserLocation" />
      </div>
    </div>
    <!-- step 3 add business amenities -->
    <div v-if="step === 3" class="md:items-left w-full flex flex-col justify-center pb-20">
      <h1 class="text-center text-[32px] font-normal leading-[36px] tracking-normal text-slate-900 md:text-left">
        What amenities do you offer?
      </h1>
      <p
        class="b_text"
      >
        Let customers know what your business offers
      </p>
      <div class="flex flex-wrap justify-center gap-4 py-7">
        <button
          v-for="(amenity, index) in amenities" :key="index"
          class="b_card flex flex-col items-center justify-center"
          :class="selectedAmenities.find((selected) => selected === amenity.name) ? 'border-2 bg-gray-100 border-gray-900' : ''"
          @click="handleAmenity(amenity.name)"
        >
          <div>
            <component :is="amenity.iconComponent" class="h-8 w-8" />
          </div>
          <p class="normal_text pt-3">
            {{ amenity.name }}
          </p>
        </button>
      </div>
    </div>
    <!-- step 4 add images baout your shop -->
    <div v-if="step === 4" class="w-full text-center md:text-left">
      <h1 class="text-center text-[32px] font-normal leading-[36px] tracking-normal text-slate-900 md:text-left">
        Add some photos of your business
      </h1>
      <p
        class="b_text"
      >
        Ensure your photos are well-lit and at least 5 photos.
      </p>
      <div class="flex flex-wrap gap-4 py-7">
        <!-- start image upload -->
        <div class="mb-5 flex flex-wrap gap-y-2">
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
        <div class="w-full flex items-center justify-center">
          <label
            for="dropzone-file"
            class="mx-10 w-full flex flex-col cursor-pointer items-center justify-center border-2 border-gray-300 rounded-lg border-dashed bg-gray-50 md:mx-0 hover:bg-gray-100"
          >
            <div class="flex flex-col items-center justify-center py-4">
              <IconsUpload />
              <input
                id="dropzone-file" type="file" class="hidden" accept="image/jpeg, image/png" name="kikaoimage"
                multiple @change="onFileSelected"
              >
              <div class="flex flex-col items-center py-2 text-center text-gray-700">
                <PhotosIcon class="" />
                <p class="text-3xl font-bold">Click to upload</p>
                <p class="text-sm text-gray-400">Choose at least 5 photos</p>
              </div>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                PNG, or JPG (MAX. 800 x 400px)
              </p>
            </div>
          </label>
        </div>
        <!-- end image upload -->
      </div>
    </div>
    <div v-if="step === 5" class="w-full text-center md:text-left">
      <h1
        class="text-center text-3xl font-normal leading-[36px] tracking-normal text-slate-900 md:text-left md:text-[32px]"
      >
        Give your business a name and handle
      </h1>
      <p
        class="b_text"
      >
        Remember you can change these details later.
      </p>
      <div class="ml-10 py-4 text-start md:ml-0">
        <p class="pt-4 text-[18px] leading-[24px]">
          Enter your business Name
        </p>
        <p class="py-2 text-gray-400">
          i.e Pauls backery
        </p>
        <input
          id="" v-model="businessName" type="text" name="" placeholder="Name of your business"
          class="w-4/5 border border-gray-300 rounded px-6 py-3 md:w-full"
        >

        <p class="pt-3 text-[18px] leading-[24px]">
          Enter County and Town
        </p>
        <p class="py-2 text-gray-400">
          Select an option
        </p>
        <select
          id="countries" v-model="county"
          class="block w-full border border-gray-300 rounded bg-gray-50 px-6 py-3 text-sm text-gray-900"
        >
          <option selected>
            Choose a county
          </option>
          <option
            v-for="(counti, index) in counties
            " :key="index" :value="`${counti}`"
          >
            {{ counti }}
          </option>
        </select>
        <p class="py-3 text-gray-400">
          Enter Town or City
        </p>
        <input
          id="" v-model="town" type="text" name="" class="w-4/5 border border-gray-300 rounded px-6 py-3 md:w-full"
          placeholder="Your town or city"
        >
        <div class="flex flex-col pt-2">
          <p class="text-[18px] leading-[24px]">
            Enter your business number
          </p>
          <p class="py-2 text-gray-400">
            We will call or text to verify your number
          </p>
        </div>
        <div class="w-4/5 flex items-center justify-center text-center md:w-full">
          <div class="w-full flex">
            <span
              class="flex flex-col overflow-hidden border border-r-0 border-gray-300 rounded-l-md px-3 py-2 text-gray-900"
            >
              <span class="text-[12px] text-gray-400">Country/Region</span>
              <span class="text-sm">Kenya (+254)</span>
            </span>
            <input
              v-model="telephoneNumber"
              type="text"
              class="w-full flex-1 border border-gray-300 rounded-none rounded-r-lg bg-gray-50 p-1.5 text-sm text-gray-900 focus:border-gray-500 focus:ring-gray-500"
              placeholder="Enter telephone number"
            >
          </div>
        </div>
      </div>
    </div>
    <div v-if="step === 6" class="w-full text-center md:text-left">
      <h1 class="text-center text-[32px] font-normal leading-[36px] tracking-normal text-slate-900 md:text-left">
        Select Working hours
      </h1>
      <p
        class="b_text"
      >
        Select your working days
      </p>
      <div class="flex flex-wrap justify-center gap-6 py-10 md:justify-start">
        <button
          v-for="(day, index) in daysOfTheWeek" :key="index"
          class="h-14 w-36 border border-gray-300 rounded px-6 text-xl"
          :class="daysOfOperation.includes(day) ? ` bg-gray-300 text-black hover:bg-gray-400` : ` `"
          @click="handleDaysOfOperation(day)"
        >
          {{ day }}
        </button>
      </div>
      <div>
        <h1 class="text-center text-[32px] font-normal leading-[36px] tracking-normal text-slate-900 md:text-left">
          Business working hours
        </h1>
        <p
          class="b_text"
        >
          Select your opening and closing hours
        </p>
        <div class="w-full flex justify-center gap-x-10 py-4 md:justify-start">
          <div class="flex flex-col gap-y-6">
            <p
              class="b_text"
            >
              Opening
            </p>
            <input id="" v-model="openingHours" type="time" class="border border-gray-300 rounded px-8 py-3" name="">
          </div>
          <div class="flex flex-col gap-y-6">
            <p
              class="b_text"
            >
              Closing
            </p>
            <input id="" v-model="closingHours" type="time" class="border border-gray-300 rounded px-8 py-3" name="">
          </div>
        </div>
      </div>
      <div />
    </div>
    <div v-if="step === 7" class="w-full text-center md:text-left">
      <h1 class="text-center text-[32px] font-normal leading-[36px] tracking-normal text-slate-900 md:text-left">
        Here is how your business will look like
      </h1>
      <p
        class="b_text"
      >
        If all is set-up you can publish your business
      </p>
      <div class="mx-auto w-4/5 pt-8 md:w-full">
        <RatingCard :business="localBusiness" />
        <p class="py-6 font-light text-gray-500">
          By publishing, you acknowledge that you have read and agree to our <a
            href="http://"
            class="text-gray-800 underline underline-offset-8 hover:text-gray-800"
          >terms of service</a>
          and <a href="/blog/privacy" class="text-gray-800 underline underline-offset-8 hover:text-gray-800">privacy policy</a>
        </p>
      </div>
    </div>
  </div>
  <div class="fixed bottom-0 left-0 right-0 bg-white py-8">
    <div class="mx-auto w-3/5 flex bg-white" :class="step === 0 ? ` justify-end` : ` justify-between`">
      <button
        v-if="step !== 0" type="submit"
        class="flex items-center justify-center gap-x-2 text-black underline underline-offset-8" @click="handleBack"
      >
        <IconsArrowLeft class="h-6 w-6 text-gray-800" />
        Back
      </button>
      <button
        type="submit" class="rounded-md bg-black px-12 py-2.5 text-center text-base text-white"
        @click=" step === 7 ? publish() : handleNext()"
      >
        <IconsLoading v-if="loading" />
        <p v-else>
          {{ step < 7 ? ` Next` : ` Publish` }}
        </p>
      </button>
    </div>
  </div>
</template>
