import {
	displayNotificationDrawer,
	hideNotificationDrawer,
	login,
	logout,
} from './uiActionCreators';
import {
	DISPLAY_NOTIFICATION_DRAWER,
	HIDE_NOTIFICATION_DRAWER,
	LOGIN,
	LOGOUT,
} from './uiActionTypes';

describe('ui action creators', () => {
	it('Login', () => {
		const user = {
			email: 'user@example.com',
			password: 'password',
		};

		const data = {
			type: LOGIN,
			user,
		};

		const login = login(user.email, user.password);

		expect(login).toEqual(data);
	});

	it('Logout', () => {
		const data = {
			type: LOGOUT,
		};

		const logout = logout();

		expect(logout).toEqual(data);
	});

	it('DisplayNotificationDrawer', () => {
		const data = {
			type: DISPLAY_NOTIFICATION_DRAWER,
		};

		const displayNotificationDrawer = displayNotificationDrawer();

		expect(displayNotificationDrawer).toEqual(data);
	});

	it('HideNotificationDrawer', () => {
		const data = {
			type: HIDE_NOTIFICATION_DRAWER,
		};

		const hideNotificationDrawer = hideNotificationDrawer();

		expect(hideNotificationDrawer).toEqual(data);
	});
});
