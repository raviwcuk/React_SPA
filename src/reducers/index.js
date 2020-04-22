import { combineReducers } from "./CombineReducer";
import {NotificationReducer} from './NotificationReducer';

export const rootReducer = combineReducers({
  notification: NotificationReducer
});