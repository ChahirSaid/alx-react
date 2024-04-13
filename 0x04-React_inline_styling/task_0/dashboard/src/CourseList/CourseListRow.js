import React from 'react';
import propTypes from 'prop-types';

const rowStyle = {
	backgroundColor: '#f5f5f5ab',
};

const headerStyle = {
	backgroundColor: '#deb5b545',
};

export default function CourseListRow({
	isHeader,
	textFirstCell,
	textSecondCell,
}) {
	return (
		<tr style={rowStyle}>
			{isHeader ? (
				textSecondCell === null ? (
					<th colSpan='2' style={headerStyle}>
						{textFirstCell}
					</th>
				) : (
					<>
						<th style={headerStyle}>{textFirstCell}</th>
						<th style={headerStyle}>{textSecondCell}</th>
					</>
				)
			) : (
				<>
					<td>{textFirstCell}</td>
					<td>{textSecondCell}</td>
				</>
			)}
		</tr>
	);
}

CourseListRow.propTypes = {
	isHeader: propTypes.bool,
	textFirstCell: propTypes.string.isRequired,
	textSecondCell: propTypes.oneOfType([propTypes.string, propTypes.number]),
};

CourseListRow.defaultProps = {
	isHeader: false,
	textSecondCell: null,
};
