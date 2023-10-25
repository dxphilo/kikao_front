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
        const response = await axios.get(`${config.public.BASE_URL}/review/${business_id}`)

        const data = await response.data
        this.$state.business_review[business_id] = data.data
      }
      catch (error) {
        handleError(error)
      }
    },
    updateReview(review: Review, business_id: string) {
      const business_reviews = this.$state.business_review[business_id]

      if (!business_reviews) {
        this.$state.business_review[business_id] = [review]
        return
      }
      business_reviews.push(review)
      this.$state.business_review[business_id] = business_reviews
    }
    ,

  },
  getters: {
  },
})
