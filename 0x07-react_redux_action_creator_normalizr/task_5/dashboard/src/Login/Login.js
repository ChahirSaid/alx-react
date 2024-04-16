import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import propTypes from 'prop-types';

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			enableSubmit: false,
		};

		this.handleSumbit = this.handleSumbit.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
	}

	handleSumbit = (e) => {
		e.preventDefault();
		this.props.logIn(this.state.email, this.state.password);
		this.setState({ isLoggedIn: true });
	};

	handleEmailChange = (e) => {
		this.setState({ email: e.target.value });
		this.setState({
			enableSubmit: e.target.value.length > 0 && this.state.password.length > 0,
		});
	};

	handlePasswordChange = (e) => {
		this.setState({ password: e.target.value });
		this.setState({
			enableSubmit: e.target.value.length > 0 && this.state.email.length > 0,
		});
	};

	render() {
		return (
			<>
				<p className={css(styles.p)}>Login to access the full dashboard</p>
				<form className={css(styles.login)} onSubmit={this.handleSumbit}>
					<label htmlFor='email'>Email</label>
					<input
						className={css(styles.input)}
						type='email'
						name='email'
						id='email'
						onChange={this.handleEmailChange}
						value={this.state.email}
					/>
					<label htmlFor='password'>Password</label>
					<input
						className={css(styles.input)}
						type='password'
						name='password'
						id='password'
						onChange={this.handlePasswordChange}
						value={this.state.password}
					/>
					<input
						className={css(styles.btn)}
						type='submit'
						value='OK'
						disabled={!this.state.enableSubmit}
					/>
				</form>
			</>
		);
	}
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

Login.propTypes = {
	logIn: propTypes.func,
};
