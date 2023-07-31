import axios from 'axios'
import { defineStore } from 'pinia'
import type { Business } from '~/types'

interface businnessesStore {
  businesses: Business[]
  business_info: Record<string, Business>
}
export const useBusinessesStore = defineStore('businessesStore', {
  state: (): businnessesStore => {
    return {
      businesses: [],
      business_info: {},
    }
  },
  actions: {
    async fetchBusinesses() {
      const config = useRuntimeConfig()
      try {
        const response = await axios.get(`${config.public.BASE_URL}/businesses/`)
        const data = await response.data
        this.businesses = data
      }
      catch (error) {
        handleError(error)
      }
    },
    async fetchBusiness(business_id: string) {
      const config = useRuntimeConfig()
      try {
        const response = await axios.get(`${config.public.BASE_URL}/businesses/${business_id}`)
        const data = await response.data
        this.$state.business_info[business_id] = data
      }
      catch (error) {
        handleError(error)
      }
    },

  },
  getters: {
  },
})
