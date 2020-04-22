import axios from 'axios'
import { StorageService } from 'service'

axios.interceptors.request.use(
  config => {
    const user = StorageService.get('authorization')
    const otpverify = StorageService.get('otpVerification')
    if (!user && !otpverify) {
      return config
    } else {
      if (user) {
        config.headers.authorization = `Bearer ${user.access_token}`
      } else if (otpverify) {
        config.headers.authorization = `Bearer ${otpverify.access_token}`
      }
      return config
    }
  },
  error => Promise.reject(error)
)

axios.interceptors.response.use(
  response => response,
  error => {
    console.log('err', error.response)
    const { status } = error.response

    const isUserHasExpiredOrWrongToken = status === 401 && StorageService.get('authorization')

    if (isUserHasExpiredOrWrongToken) {
      StorageService.remove('authorization')
      window.location.href = '/'
    }

    return Promise.reject(error)
  }
)
