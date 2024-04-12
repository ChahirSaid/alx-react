import React from 'react';

export default function CourseListRow({
	isHeader,
	textFirstCell,
	textSecondCell,
}) {
	return (
		<tr>
			{isHeader ? (
				textSecondCell === null ? (
					<th colSpan='2'>{textFirstCell}</th>
				) : (
					<>
						<th>{textFirstCell}</th>
						<th>{textSecondCell}</th>
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
