import * as Data from '../../notifications.json';
import { normalize, schema } from 'normalizr';

export const getAllNotificationsByUser = (userId) => {
	const notifications = normalizedData.entities.notifications;
	const messages = normalizedData.entities.messages;
	const allNotificationsByUser = [];

	for (const key in notifications) {
		if (notifications[key].author === userId) {
			const message = messages[notifications[key].context];
			allNotificationsByUser.push(message);
		}
	}

	return allNotificationsByUser;
};

const user = new schema.Entity('users');

const message = new schema.Entity(
	'message',
	{},
	{
		idAttribute: 'guid',
	}
);

const notification = new schema.Entity('notifications', {
	author: user,
	context: message,
});

export const normalizedData = normalize(Data.default, [notification]);
