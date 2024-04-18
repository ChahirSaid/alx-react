import { FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';

const courseReducer = (state = [], action) => {
	switch (action.typr) {
		case FETCH_COURSE_SUCCESS:
			return action.data.map((course) => ({ ...course, isSelected: false }));
		case SELECT_COURSE:
			return state.map((course) => ({
				...course,
				isSelected: course.id === action.index,
			}));
		case UNSELECT_COURSE:
			return state.map((course) => ({
				...course,
				isSelected: course.id === action.index && false,
			}));
		default:
			break;
	}
};

export default courseReducer;
