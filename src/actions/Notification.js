export const SET_NOTIFICATION = 'SET_NOTIFICATION';
export const setNotification = (payload) => {
  return {
    type: SET_NOTIFICATION,
    payload
  }
}

export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION'
export const clearNotification = () => {
  return {
    type: CLEAR_NOTIFICATION
  }
}