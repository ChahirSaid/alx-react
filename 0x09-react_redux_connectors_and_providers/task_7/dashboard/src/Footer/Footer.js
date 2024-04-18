import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFooterCopy, getFullYear } from '../utils/utils';

export function Footer({ user }) {
	return (
		<>
			<p className={css(styles.p)}>
				<>
					Copyright {getFullYear()} - {getFooterCopy(true)}
				</>
				{user && <a className={css(styles.a)}>Contact us</a>}
			</p>
		</>
	);
}

const screenSize = {
	small: '@media screen and (max-width: 900px)',
};

const styles = StyleSheet.create({
	p: {
		[screenSize.small]: {
			fontSize: '1.2rem',
		},
	},
	a: {
		textDecoration: 'none',
		cursor: 'pointer',
		marginLeft: '5px',
		':hover': {
			color: '#e0344a',
			textDecoration: 'underline',
		},
	},
});

Footer.defaultProps = {
	user: null,
};

Footer.propTypes = {
	user: PropTypes.object,
};

const mapStateToProps = (state) => {
	return {
		user: state.get('user'),
	};
};

export default connect(mapStateToProps, null)(Footer);
