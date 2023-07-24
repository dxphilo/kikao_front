import { defineStore } from 'pinia'

export const useRootStore = defineStore('rootStore', {
  state: () => {
    return {
      user_info: {

      },
    }
  },
  actions: {
    toggleShowAddPopup() {
      this.show_add_popup = !this.show_add_popup
    },

  },
  getters: {
    addPopupState: (state) => {
      return state.show_add_popup
    },
  },
})
