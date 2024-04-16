import {
	markAsAread,
	setNotificationFilter,
} from './notificationActionCreators';
import {
	MARK_AS_READ,
	NotificationTypeFilters,
	SET_TYPE_FILTER,
} from './notificationActionTypes';

describe('notification Action Creators', () => {
	it('markAsRead', () => {
		const notification = markAsAread(1);

		expect(notification).toEqual({ type: MARK_AS_READ, index: 1 });
	});

	it('setNotificationFilter', () => {
		const notification = setNotificationFilter(NotificationTypeFilters.DEFAULT);

		expect(notification).toEqual({ type: SET_TYPE_FILTER, filter: 'DEFAULT' });
	});
});
