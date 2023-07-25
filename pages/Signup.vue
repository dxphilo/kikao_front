<script setup lang="ts">
import { useToast } from 'vue-toastification'
import axios from 'axios'
import GoogleIcon from '~/components/icons/GoogleIcon.vue'
import { handleError } from '~/utils/error'

const config = useRuntimeConfig()

const { signIn, status, data } = useAuth()

const toast = useToast()
const router = useRouter()
const telNumber = ref<string>('')
const authStatus = computed(() => status.value)

if (authStatus.value === 'authenticated')
  send_data()

function verifyPhoneNumber() {
  if (!telNumber.value) {
    toast.warning('Please enter phone number')
    return
  }

  if (telNumber.value.length < 10) {
    toast.warning('Ten digit telephone number is required')
    return
  }
  localStorage.setItem('phone_number', telNumber.value)
  signIn('google')
}
async function send_data() {
  const BASE_URL = `${config.public.BASE_URL}users/`
  const phone_number = localStorage.getItem('phone_number')
  if (!phone_number)
    toast.info('No phone number provided')

  const body_data = {
    fullname: data.value?.user?.name,
    tel_number: phone_number,
    email: data.value?.user?.email,
    picture: data.value?.user?.image,
  }
  try {
    await axios.post(BASE_URL, body_data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    toast.success('Account successfully saved')
  }
  catch (error) {
    handleError(error)
  }
  localStorage.removeItem('phone_number')
  router.push('/')
}
</script>

<template>
  <div v-if="status === 'unauthenticated'">
    <div class="w-full px-10 text-[14px] leading-6 text-black md:mx-auto md:w-[400px] md:px-0">
      <div class="w-full flex items-center justify-center pt-20">
        <div class="md:text-justified items-center text-center">
          <h1 class="text-3xl font-extrabold text-black">
            Create your Account
          </h1>
          <span class="inline-block py-10 text-base font-light text-gray-500">
            Please note that phone verification is required for signup. Your phone number will be solely used for identity
            verification to ensure security.
          </span>
          <div class="w-full flex flex-col gap-y-5 py-8">
            <div class="w-full flex">
              <span
                class="flex flex-col gap-y-1 overflow-hidden border border-r-0 border-gray-300 rounded-l-md p-2 text-gray-900"
              >
                <span class="text-sm text-gray-400">Country/Region</span>
                <div class="flex items-center justify-center gap-x-2">
                  <IconsKenyanFlag class="h-5 w-5" />
                  <p class="text-sm">(+254)</p>
                </div>
              </span>
              <input
                v-model="telNumber" min="10" max="10" type="text"
                class="w-full flex-1 border border-gray-300 rounded-none rounded-r-lg bg-gray-50 py-1.5 pl-10 text-base text-gray-900 focus:border-gray-500 focus:ring-gray-500"
                placeholder="Enter telephone number"
              >
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        class="mt-10 block w-full flex cursor-pointer items-center justify-center gap-x-4 rounded-full bg-gray-200 px-18 py-4 text-center text-lg hover:bg-gray-300"
        @click="verifyPhoneNumber"
      >
        <GoogleIcon />
        <p>Continue with Google</p>
      </button>
    </div>
    <div class="flex items-center justify-center gap-x-4 py-20 text-center text-base text-black">
      <a href="/terms" class="text-green-400 hover:underline hover:underline-offset-8">
        Terms of use
      </a>|
      <a href="privacy" class="text-green-400 hover:underline hover:underline-offset-8">
        Privacy policy

      </a>
    </div>
  </div>
</template>
