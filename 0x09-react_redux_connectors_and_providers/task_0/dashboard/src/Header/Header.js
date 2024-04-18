import React, { Component } from 'react';
import logo from '../assets/logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

export default class Header extends Component {
	render() {
		const data = this.context;
		return (
			<>
				<div className={css(styles['App-header'])}>
					<img src={logo} className={css(styles['App-logo'])} alt='logo' />
					<h1 className={css(styles.h1)}>School dashboard</h1>
				</div>
				{data.user.isLoggedIn && (
					<div className={css(styles.welcome)} id='logoutSection'>
						Welcome {data.user.email}{' '}
						<a className={css(styles.logout)} onClick={data.logOut}>
							(logout)
						</a>
					</div>
				)}
			</>
		);
	}
}

Header.contextType = AppContext;

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
