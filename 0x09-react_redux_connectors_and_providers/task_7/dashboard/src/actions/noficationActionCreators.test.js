import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";
import {
  markAsRead,
  setNotificationFilter,
} from "./notificationActionCreators";
import { NotificationTypeFilters } from "./notificationActionTypes";

describe("notification action creators", () => {
  it("creates a markAsRead action", () => {
    const expectedAction = { type: MARK_AS_READ, index: 1 };
    const action = markAsRead(1);
    expect(action).toEqual(expectedAction);
  });

  it("creates a setNotificationFilter action", () => {
    const expectedAction = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.DEFAULT,
    };
    const action = setNotificationFilter(NotificationTypeFilters.DEFAULT);
    expect(action).toEqual(expectedAction);
  });
});
