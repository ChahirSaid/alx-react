import React from 'react';
import propTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import './CourseList.css';

export default function CourseList({ listCourses }) {
	return (
		<table>
			<thead>
				<CourseListRow textFirstCell='Available courses' isHeader={true} />
				<CourseListRow
					textFirstCell='Course name'
					textSecondCell='Credit'
					isHeader={true}
				/>
			</thead>
			<tbody>
				{listCourses.length === 0 ? (
					<tr>
						<td>No course available yet</td>
					</tr>
				) : (
					listCourses.map((course) => (
						<CourseListRow
							key={course.id}
							textFirstCell={course.name}
							textSecondCell={course.credit}
							isHeader={false}
						/>
					))
				)}
			</tbody>
		</table>
	);
}

CourseListRow.propTypes = {
	listCourses: propTypes.array,
};

CourseListRow.defaultProps = {
	listCourses: [],
};
