import { toJS } from 'immutable';
import uiReducer, { initialState } from './uiReducer';

describe('ui reducer', () => {
	it('should return the initial state', () => {
		expect(uiReducer(undefined, {}).toJS()).toEqual(initialState);
	});

	it('state returned by the uiReducer equals the initial state when the action SELECT_COURSE is passed', () => {
		expect(
			uiReducer(undefined, {
				type: 'SELECT_COURSE',
			}).toJS()
		).toEqual(initialState);
	});

	it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
		expect(
			uiReducer(initialState, {
				type: 'DISPLAY_NOTIFICATION_DRAWER',
			}).toJS()
		).toEqual({
			...initialState,
			isNotificationDrawerVisible: true,
		});
	});
});
