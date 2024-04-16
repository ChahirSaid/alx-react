import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection component', () => {
	it('should render correctly', () => {
		const wrapper = shallow(
			<BodySection title='test title'>
				<p>test children node</p>
			</BodySection>
		);

		expect(wrapper.exists()).toBeTruthy();
		expect(wrapper.exists('h2')).toBeTruthy();
		expect(wrapper.find('h2').html()).toEqual('<h2>test title</h2>');
		expect(wrapper.exists('p')).toBeTruthy();
		expect(wrapper.find('p').text()).toEqual('test children node');
	});
});
