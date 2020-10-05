import { combineReducers } from "./CombineReducer";
import {NotificationReducer} from './NotificationReducer';
import { AuthReducer } from './AuthReducer'

export const rootReducer = combineReducers({
  notification: NotificationReducer,
  auth: AuthReducer
});