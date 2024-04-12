import propTypes from 'prop-types';
import React, { Component } from 'react';

export default class BodySection extends Component {
	render() {
		return (
			<div className='bodySection'>
				<h2>{this.props.title}</h2>
				{this.props.children}
			</div>
		);
	}
}

BodySection.propTypes = {
	title: propTypes.string.isRequired,
	children: propTypes.oneOfType([propTypes.string, propTypes.element]),
};
