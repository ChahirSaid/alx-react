import { StyleSheet, css } from 'aphrodite';
import propTypes from 'prop-types';
import React, { Component } from 'react';

export default class BodySection extends Component {
	render() {
		return (
			<div className='bodySection'>
				<h2 className={css(styles.h2)}>{this.props.title}</h2>
				{this.props.children}
			</div>
		);
	}
}

BodySection.propTypes = {
	title: propTypes.string.isRequired,
	children: propTypes.oneOfType([propTypes.string, propTypes.element]),
};

const screenSize = {
	small: '@media screen and (max-width: 900px)',
};

const styles = StyleSheet.create({
	h2: {
		[screenSize.small]: {
			fontSize: '2rem',
			marginBottom: '15px',
		},
	},
});
