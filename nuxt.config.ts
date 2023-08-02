import { pwa } from './config/pwa'
import { appDescription } from './constants/index'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@sidebase/nuxt-auth',
    '@nuxt/content',
  ],
  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
  },
  runtimeConfig: {
    public: {
      AUTH0_DOMAIN: 'dev-4ul2pemi.us.auth0.com',
      BASE_URL: process.env.NUXT_ENV_DOMAIN,
      GOOGLE_CLIENTID: process.env.GOOGLE_CLIENTID,
      GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
      TWILIO_ACCOUNT_SID: 'ACabd08e8a7825acef5a15a4946d7e1d88',
      AUTH0_AUTH_TOKEN: '06e32209cc24447e9c656ff47938807a',
      AUTH0_CLIENTID: 'CoSkVNZ49yEzwh1qXncQ6KFWvQgBqqvN',
      AUTH0_CLIENSECRET: 'rDYULFym-_4bij1zvsS_TYHvgkCp3CV4M47eSN8aHGbft15Syz4gwkEqE9z4aRfg',
    },
  },
  content: {
    // https://content.nuxtjs.org/api/configuration

  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  colorMode: {
    classSuffix: '',
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: ['/hi'],
    },
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  pwa,
  ssr: false,

  devtools: {
    enabled: true,
  },
})
