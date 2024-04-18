import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

export const selectCourse = (index) => {
	return {
		type: SELECT_COURSE,
		index,
	};
};

export const boundSelectCourse = (index) => dispatch(selectCourse(index));

export const unSelectCourse = (index) => {
	return {
		type: UNSELECT_COURSE,
		index,
	};
};

export const boundunSelectCourse = (index) => dispatch(unSelectCourse(index));
