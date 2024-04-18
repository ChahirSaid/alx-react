import React from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';

const TestComponent = () => <p>Test Component</p>;

describe('WithLogging tests', () => {
	let spy;

	beforeEach(() => {
		spy = jest.spyOn(console, 'log').mockImplementation();
	});

	afterEach(() => {
		spy.mockRestore();
	});

	it('should call console.log on mount and dismount', () => {
		const NewComponent = WithLogging(TestComponent);
		const wrapper = shallow(<NewComponent />);

		expect(spy).toHaveBeenCalledTimes(1);
		wrapper.unmount();
		expect(spy).toHaveBeenCalledTimes(2);
	});

	it('should log out the right message on mount and on unmount', () => {
		const NewComponent = WithLogging(TestComponent);
		const wrapper = shallow(<NewComponent />);

		expect(spy).toHaveBeenCalledTimes(1);
		expect(spy).toHaveBeenCalledWith('Component TestComponent is mounted');
		wrapper.unmount();
		expect(spy).toHaveBeenCalledTimes(2);
		expect(spy).toHaveBeenCalledWith('Component Test is going to unmount');
	});
});
