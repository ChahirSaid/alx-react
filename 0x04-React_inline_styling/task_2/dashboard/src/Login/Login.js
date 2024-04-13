import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function Login() {
	return (
		<>
			<p>Login to access the full dashboard</p>
			<form className={css(styles.form)}>
				<label htmlFor='email'>Email</label>
				<input
					className={css(styles.input)}
					type='email'
					name='email'
					id='email'
				/>
				<br />
				<label htmlFor='password'>Password</label>
				<input
					className={css(styles.input)}
					type='password'
					name='password'
					id='password'
				/>
				<br />
				<button>OK</button>
			</form>
		</>
	);
}

const styles = StyleSheet.create({
	form: {
		fontSize: '1.4rem',
		padding: '1.2em',
		height: '45%',
	},
	input: {
		height: '1.4rem',
		marginLeft: '10px',
	},
});
