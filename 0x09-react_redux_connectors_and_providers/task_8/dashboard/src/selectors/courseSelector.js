export const getListCourses = (state) => {
	if (state.courses) {
		return courses.valueSeq();
	}

	return courses;
};
