import propTypes from 'prop-types';

export default CourseShape = {
	id: propTypes.number.isRequired,
	name: propTypes.string.isRequired,
	credit: propTypes.number.isRequired,
};
