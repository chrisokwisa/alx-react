import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

export const markAsRead = (index) => {
  return {
    type: MARK_AS_READ,
    index: index,
  };
};

export const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    filter: filter,
  };
};

// bind action creators to dispatch
export const boundMarkAsRead = (index) => (dispatch) => {
  dispatch(markAsRead(index));
};

export const boundSetNotificationFilter = (filter) => (dispatch) => {
  dispatch(setNotificationFilter(filter));
};
