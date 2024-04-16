import * as Data from '../../notifications.json';
import { normalize, schema } from 'normalizr';

export const getAllNotificationsByUser = (userId) => {
	return Data.default
		.filter((notification) => notification.author.id === userId)
		.map(({ context }) => context);
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
