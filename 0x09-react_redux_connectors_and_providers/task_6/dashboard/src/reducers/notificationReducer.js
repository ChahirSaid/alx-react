import { Map } from 'immutable';
import {
	FETCH_NOTIFICATIONS_SUCCESS,
	MARK_AS_READ,
	SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';
import notificationsNormalizer from '../schema/notifications';

export const initialNotificationState = {
	notifications: [],
	filter: 'DEFAULT',
	loading: false,
};

const notificationReducer = (state = Map(initialNotificationState), action) => {
	switch (action.type) {
		case FETCH_NOTIFICATIONS_SUCCESS:
			const normalizedData = notificationsNormalizer(action.data);
			Object.keys(normalizedData).map((key) => {
				normalizedData[key].isRead = false;
			});
			return state.mergeDeep(normalizedData);

		case MARK_AS_READ:
			return state.setIn(
				['notifications', String(action.index), 'isRead'],
				true
			);

		case SET_TYPE_FILTER:
			return state.setIn(['filter'], action.filter);

		case SET_LOADING_STATE:
			return state.set('loading', action.loading);

		default:
			break;
	}
	return state;
};

export default notificationReducer;
