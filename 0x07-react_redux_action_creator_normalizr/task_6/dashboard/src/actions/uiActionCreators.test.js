import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
} from "./uiActionCreators";
import {
  LOGIN,
  LOGOUT,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("loginRequest action", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates LOGIN and LOGIN_SUCCESS actions if the login request is successful", () => {
    const email = "test@example.com";
    const password = "testpassword";
    const expectedActions = [{ type: LOGIN_REQUEST }, { type: LOGIN_SUCCESS }];

    fetchMock.postOnce("/login", {
      body: { email: email, password: password },
      headers: { "content-type": "application/json" },
    });

    const store = mockStore({});

    return store.dispatch(loginRequest(email, password)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("UI action creators", () => {
  describe("login", () => {
    it("should create an action to log in a user", () => {
      const email = "test@example.com";
      const password = "password123";
      const expectedAction = {
        type: LOGIN,
        user: { email, password },
      };
      expect(login(email, password)).toEqual(expectedAction);
    });
  });

  describe("logout", () => {
    it("should create an action to log out a user", () => {
      const expectedAction = {
        type: LOGOUT,
      };
      expect(logout()).toEqual(expectedAction);
    });
  });

  describe("displayNotificationDrawer", () => {
    it("should create an action to display the notification drawer", () => {
      const expectedAction = {
        type: DISPLAY_NOTIFICATION_DRAWER,
      };
      expect(displayNotificationDrawer()).toEqual(expectedAction);
    });
  });

  describe("hideNotificationDrawer", () => {
    it("should create an action to hide the notificatuon drawer", () => {
      const expectedAction = {
        type: HIDE_NOTIFICATION_DRAWER,
      };
      expect(hideNotificationDrawer()).toEqual(expectedAction);
    });
  });
});
