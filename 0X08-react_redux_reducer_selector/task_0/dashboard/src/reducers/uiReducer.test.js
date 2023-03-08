import uiReducer from "./uiReducer";
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../actions/uiActionTypes";

describe("uiReducer", () => {
  it("returns the initial state when no action is passed", () => {
    const initialState = {
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    };
    const state = uiReducer(undefined, {}).toJS();
    expect(state).toEqual(initialState);
  });

  it("returns the initial state when the action SELECT_COURSE is passed", () => {
    const initialState = {
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    };
    const state = uiReducer(initialState, { type: "SELECT_COURSE" }).toJS;
    expect(state).toEqual(initialState);
  });

  it("correctly updates isNotificationDrawerVisible when the DISPLAY_NOTIFICATION_DRAWER action is passed", () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const state = uiReducer(initialState, {
      type: DISPLAY_NOTIFICATION_DRAWER,
    }).toJS();
    expect(state.isNotificationDrawerVisible).toBe(true);
  });
});
