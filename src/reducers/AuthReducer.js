import { LOGIN_SUCCESS, CLEAR_LOGIN } from './../actions/Authentication'
import { StorageService } from './../services'

export const AuthInitialState = StorageService.get('authorization') || {}
export const AuthReducer = (state = AuthInitialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, ...action.payload.response }
    case CLEAR_LOGIN:
      return {}
    default:
      return state
  }
}
