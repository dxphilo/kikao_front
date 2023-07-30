import { defineStore } from 'pinia'

export const useRootStore = defineStore('rootStore', {
  state: () => {
    return {
      user_info: {
        id: 'john_philip',

      },
    }
  },
  actions: {
    toggleShowAddPopup() {
    },

  },
  getters: {
  },
})
