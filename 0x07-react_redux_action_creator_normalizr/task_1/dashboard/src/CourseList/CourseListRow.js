import React, { useState } from 'react';
import propTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const rowStyle = {
	backgroundColor: '#f5f5f5ab',
};

const rowChecked = {
	backgroundColor: '#e6e4e4',
};

const headerStyle = {
	backgroundColor: '#deb5b545',
};

export default function CourseListRow({
	isHeader,
	textFirstCell,
	textSecondCell,
}) {
	const [checked, setChecked] = useState(false);

	const handleCheck = () => setChecked(!checked);
	return (
		<tr style={isHeader ? headerStyle : rowStyle}>
			{isHeader ? (
				textSecondCell === null ? (
					<th className={css(styles.th)} colSpan='2' style={headerStyle}>
						{textFirstCell}
					</th>
				) : (
					<>
						<th className={css(styles.th)} style={headerStyle}>
							{textFirstCell}
						</th>
						<th className={css(styles.th)} style={headerStyle}>
							{textSecondCell}
						</th>
					</>
				)
			) : (
				<>
					<td className={checked && css(styles.rowChecked)}>
						<input
							type='checkbox'
							onChange={handleCheck}
							defaultChecked={checked}
						/>
						{textFirstCell}
					</td>
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

const styles = StyleSheet.create({
	th: {
		borderBottom: '1px solid #ddd',
		width: '80%',
	},
	rowChecked,
});
