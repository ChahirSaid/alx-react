import { Map } from 'immutable';
import { createSelector } from 'reselect';

export const filterTypeSelected = (state) => state.get('filter');

export const getNotifications = (state) => Map(state.get('notifications'));

export const getUnreadNotifications = (state) => {
	const notifications = state.get('notifications');
	return Map(notifications.filter((notification) => !notification.isRead));
};

const getNotificationsSelector = (state) => state.notifications;

export const getUnreadNotificationsByType = createSelector(
	getNotificationsSelector,
	(notifications) => {
		if (notifications.get('messages')) {
			let filtered;

			if (notifications.get('filter') === 'URGENT') {
				filtered = messages
					.valueSeq()
					.filter(
						(value) =>
							value.get('isRead') === false && value.get('type') === 'urgent'
					);
			} else {
				filtered = messages
					.valueSeq()
					.filter((value) => value.get('isRead') === false);
			}

			return filtered;
		}
		return notifications.get('messages');
	}
);
