import { Map } from 'immutable';

export const filterTypeSelected = (state) => state.get('filter');

export const getNotifications = (state) => Map(state.get('notifications'));

export const getUnreadNotifications = (state) => {
	const notifications = state.get('notifications');
	return Map(notifications.filter((notification) => !notification.isRead));
};
