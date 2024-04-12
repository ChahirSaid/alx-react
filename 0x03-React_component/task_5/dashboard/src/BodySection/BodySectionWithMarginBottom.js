import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BodySectionWithMarginBottom.css';
import BodySection from './BodySection';

export default class BodySectionWithMarginBottom extends Component {
	render() {
		return (
			<div className='bodySectionWithMargin'>
				<BodySection {...this.props} />
			</div>
		);
	}
}

BodySectionWithMarginBottom.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
