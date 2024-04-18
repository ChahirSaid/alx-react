import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('course action creators', () => {
	it('select course', () => {
		const course = selectCourse(1);

		expect(course).toEqual({ type: SELECT_COURSE, index: 1 });
	});

	it('unselect course', () => {
		const course = unSelectCourse(1);

		expect(course).toEqual({ type: UNSELECT_COURSE, index: 1 });
	});
});
