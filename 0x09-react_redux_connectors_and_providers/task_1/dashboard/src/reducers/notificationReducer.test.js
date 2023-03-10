import {
  MARK_AS_READ,
  setNotificationFilter,
  fetchNotificationsSuccess,
  markAsRead,
} from "../actions/notificationActionCreators";
import { notificationReducer } from "./notificationReducer";

describe("notification reducer", () => {
  const initialState = {
    Notification: [],
    filter: "DFAULT",
  };

  it("should return default state when no action is passed", () => {
    expect(notificationReducer(initialState, "null")).toEqual(initialState);
  });

  it("tests that the correct mark notification as read", () => {
    const data = {
      filter: "DEFAULT",
      Notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    };

    const expectedData = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: true,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    };

    expectedData(notificationReducer(data, markAsRead(2))).toEqual(
      expectedData
    );
  });

  it("tests should change the filter", () => {
    const data = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    };

    const expectedData = {
      filter: "URGENT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    };

    expect(notificationReducer(data, setNotificationFilter("URGENT"))).toEqual(
      expectedData
    );
  });

  it("return correct state on fetch", () => {
    const data = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    };

    expect(
      notificationReducer(initialState, fetchNotificationsSuccess())
    ).toEqual(data);
  });
});
