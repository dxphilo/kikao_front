<script setup lang="ts">
import { sanitizeUrl } from '@braintree/sanitize-url'
import { useToast } from 'vue-toastification'
import type { IBusiness } from '~/types'

const prop = withDefaults(
  defineProps<{
    link: string
    business: IBusiness
  }>(),
  {},
)

defineEmits(['close'])

const link = ref(prop.link)

const toast = useToast()

function copyShareLink() {
  if (link.value === '')
    return

  navigator.clipboard
    .writeText(link.value)
    .then(() => {
      toast.success('Link copied to clipboard!')
    })
    .catch(() => {
      toast.error('Could not copy link to clipboard')
    })
}

function twitterShare() {
  window.open(
    sanitizeUrl(
			`https://twitter.com/share?url=${encodeURIComponent(
				link.value,
			)}&hashtags=#kikao&text=${prop.business.name} Business on Kikao`,
    ),
  )
}

function facebookShare() {
  window.open(sanitizeUrl(`https://www.facebook.com/sharer/sharer.php?u=${link.value}`))
}

function linkedinShare() {
  window.open(
    sanitizeUrl(
			`https://www.linkedin.com/shareArticle?url=${link.value}&title=${prop.business.name}&summary=${
				prop.business.name ? prop.business.business_description : prop.business.name
			}&source=kikao.co.ke`,
    ),
  )
}

function mailShare() {
  window.open(
    sanitizeUrl(
			`mailto:?subject=${prop.business.name}&body=${
				prop.business.name ? prop.business.name : prop.business.business_description
			}%0D%0A%0D%0A${link.value}`,
    ),
  )
}

function shareOnWhatsApp() {
  const whatsappUrl = `https://wa.me/?text=${prop.business.name}%20${encodeURIComponent(link.value)}`
  window.open(whatsappUrl, '_blank')
}

function shareOnReddit() {
  const redditUrl = `https://www.reddit.com/submit?title=${prop.business.name})}&url=${encodeURIComponent(link.value)}`
  window.open(redditUrl, '_blank')
}

function shareOnPinterest() {
  const pinterestUrl = `http://pinterest.com/pin/create/link/?url=${encodeURIComponent(link.value)}`
  window.open(pinterestUrl, '_blank')
}
</script>

<template>
  <!-- Small Modal -->
  <div
    class="popup modal-animation fixed bottom-0 left-0 right-0 top-0 z-30 h-screen w-full flex flex-col items-center justify-center bg-gray-800 bg-opacity-80 py-16 dark:bg-opacity-80"
    @click.self="$emit(`close`)"
  >
    <div class="w-full flex items-center justify-center rounded-lg bg-white px-5 md:w-2/5">
      <!-- Modal content -->
      <div class="relative rounded-lg bg-white pt-5">
        <!-- Modal body -->
        <div class="px-4 pt-2">
          <div class="pt-4">
            <p class="text-xl font-medium text-gray-900">
              Socials
            </p>
            <div class="flex flex-wrap items-center gap-x-4 pt-10">
              <button class="share_button" @click="facebookShare">
                <IconsSocialsFacebook class="icon" />
              </button>
              <button class="share_button" rel="noopener noreferrer" @click="shareOnPinterest">
                <IconsSocialsPinterest class="icon" />
              </button>
              <button class="share_button" rel="noopener noreferrer" @click="twitterShare">
                <IconsSocialsTwitter class="icon" />
              </button>            <button class="share_button" rel="noopener noreferrer" @click="shareOnWhatsApp">
                <IconsSocialsWhatsapp class="icon" />
              </button>              <button class="share_button" rel="noopener noreferrer" @click="mailShare">
                <IconsSocialsEmail class="icon" />
              </button>
              <button class="share_button" rel="noopener noreferrer" @click="shareOnReddit">
                <IconsSocialsReddit class="icon" />
              </button>
              <button class="share_button" rel="noopener noreferrer" @click="linkedinShare">
                <IconsSocialsLinkedin class="icon" />
              </button>
              <button class="share_button" @click="copyShareLink">
                <IconsSocialsShare class="icon" />
              </button>
            </div>
          </div>
          <!-- Modal footer -->
          <div class="flex items-center justify-start py-8 space-x-2">
            <button data-modal-hide="small-modal" type="button" class="btn_inner" @click.self="$emit(`close`)">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
