import { Map, fromJS } from 'immutable';
import { getListCourses } from './courseSelector';

describe('course selectors', () => {
	it('verify that the selector is working correctly', () => {
		const state = {
			courses: fromJS([
				{
					id: 1,
					name: 'course 1',
					isSelected: false,
					credit: 60,
				},
				{
					id: 2,
					name: 'course 2',
					isSelected: false,
					credit: 20,
				},
				{
					id: 3,
					name: 'course 3',
					isSelected: false,
					credit: 40,
				},
			]),
		};

		const expectedResult = [
			{
				id: 1,
				name: 'course 1',
				isSelected: false,
				credit: 60,
			},
			{
				id: 2,
				name: 'course 2',
				isSelected: false,
				credit: 20,
			},
			{
				id: 3,
				name: 'course 3',
				isSelected: false,
				credit: 40,
			},
		];

		expect(getListCourses(state).toJS()).toEqual(expectedResult);
	});
});
