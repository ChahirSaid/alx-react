import {
	FETCH_NOTIFICATIONS_SUCCESS,
	MARK_AS_READ,
	SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

export const initialNotificationState = {
	notifications: [],
	filter: 'DEFAULT',
};

const notificationReducer = (state = initialNotificationState, action) => {
	switch (action.type) {
		case FETCH_NOTIFICATIONS_SUCCESS:
			return {
				...state,
				notifications: action.data.map((notification) => ({
					...notification,
					isRead: false,
				})),
			};

		case MARK_AS_READ:
			return {
				...state,
				notifications: action.data.map((notification) => ({
					...notification,
					isRead: notification.id === action.index && true,
				})),
			};

		case SET_TYPE_FILTER:
			return {
				...state,
				filter: action.filter,
			};

		default:
			break;
	}
	return state;
};

export default notificationReducer;
