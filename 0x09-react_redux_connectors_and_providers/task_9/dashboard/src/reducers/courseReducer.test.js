import {
	FETCH_COURSE_SUCCESS,
	SELECT_COURSE,
	UNSELECT_COURSE,
} from '../actions/courseActionTypes';
import courseReducer from './courseReducer';

describe('course reducer', () => {
	it('the default state returns an empty array', () => {
		const state = courseReducer(undefined, {});
		expect(state).toEqual([]);
	});

	it('should handle FETCH_COURSE_SUCCESS', () => {
		const action = {
			type: FETCH_COURSE_SUCCESS,
			data: [
				{ id: 1, name: 'Course 1', credit: 40 },
				{ id: 2, name: 'Course 2', credit: 20 },
				{ id: 3, name: 'Course 3', credit: 30 },
			],
		};
		const state = courseReducer(undefined, action);
		expect(state).toEqual([
			{ id: 1, name: 'Course 1', credit: 40 },
			{ id: 2, name: 'Course 2', credit: 20 },
			{ id: 3, name: 'Course 3', credit: 30 },
		]);
	});

	it('should handle SELECT_COURSE', () => {
		const action = {
			type: SELECT_COURSE,
			index: 2,
		};
		const state = courseReducer(
			[
				{ id: 1, name: 'Course 1', credit: 40, isSelected: false },
				{ id: 2, name: 'Course 2', credit: 20, isSelected: false },
				{ id: 3, name: 'Course 3', credit: 30, isSelected: false },
			],
			action
		);
		expect(state).toEqual([
			{ id: 1, name: 'Course 1', credit: 40, isSelected: false },
			{ id: 2, name: 'Course 2', credit: 20, isSelected: false },
			{ id: 3, name: 'Course 3', credit: 30, isSelected: false },
		]);
	});

	it('should handle UNSELECT_COURSE', () => {
		const action = {
			type: UNSELECT_COURSE,
			index: 2,
		};
		const state = courseReducer(
			[
				{ id: 1, name: 'Course 1', credit: 40, isSelected: false },
				{ id: 2, name: 'Course 2', credit: 20, isSelected: true },
				{ id: 3, name: 'Course 3', credit: 30, isSelected: false },
			],
			action
		);
		expect(state).toEqual([
			{ id: 1, name: 'Course 1', credit: 40, isSelected: false },
			{ id: 2, name: 'Course 2', credit: 20, isSelected: true },
			{ id: 3, name: 'Course 3', credit: 30, isSelected: false },
		]);
	});
});
