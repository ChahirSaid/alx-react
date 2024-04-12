import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import CourseList from './CourseList';

describe('<CourseListRow />', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<CourseListRow />);
		expect(wrapper.exists()).toBe(true);
	});

	it('renders the 5 different rows', () => {
		const wrapper = shallow(<CourseList />);
		expect(wrapper.find('CourseListRow')).toHaveLength(5);
	});
});
