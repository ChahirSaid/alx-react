import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
	describe('isHeader is true', () => {
		it('renders a th with colSpan=2 if textSecondCell is null', () => {
			const wrapper = shallow(
				<CourseListRow
					isHeader={true}
					textFirstCell='First'
					textSecondCell={null}
				/>
			);
			expect(wrapper.find('th')).toHaveLength(1);
			expect(wrapper.find('th').prop('colSpan')).toEqual('2');
		});

		it('renders two th elements if textSecondCell is not null', () => {
			const wrapper = shallow(
				<CourseListRow
					isHeader={true}
					textFirstCell='First'
					textSecondCell='Second'
				/>
			);
			expect(wrapper.find('th')).toHaveLength(2);
		});
	});

	describe('isHeader is false', () => {
		it('renders two td elements', () => {
			const wrapper = shallow(
				<CourseListRow
					isHeader={false}
					textFirstCell='First'
					textSecondCell='Second'
				/>
			);
			expect(wrapper.find('td')).toHaveLength(2);
		});
	});
});
