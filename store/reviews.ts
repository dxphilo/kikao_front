import axios from 'axios'
import { defineStore } from 'pinia'
import type { Review } from '~/types'

interface reviewsStore {
  reviews: Review[]
  business_review: Record<string, Review[]>
}
export const useReviewStore = defineStore('reviewsStore', {
  state: (): reviewsStore => {
    return {
      reviews: [],
      business_review: {},
    }
  },
  persist: true,
  actions: {
    async getReviews() {
      const config = useRuntimeConfig()
      try {
        const response = await axios.get(`${config.public.BASE_URL}/reviews/`)

        const data = await response.data
        this.reviews = data.data
      }
      catch (error) {
        handleError(error)
      }
    },
    async getBusinessReviews(business_id: string) {
      const config = useRuntimeConfig()
      try {
        const response = await axios.get(`${config.public.BASE_URL}/reviews/${business_id}`)

        const data = await response.data
        this.$state.business_review[business_id] = data.data
      }
      catch (error) {
        handleError(error)
      }
    },

  },
  getters: {
  },
})
