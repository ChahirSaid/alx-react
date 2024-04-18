import { Map } from 'immutable';
import { FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import coursesNormalizer from '../schema/courses';

export const initialCourseState = [];

const courseReducer = (state = Map([]), action) => {
	switch (action.typr) {
		case FETCH_COURSE_SUCCESS:
			const normalizedData = coursesNormalizer(action.data);
			Object.keys(normalizedData).map((key) => {
				normalizedData[key].isSelected = false;
			});

		case SELECT_COURSE:
			return state.setIn([String(action.index), 'isSelected'], true);

		case UNSELECT_COURSE:
			return state.setIn([String(action.index), 'isSelected'], false);

		default:
			break;
	}
	return state;
};

export default courseReducer;
