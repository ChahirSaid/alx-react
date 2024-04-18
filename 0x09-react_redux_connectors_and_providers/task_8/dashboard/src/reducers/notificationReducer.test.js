import { Map } from 'immutable';
import notificationReducer, {
	initialNotificationState,
} from './notificationReducer';

describe('notification reducer', () => {
	it('should return the initial state', () => {
		expect(notificationReducer(undefined, {})).toEqual(
			Map(initialNotificationState)
		);
	});
});
