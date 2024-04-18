import React from 'react';
import { NotificationsContainer } from './NotificationsContainer';
import { shallow } from 'enzyme';

describe('Notifications Container', () => {
	it('verify that the function fetchNotifications is called when the component is mounted', () => {
		const wrapper = shallow(
			<NotificationsContainer fetchNotifications={jest.fn()} />
		);

		expect(jest.fn()).toHaveBeenCalled();

		jest.restoreAllMocks();
	});
});
