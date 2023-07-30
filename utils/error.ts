import { AxiosError } from 'axios'
import { useToast } from 'vue-toastification'

const toast = useToast()

export function handleError(error: any) {
  if (error instanceof AxiosError && error.response) {
    // Check for specific status codes and show toast messages accordingly
    const statusCode = error.response.status
    if (statusCode === 404) {
      toast.error('Not found: The requested resource was not found.')
    }
    else if (statusCode === 403) {
      toast.warning(error.response.data.detail)
    }
    else if (statusCode === 429) {
      toast.warning('Rate Limited: Too many requests, please try again later.')
    }
    else if (statusCode >= 500) {
      toast.error('Server Error: An internal server error occurred.')
    }
    else if (error.message === 'Network Error') {
      // implement retry here
      toast.error('No internet connection. Please check your network connection.')
    }
  }
  else if (error.request) {
    // The request was made, but no response was received
    toast.error('No response received from the server.')
  }
  else {
    console.warn(error)
    // A different error occurred here
    toast.error('An unexpected error occurred:')
  }
}
