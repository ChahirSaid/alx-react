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

  describe('onClick event', () => {
    it('call console.log on click', () => {
      const wrapper = shallow(<Notifications />);
      const spy = jest.spyOn(console, 'log').mockImplementation();

      wrapper.instance().markAsRead() = spy;
      wrapper.instance().markAsRead(1);
      expect(wrapper.instance().markAsRead).toBeCalledWith(1);
      expect(spy).toBeCalledTimes(1);
      expect(spy).toBeCalledWith(1);
      spy.mockRestore();
    });
  })
});
