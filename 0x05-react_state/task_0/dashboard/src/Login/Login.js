import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function Login() {
	return (
		<>
			<p className={css(styles.p)}>Login to access the full dashboard</p>
			<form className={css(styles.login)}>
				<label htmlFor='email'>Email</label>
				<input
					className={css(styles.input)}
					type='email'
					name='email'
					id='email'
				/>
				<label htmlFor='password'>Password</label>
				<input
					className={css(styles.input)}
					type='password'
					name='password'
					id='password'
				/>
				<button className={css(styles.btn)}>OK</button>
			</form>
		</>
	);
}

const screenSize = {
	small: '@media screen and (max-width: 900px)',
};

const styles = StyleSheet.create({
	p: {
		[screenSize.small]: {
			fontSize: '1.5rem',
		},
	},
	login: {
		padding: '16px 24px',
		[screenSize.small]: {
			width: '90%',
			paddingLeft: 0,
		},
	},
	input: {
		margin: '4px',
		[screenSize.small]: {
			border: 'none',
			margin: 0,
		},
	},
	btn: {
		margin: '4px',
		cursor: 'pointer',
		[screenSize.small]: {
			width: '32px',
			display: 'block',
			margin: 0,
		},
	},
});
