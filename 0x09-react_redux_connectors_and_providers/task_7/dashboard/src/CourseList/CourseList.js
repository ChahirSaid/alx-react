import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';

class CourseList extends Component {
	constructor(props) {
		super(props);
		this.onChangeRow = this.onChangeRow.bind(this);
	}

	componentDidMount() {
		this.props.fetchCourses();
	}

	onChangeRow(id, checked) {
		if (checked) this.props.selectCourse(id);
		else this.props.unSelectCourse(id);
	}

	render() {
		const { listCourses } = this.props;

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
								id={course.id}
								textFirstCell={course.name}
								textSecondCell={course.credit}
								isHeader={false}
								isChecked={course.isSelected}
								onChangeRow={this.onChangeRow}
							/>
						))
					)}
				</tbody>
			</table>
		);
	}
}

CourseListRow.propTypes = {
	listCourses: propTypes.array,
	fetchCourses: PropTypes.func,
	selectCourse: PropTypes.func,
	unSelectCourse: PropTypes.func,
};

CourseListRow.defaultProps = {
	listCourses: [],
	fetchCourses: () => {},
	selectCourse: () => {},
	unSelectCourse: () => {},
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

export const mapStateToProps = (state) => {
	const coursesList = getListCourses(state);
	return {
		listCourses: coursesList,
	};
};

const mapDispatchToProps = {
	fetchCourses,
	selectCourse,
	unSelectCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
