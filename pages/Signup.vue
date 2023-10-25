<script setup lang="ts">
import { useToast } from 'vue-toastification'
import axios from 'axios'
import { useHead } from 'unhead'
import GoogleIcon from '~/components/icons/GoogleIcon.vue'
import { handleError } from '~/utils/error'
import { useUserStore } from '~/store/user'

useHead({
  title: 'Signup - Kikao',
})

const config = useRuntimeConfig()

const { signIn, status, data } = useAuth()

const toast = useToast()
const router = useRouter()
const userStore = useUserStore()
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
  window.localStorage.setItem('phone_number', telNumber.value)
  signIn('google')
}
async function send_data() {
  const BASE_URL = `${config.public.BASE_URL}/users/`
  const phone_number = window.localStorage.getItem('phone_number')

  if (!phone_number)
    return toast.info('No phone number provided')

  const body_data = {
    fullname: data.value?.user?.name,
    tel_number: phone_number,
    email: data.value?.user?.email,
    picture: data.value?.user?.image,
  }

  try {
    const res = await axios.post(BASE_URL, body_data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    window.localStorage.setItem('kikao_token', res.data.access_token)
    toast.success(`Hi ${res.data.user.name}, your account was successfully created`)
    userStore.updateUser(res.data.user)
  }
  catch (error) {
    handleError(error)
  }
  window.localStorage.removeItem('phone_number')
  router.push('/')
}
</script>

<template>
  <div v-if="status === 'unauthenticated'">
    <div class="w-full px-10 text-[14px] leading-6 md:mx-auto md:w-[400px] md:px-0">
      <div class="w-full flex items-center justify-center pt-20">
        <div class="md:text-justified items-center text-center">
          <h1 class="text-3xl font-extrabold text-black">
            Create your Account
          </h1>
          <p class="py-10 normal_text">
            Please note that phone verification is required for signup. Your phone number will be solely used for identity
            verification to ensure security.
          </p>
          <div class="w-full flex flex-col items-center justify-center gap-y-5 py-8">
            <div class="mx-auto w-4/5 flex">
              <span
                class="flex flex-col gap-y-1.5 overflow-hidden border border-r-0 border-gray-300 rounded-l-md p-1 text-gray-900"
              >
                <span class="text-xs text-gray-400">Country/Region</span>
                <div class="flex items-center justify-center gap-x-2">
                  <IconsKenyanFlag class="h-4 w-4" />
                  <p class="text-xs">(+254)</p>
                </div>
              </span>
              <input
                v-model="telNumber" min="10" max="10" type="text"
                class="w-full flex-1 border border-gray-300 rounded-none rounded-r-lg bg-gray-50 py-1 text-center text-sm text-gray-900 focus:border-gray-500 focus:ring-gray-300"
                placeholder="Enter telephone number"
              >
            </div>
            <button
              type="submit"
              class="mt-10 w-full flex items-center justify-center gap-x-4 btn_signup"
              @click="verifyPhoneNumber"
            >
              <GoogleIcon />
              <p>Continue with Google</p>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-auto w-80 flex items-center justify-center gap-x-4 py-20 text-center">
      <p class="text-sm font-light leading-5 tracking-wide text-gray">
        By continuing, you agree to Kikao’s <a href="/terms" class="terms">
          Terms of Service
        </a>and acknowledge Kikao’s <a href="privacy" class="terms">
          Privacy Policy.
        </a>
      </p>
    </div>
  </div>
</template>
