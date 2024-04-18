import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import CourseList from './CourseList';

describe('<CourseListRow />', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<CourseListRow />);
		expect(wrapper.exists()).toBe(true);
	});

	it('verify that when you pass a list of courses, the component renders it correctly', () => {
		const wrapper = shallow(
			<CourseList
				listCourses={[
					{ id: 1, name: 'ES6', credit: 60 },
					{ id: 2, name: 'Webpack', credit: 20 },
					{ id: 3, name: 'React', credit: 40 },
				]}
			/>
		);
		expect(wrapper.find('CourseListRow').length).toBe(5);
	});
});
