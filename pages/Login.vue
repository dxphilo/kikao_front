<script setup lang="ts">
import { useHead } from 'unhead'
import { useToast } from 'vue-toastification'
import axios from 'axios'
import GoogleIcon from '~/components/icons/GoogleIcon.vue'
import { useUserStore } from '~/store/user'

const { status, signIn, data } = useAuth()
const config = useRuntimeConfig()
const router = useRouter()
const userStore = useUserStore()

useHead({
  title: 'Login - Kikao',
})

const toast = useToast()
const authStatus = computed(() => status.value)

if (authStatus.value === 'authenticated')
  login_user()

function logIn() {
  signIn('google')
}

async function login_user() {
  const BASE_URL = `${config.public.BASE_URL}/login/`

  const body_data = {
    fullname: data.value?.user?.name,
    email: data.value?.user?.email,
  }
  try {
    const data = await axios.post(BASE_URL, body_data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    window.localStorage.setItem('kikao_token', data.data.access_token)
    userStore.updateUser(data.data.user)
    toast.success('Login was Successful')
    window.localStorage.removeItem('phone_number')
    router.push('/')
  }
  catch (error) {
    handleError(error)
  }
}
</script>

<template>
  <div v-if="status === 'unauthenticated'" class="h-[500px]">
    <div class="w-full flex flex-col items-center justify-center pt-46 text-[14px] leading-6 text-black md:mx-auto md:w-[400px] md:px-0">
      <div class="w-full flex items-center justify-center pb-6">
        <div>
          <h1 class="text-center text-3xl font-semibold">
            Log in to Kikao
          </h1>
          <p class="b_text">
            Connect with great local businesses
          </p>
        </div>
      </div>
      <button
        type="submit"
        class="mt-10 flex items-center justify-center gap-x-4 btn_signup"
        @click="logIn()"
      >
        <GoogleIcon />
        <p>Continue with Google</p>
      </button>
    </div>
  </div>
</template>
