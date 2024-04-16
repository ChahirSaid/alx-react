import * as Data from '../../notifications.json';

export const getAllNotificationsByUser = (userId) => {
	return Data.default
		.filter((notification) => notification.author.id === userId)
		.map(({ context }) => context);
};
