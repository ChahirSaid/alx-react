/**
 * @jest-environment jsdom
 */
import React from 'react';
import { mount, shallow } from 'enzyme';
import App, { mapStateToProps } from './App';
import Login from '../Login/Login';
import { fromJS } from 'immutable';

describe('App component', () => {
	it('renders without crashing', () => {
		expect(shallow(<App />).exists());
	});

	it('renders App-header', () => {
		expect(
			shallow(<App />)
				.find('.App-header')
				.exists()
		);
	});

	it('renders App-body', () => {
		expect(
			shallow(<App />)
				.find('.App-body')
				.exists()
		);
	});

	it('renders App-footer', () => {
		expect(
			shallow(<App />)
				.find('.App-footer')
				.exists()
		);
	});

	it('renders Notifications', () => {
		expect(
			shallow(<App />)
				.find('Notifications')
				.exists()
		);
	});

	it('renders Login', () => {
		expect(
			shallow(<App />)
				.find('Login')
				.exists()
		);
	});

	it('renders Header', () => {
		expect(
			shallow(<App />)
				.find('Header')
				.exists()
		);
	});

	it('renders Footer', () => {
		expect(
			shallow(<App />)
				.find('Footer')
				.exists()
		);
	});

	it('renders CourseList', () => {
		expect(
			shallow(<App isLoggedIn={true} />)
				.find('CourseList')
				.exists()
		);
	});

	it('renders Login', () => {
		expect(
			shallow(<App isLoggedIn={false} />)
				.find('Login')
				.exists()
		);
	});

	it('isLoggedIn is true', () => {
		expect(shallow(<App isLoggedIn={true} />).contains(<Login />)).toBe(false);
	});

	it('isLoggedIn is false', () => {
		expect(shallow(<App />).contains(<Login />)).toBe(true);
	});

	describe('Handle h key press', () => {
		let wrapper;

		beforeEach(() => {
			wrapper = mount(<App />);
		});

		afterEach(() => {
			wrapper.unmount();
		});

		it('calls logOut function', () => {
			const mocked = jest.fn();
			wrapper.setProps({ logOut: mocked });
			const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
			document.dispatchEvent(event);

			expect(mocked).toHaveBeenCalledTimes(1);
		});

		it('checks that alert function is called', () => {
			const spy = jest.spyOn(window, 'alert');
			const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
			document.dispatchEvent(event);

			expect(spy).toHaveBeenCalled();
			spy.mockRestore();
		});

		it('checks that the alert is "Logging you out"', () => {
			const spy = jest.spyOn(window, 'alert');
			const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
			document.dispatchEvent(event);

			expect(spy).toHaveBeenCalledWith('Logging you out');
			jest.restoreAllMocks();
		});

		it('verify that the mapStateToProps returns the right object', () => {
			const state = fromJS({ isUserLoggedIn: true });
			const result = mapStateToProps(state);
			expect(result).toEqual({ isLoggedIn: true });
		});
	});
});
