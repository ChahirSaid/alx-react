import * as selectors from './notificationSelector';
import notificationReducer from '../reducers/notificationReducer';
import { Map } from 'immutable';

describe('notification selector', () => {
	it('Test that filterTypeSelected works as expected', () => {
		const state = notificationReducer();
		expect(selectors.filterTypeSelected(state)).toEqual('DEFAULT');
	});

	it('Test that getNotifications works as expected', () => {
		const state = notificationReducer();
		expect(selectors.getNotifications(state)).toEqual(Map([]));
	});
});
