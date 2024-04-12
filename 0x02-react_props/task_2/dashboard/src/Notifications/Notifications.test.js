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
		expect(wrapper.exists('NotificationItem')).toBe(true);
	})

	it('Checks first Item renders to have correct html', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.html()).toContain('New course available');
	})
})
