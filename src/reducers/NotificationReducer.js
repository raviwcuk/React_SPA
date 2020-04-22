import {SET_NOTIFICATION} from './../actions/Notification';

export const NotificationInitialState = {}

export const NotificationReducer = (state = NotificationInitialState, action) => {
  switch (action.type) {
    case SET_NOTIFICATION:
      return { ...state, message: action.payload.message, type:action.payload.type }
    default:
      return state
  }
}