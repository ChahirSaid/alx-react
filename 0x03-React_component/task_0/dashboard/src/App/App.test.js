import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Login from '../Login/Login';

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
});
