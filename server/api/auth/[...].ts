// file: ~/server/api/auth/[...].ts
import GoogleProvider from 'next-auth/providers/google'
import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GoogleProvider.default({
      clientId: '44226025294-h1kua1iuland47or4pdpgrcld7bgb1l3.apps.googleusercontent.com',
      clientSecret: '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',
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
})
