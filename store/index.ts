import { defineStore } from 'pinia'
import type { UserToken } from '~/types'

export const useRootStore = defineStore('rootStore', {
  state: () => {
    return {
      show_add_popup: false,
      is_logged_in: false,
      user_info: {
      },
    }
  },
  persist: true,
  actions: {
    toggleShowAddPopup() {
      this.show_add_popup = !this.show_add_popup
    },
    update_user_info(user_info: UserToken) {
      if (!user_info)
        return

      this.user_info = user_info
    },
  },
  getters: {
    addPopupState: (state) => {
      return state.show_add_popup
    },
    isLoggedIn: (state) => {
      return state.is_logged_in
    },
  },
})
