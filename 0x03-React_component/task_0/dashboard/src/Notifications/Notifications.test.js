import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications.test.js', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Notifications />);
	});

	it('should render without crashing', () => {
		expect(wrapper.exists());
	});

	it('Checks that the NotificationItem component renders elements', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.exists('NotificationItem')).toBe(false);
	});

	it('Checks that the menu item is being displayed', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.find('.menuItem').exists()).toBe(true);
	});

	it('Checks that the div.Notifications is being displayed when displayDrawer is true', () => {
		const wrapper = shallow(<Notifications displayDrawer />);
		expect(wrapper.find('.Notifications').exists()).toBe(true);
	});

	it('Checks that the div.Notifications is not being displayed when displayDrawer is false', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.find('.Notifications').exists()).toBe(false);
	});

	it('verify that Notifications renders correctly if you pass an empty array or if you don’t pass the listNotifications property', () => {
		const wrapper = shallow(<Notifications notifications={[]} />);
		expect(wrapper.find('.NotificationItem').length).toBe(0);
	});
});
