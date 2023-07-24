<script setup lang="ts">
import LogoIcon from './icons/LogoIcon.vue'

const date = new Date().getFullYear()
</script>

<template>
  <footer
    class="fadeInUp wow bg-primary relative sticky border-t border-gray-200 bg-opacity-5 pb-30 pt-8 lg:pt-14 md:pt-20"
    data-wow-delay=".1s"
  >
    <div class="mx-auto w-4/5 pt-0 container">
      <div class="flex flex-wrap justify-center -mx-4 lg:justify-start">
        <div
          class="w-full flex flex-wrap items-center justify-center pl-4 text-center lg:w-4/12 md:w-1/2 xl:w-5/12 lg:justify-start lg:text-start"
        >
          <div class="mb-12 max-w-[360px]">
            <a
              href="/"
              class="mb-3 flex items-center justify-center gap-x-4 text-center text-xl font-semibold"
            >
              <LogoIcon class="h-[40px] w-10 text-green-500" />
              <span class="h-auto tracking-wide">Contact</span>
            </a>
            <div class="items-center justify-center gap-x-2 lg:ml-32">
              <div class="pb-2 text-base font-light text-gray-500 dark:text-gray-400">
                Discover great products, services and Businesses
              </div>
              <a href="mailto:contact@kikao.co.ke" class="text-base font-light text-green-500 dark:text-green-400">
                hello@kikao.co.ke
              </a>
              <div
                class="flex items-center justify-center gap-x-2 pt-2 lg:justify-start lg:text-start"
              >
                <a
                  href="https://twitter.com/kikaoHQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="social-link"
                  class="h-10 w-10 flex items-center justify-center border border-gray-200 rounded-full hover:bg-gray-200"
                >
                  <IconsSocialsFacebook class="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com/kikaoHQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="social-link"
                  class="h-10 w-10 flex items-center justify-center border border-gray-200 rounded-full hover:bg-gray-200"
                >
                  <IconsSocialsTwitter />
                </a>
                <a
                  href="https://youtube.com/@kikaoHQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="social-link"
                  class="h-10 w-10 flex items-center justify-center border border-gray-200 rounded-full hover:bg-gray-200"
                >
                  <IconsSocialsYoutube />
                </a>
                <a
                  href="https://tiktok.com/kikaoHQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="social-link"
                  class="h-10 w-10 flex items-center justify-center border border-gray-200 rounded-full hover:bg-gray-200"
                >
                  <IconsSocialsTikTok />
                </a>
                <a
                  href="https://linkedin.com/kikaoHQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="social-link"
                  class="h-10 w-10 flex items-center justify-center border border-gray-200 rounded-full hover:bg-gray-200"
                >
                  <IconsSocialsLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="w-full flex items-center justify-center px-4 text-center lg:w-2/12 md:w-1/2 sm:w-1/2 xl:w-2/12 lg:justify-start lg:text-start"
        >
          <div class="mb-8">
            <h2 class="mb-5 text-xl font-medium text-black">
              Useful Links
            </h2>
            <ul class="flex flex-col gap-y-2 font-light text-gray-500">
              <li>
                <a
                  href="/blog"
                  class="leading[20px] !important whitespace-pre-line text-center text-[16px] hover:underline hover:underline-offset-7"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  class="leading[20px] !important whitespace-pre-line text-center text-[16px] hover:underline hover:underline-offset-7"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/team"
                  class="leading[20px] !important mb-3 whitespace-pre-line text-center text-[16px] hover:underline hover:underline-offset-7"
                >
                  Team
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="w-full flex items-center justify-center px-4 text-center lg:w-2/12 md:w-1/2 sm:w-1/2 xl:w-2/12 lg:justify-start lg:text-start"
        >
          <div class="mb-8">
            <h2 class="mb-5 text-xl font-normal text-black">
              Terms
            </h2>
            <ul class="flex flex-col gap-y-2 font-light text-gray-500">
              <li>
                <a
                  href="/policy"
                  class="leading[20px] !important mb-3 whitespace-pre-line text-center text-[16px] hover:underline hover:underline-offset-7"
                >
                  TOS
                </a>
              </li>
              <li>
                <a
                  href="/policy"
                  class="leading[20px] !important mb-3 whitespace-pre-line text-center text-[16px] hover:underline hover:underline-offset-7"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/guide"
                  class="leading[20px] !important mb-3 whitespace-pre-line text-center text-[16px] hover:underline hover:underline-offset-7"
                >
                  Guide
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="w-full flex items-center justify-center pl-4 text-center lg:w-4/12 md:w-1/2 xl:w-3/12 lg:justify-start lg:text-start"
        >
          <div class="mb-8">
            <h2 class="mb-5 text-xl font-normal text-black">
              Support & Help
            </h2>
            <ul class="flex flex-col gap-y-2 font-light text-gray-500">
              <li>
                <a
                  href="/contact"
                  class="leading[20px] !important mb-3 whitespace-pre-line text-center text-[16px] hover:underline hover:underline-offset-7"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/policy"
                  class="leading[20px] !important mb-3 whitespace-pre-line text-center text-[16px] hover:underline hover:underline-offset-7"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  class="leading[20px] !important mb-3 whitespace-pre-line text-center text-[16px] hover:underline hover:underline-offset-7"
                >
                  FAQ's
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-primary/10 pb-5">
      <div class="flexjustify-center items-center text-center">
        <p class="text-center text-base font-normal">
          Copyright © {{ date }} Kikao Inc. All Rights Reserved
        </p>
      </div>
    </div>
  </footer>
</template>
