import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';

export default function Footer() {
	return (
		<p className={css(styles.p)}>
			Copyright {getFullYear()} - {getFooterCopy(true)}
		</p>
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
});
