import React from 'react';
import logo from '../assets/logo.jpg';
import { StyleSheet, css } from 'aphrodite';

export default function Header() {
	return (
		<div className={css(styles['App-header'])}>
			<img src={logo} className={css(styles['App-logo'])} alt='logo' />
			<h1 className={css(styles.h1)}>School dashboard</h1>
		</div>
	);
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
});
