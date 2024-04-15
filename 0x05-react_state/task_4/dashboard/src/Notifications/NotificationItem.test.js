import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import NotificationItem from './NotificationItem';

beforeEach(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('NotificationItem component', () => {
	it('renders without crashing', () => {
		expect(shallow(<NotificationItem />).exists());
	});

	it('renders correct type', () => {
		const wrapper = shallow(<NotificationItem type='default' />);
		expect(wrapper.find('[data-notification-type="default"]').exists());
	});

	it('renders correct value', () => {
		const wrapper = shallow(<NotificationItem type='default' value='test' />);
		expect(wrapper.text()).toEqual('test');
	});

	// it('renders correct html', () => {
	// 	const wrapper = shallow(
	// 		<NotificationItem html={{ __html: '<u>test</u>' }} />
	// 	);
	// 	const li = wrapper.find('li');
	// 	expect(li.html()).toEqual(
	// 		'<li data-notification-type="default"><u>test</u></li>'
	// 	);
	// });

	// describe('onClick event', () => {
	// 	it('call console.log', () => {
	// 		const wrapper = shallow(<NotificationItem />);
	// 		const spy = jest.fn();

	// 		wrapper.setProps({ value: 'test item', markAsRead: spy, id: 1 });
	// 		wrapper.find('li').props().onClick();
	// 		expect(spy).toBeCalledTimes(1);
	// 		expect(spy).toBeCalledWith(1);
	// 		spy.mockRestore();
	// 	});
	// });
});
