import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

export default class NotificationItem extends React.PureComponent {
	render() {
		if (
			this.props.type &&
			this.props.value &&
			typeof this.props.type === 'string' &&
			typeof this.props.value === 'string' &&
			!this.props.html
		) {
			return (
				<li
					className={
						this.props.type === 'default'
							? css(styles.default)
							: css(styles.urgent)
					}
					onClick={() => markAsRead(this.props.id)}
					data-notification-type={this.props.type}
				>
					{this.props.value}
				</li>
			);
		}

		if (!this.props.type && this.props.html && this.props.html.__html) {
			return (
				<li
					className={
						this.props.type === 'default'
							? css(styles.default)
							: css(styles.urgent)
					}
					data-notification-type='default'
					dangerouslySetInnerHTML={this.props.html}
				></li>
			);
		}

		if (this.props.type && this.props.html && this.props.html.__html) {
			return (
				<li
					className={
						this.props.type === 'default'
							? css(styles.default)
							: css(styles.urgent)
					}
					onClick={() => markAsRead(this.props.id)}
					data-notification-type={this.props.type}
					dangerouslySetInnerHTML={this.props.html}
				></li>
			);
		}

		return (
			<li
				className={
					this.props.type === 'default'
						? css(styles.default)
						: css(styles.urgent)
				}
				onClick={() => markAsRead(this.props.id)}
				data-notification-type='default'
			>
				NotificationItem: invalid props
			</li>
		);
	}
}

NotificationItem.propTypes = {
	type: propTypes.string.isRequired,
	value: propTypes.string,
	html: propTypes.shape({ __html: propTypes.string }),
	markAsRead: propTypes.func,
	id: propTypes.number,
};

NotificationItem.defaultProps = {
	type: 'default',
	markAsRead: () => {
		console.log('empty func');
	},
	id: 0,
};

const screenSize = {
	small: '@media screen and (max-width: 900px)',
};

const styles = StyleSheet.create({
	default: {
		color: 'blue',
		[screenSize.small]: {
			marginBottom: 10,
			paddingBottom: 10,
			borderBottom: '1px solid black',
			fontWeight: 'bold',
		},
	},
	urgent: {
		color: 'red',
		[screenSize.small]: {
			marginBottom: 10,
			paddingBottom: 10,
			borderBottom: '1px solid black',
			fontWeight: 'bold',
		},
	},
});
