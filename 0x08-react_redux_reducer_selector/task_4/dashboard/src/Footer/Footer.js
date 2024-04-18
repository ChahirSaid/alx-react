import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';
import { getFooterCopy, getFullYear } from '../utils/utils';

export default function Footer() {
	return (
		<AppContext.Consumer>
			{({ user }) => (
				<p className={css(styles.p)}>
					<>
						Copyright {getFullYear()} - {getFooterCopy(true)}
					</>
					{user.isLoggedIn && <a className={css(styles.a)}>Contact us</a>}
				</p>
			)}
		</AppContext.Consumer>
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
