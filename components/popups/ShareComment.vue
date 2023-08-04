<script setup lang="ts">
import { sanitizeUrl } from '@braintree/sanitize-url'
import type { Review } from '~/types'
import { formatDate } from '~/utils'

const prop = withDefaults(
  defineProps<{
    review: Review
  }>(),
  {},
)

defineEmits(['close'])

const reviewLink = ref<string>('prop.review.id')

function copyReviewLink() {
  if (reviewLink.value === '')
    return

  navigator.clipboard
    .writeText(reviewLink.value)
    .then(() => {
      toastSuccess('Link copied to clipboard!')
    })
    .catch(() => {
      toastError('Could not copy link to clipboard')
    })
}

function twitterShare() {
  window.open(
    sanitizeUrl(
			`https://twitter.com/share?url=${encodeURIComponent(
				reviewLink.value.toString(),
			)}&hashtags=#kikao&text=Kikao Business Review by ${prop.review.name}`,
    ),
  )
}

function facebookShare() {
  window.open(sanitizeUrl(`https://www.facebook.com/sharer/sharer.php?u=${reviewLink.value}`))
}

function linkedinShare() {
  window.open(
    sanitizeUrl(
			`https://www.linkedin.com/shareArticle?url=${reviewLink.value}&title=${prop.review.name}&summary=${
				prop.review.name ? prop.review.text : prop.review.name
			}&source=kikao.co.ke`,
    ),
  )
}

function mailShare() {
  window.open(
    sanitizeUrl(
			`mailto:?subject=${prop.review.name}&body=${
				prop.review.name ? prop.review.name : prop.review.text
			}%0D%0A%0D%0A${reviewLink.value}`,
    ),
  )
}

function shareOnWhatsApp() {
  const whatsappUrl = `whatsapp://send?text=${prop.review.text}%20${encodeURIComponent(reviewLink.value)}`
  window.location.href = whatsappUrl
}

function shareOnReddit() {
  const redditUrl = `https://www.reddit.com/submit?title=${prop.review.name})}&url=${encodeURIComponent(reviewLink.value)}`
  window.open(redditUrl, '_blank')
}

function shareOnPinterest() {
  const pinterestUrl = `http://pinterest.com/pin/create/link/?url=${encodeURIComponent(reviewLink.value)}`
  window.open(pinterestUrl, '_blank')
}
</script>

<template>
  <!-- Small Modal -->
  <div
    class="popup modal-animation fixed bottom-0 left-0 right-0 top-0 z-30 h-screen w-full flex flex-col items-center justify-center bg-gray-800 bg-opacity-50 py-16 dark:bg-opacity-50"
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
            class="avatar_icon flex items-center justify-center border border-gray-300 rounded-full text-center hover:bg-gray-200 focus:outline-none"
            @click="$emit(`close`)"
          >
            <IconsXIcon class="icon" />
          </button>
        </div>
        <!-- Modal body -->
        <div class="px-4 pt-2">
          <div>
            <div class="w-full border border border-gray-300 rounded-lg p-5">
              <div class="fle-row flex justify-between pt-2">
                <div class="flex items-center gap-x-4">
                  <img class="avatar_icon" :src="`${review.user.photo}`" alt="Kikao reviewr avatar image" loading="eager">
                  <div>
                    <div class="flex items-center justify-between">
                      <h1 class="text-[14px] font-semibold">
                        {{ review.user.full_name }}
                      </h1>
                    </div>
                    <div class="flex items-center pt-1">
                      <IconsStartFull
                        v-for="i in review.rating" :key="i"
                        class="star text-yellow-500"
                      />
                      <IconsStartFull
                        v-for="i in (5 - review.rating)" :key="i"
                        class="star text-gray-500"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex items-center gap-x-4">
                  <p class="date">
                    {{ formatDate(review.created_at) }}
                  </p>
                </div>
              </div>
              <div class="pt-2">
                <p class="normal_text">
                  {{ review.text.slice(0, 300) }}
                </p>
              </div>
            </div>
          </div>
          <div class="pt-3">
            <p class="b_text">
              Socials
            </p>
            <div class="flex flex-wrap items-center gap-x-4 pt-4">
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
              <button class="share_button" @click="copyReviewLink">
                <IconsSocialsShare class="icon" />
              </button>
            </div>
          </div>
          <!-- Modal footer -->
          <div class="flex items-center justify-start py-8 space-x-2">
            <button data-modal-hide="small-modal" type="button" class="border border-gray-200 rounded-lg bg-white px-8 py-3 text-sm font-medium text-gray-500 focus:z-10 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-200" @click.self="$emit(`close`)">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
