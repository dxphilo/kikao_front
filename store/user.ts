import { defineStore } from 'pinia'

// TypeScript interface for the User class
interface IUser {
  id: string
  name: string
  email: string
  tel_number: string
  picture: string
  access_token: string
}

interface IUserState {
  user_info: IUser
}
export const useUserStore = defineStore('userStore', {
  state: (): IUserState => {
    return {
      user_info: {
        id: '',
        name: '',
        email: '',
        tel_number: '',
        picture: '',
        access_token: '',
      },
    }
  },
  persist: true,
  actions: {
    updateUser(user_info: IUser) {
      this.user_info = user_info
    },
  },
  getters: {
  },
})
