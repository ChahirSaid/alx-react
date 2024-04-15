import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';

export default function CourseList({ listCourses }) {
	return (
		<table className={css(styles.table)}>
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

const styles = StyleSheet.create({
	table: {
		border: '1px solid',
		borderCollapse: 'collapse',
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '100%',
	},
});
