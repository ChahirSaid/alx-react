import { normalize, schema } from 'normalizr';

const courses = new schema.Entity('courses');
const coursesNormalizer = (data) => {
	return normalize(data, [courses]).entities.courses;
};

export default coursesNormalizer;
