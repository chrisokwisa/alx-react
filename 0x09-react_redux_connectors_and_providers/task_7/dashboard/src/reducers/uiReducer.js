import { Map } from "immutable";
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../actions/uiActionTypes";

export const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
});

const uiReducer = (state = Map(initialState), action) => {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set("isNotificationDrawerVisible", true);

    case HIDE_NOTIFICATION_DRAWER:
      return state.set("isNotificationDrawerVisible", false);

    case LOGIN_SUCCESS:
      return state.set("isUserLoggedIn", true);

    case LOGIN_FAILURE:
      return state.set("isUserLoggedIn", false);

    case LOGIN:
      return state.set("uset", action.user);

    case LOGOUT:
      return state.get("isUserLoggedIn", false).set("user", null);

    default:
      break;
  }
  return state;
};

export default uiReducer;
