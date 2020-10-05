export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const setAuthentication = payload => {
  return {
    type: LOGIN_SUCCESS,
    payload
  }
}

export const CLEAR_LOGIN = 'CLEAR_LOGIN'
export const clearLogin = () => {
  return {
    type: CLEAR_LOGIN
  }
}
