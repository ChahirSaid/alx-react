import React, { Component } from 'react';
import logo from '../assets/logo.jpg';
import { StyleSheet, css } from 'aphrodite';

class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { user, logout } = this.props;

		return (
			<>
				<div className={css(styles['App-header'])}>
					<img src={logo} className={css(styles['App-logo'])} alt='logo' />
					<h1 className={css(styles.h1)}>School dashboard</h1>
				</div>
				{user && (
					<div className={css(styles.welcome)} id='logoutSection'>
						Welcome {user.email}{' '}
						<a className={css(styles.logout)} onClick={logout}>
							(logout)
						</a>
					</div>
				)}
			</>
		);
	}
}

const screenSize = {
	small: '@media screen and (max-width: 900px)',
};

const styles = StyleSheet.create({
	'App-header': {
		display: 'flex',
		alignItems: 'center',
		borderBottom: '#e11d3f 5px solid',
		fontSize: '1.4rem',
	},
	'App-logo': {
		width: '250px',
		height: '250px',
		marginLeft: '20px',
	},
	h1: {
		fontSize: '4rem',
		color: '#e11d3f',
		fontWeight: 'bold',
		[screenSize.small]: {
			fontSize: '2.2rem',
		},
	},
	welcome: {
		fontSize: '2rem',
		marginTop: '20px',
		marginLeft: '20px',
		[screenSize.small]: {
			fontSize: '1.6rem',
		},
	},
	logout: {
		cursor: 'pointer',
	},
});

Header.defaultProps = {
	user: null,
	logout: () => {},
};

Header.propTypes = {
	user: PropTypes.object,
	logout: PropTypes.func,
};

const mapStateToProps = (state) => {
	return {
		user: state.get('user'),
	};
};

const mapDispatchToProps = {
	logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
