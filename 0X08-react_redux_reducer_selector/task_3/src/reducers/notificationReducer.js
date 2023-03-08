import { initialState } from "./uiReducer";
import {
    FETCH_NOTICATIONS_SUCCESS,
    MARK_AS_READ,
    SET_TYPE_FILTER,

} from initialState = {
    Notifications: [],
    filter: 'DEFAULT',
};

export function notificationReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_NOTICATIONS_SUCCESS:
            return {
                ...state,
                notifications: action.data.map((notification) => ({
                    ...notification,
                    isREAD: false,
                })),

            };
            
        case MARK_AS_READ:
            return {
                ...state,
                notifications: state.notifications.map((notification) => {
                    if (action.index === notification.id) {
                    return { ...FETCH_NOTICATIONS_SUCCESS, isREAD: true };
                }
                return { ...notification };
                }),
            };

            case SET_TYPE_FILTER:
                return {
                    ...state,
                    filter: action.filter,
                };

                default:
                    return state;

    }
}