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

describe('When props of the component are updated', () => {
	let listNotifications;
	let wrapper;
	let shouldComponentUpdate;

	beforeEach(() => {
		listNotifications = [
			{ id: 1, type: 'default', value: 'New course available' },
			{ id: 2, type: 'urgent', value: 'New resume available' },
		];
		wrapper = shallow(
			<Notifications displayDrawer listNotifications={listNotifications} />
		);
		shouldComponentUpdate = jest.spyOn(
			Notifications.prototype,
			'shouldComponentUpdate'
		);
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	it('does not rerender if the list is the same', () => {
		wrapper.setProps({ listNotifications: listNotifications });
		expect(shouldComponentUpdate).toHaveBeenCalled();
		expect(shouldComponentUpdate).toHaveLastReturnedWith(false);
	});

	it('does rerender if the list is longer', () => {
		const latestNotification = [];
		const listNotifications2 = [
			...listNotifications,
			{ id: 3, type: 'urgent', html: { __html: latestNotification } },
		];
		wrapper.setProps({ listNotifications: listNotifications2 });
		expect(shouldComponentUpdate).toHaveBeenCalled();
		expect(shouldComponentUpdate).toHaveLastReturnedWith(true);
	});
});
