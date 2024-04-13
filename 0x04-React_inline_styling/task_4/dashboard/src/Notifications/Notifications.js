import React, { Component } from 'react';
import propTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

export default class Notifications extends Component {
	constructor(props) {
		super(props);

		this.markAsRead = this.markAsRead.bind(this);
	}

	markAsRead(id) {
		console.log(`Notification ${id} has been marked as read`);
	}

	shouldComponentUpdate(next) {
		return next.length > this.props.listNotifications.length;
	}

	render() {
		return (
			<div className={css(styles.Noti)}>
				<div className={css(styles.menuItem)}>
					<p>Your notifications</p>
				</div>
				{this.props.displayDrawer && (
					<div className={css(styles.Notifications)}>
						<p>Here is the list of notifications</p>
						<ul className={css(styles.ul)}>
							{this.props.listNotifications.length === 0 ? (
								<li>
									<p>No notification available yet</p>
								</li>
							) : (
								this.props.listNotifications.map((notification, idx) => (
									<NotificationItem
										key={idx}
										id={notification.id}
										html={notification.html}
										type={notification.type}
										value={notification.value}
									/>
								))
							)}
						</ul>
						<button
							aria-label='Close'
							style={{
								position: 'absolute',
								top: '.2rem',
								right: '.2rem',
								background: 'transparent',
								border: 'none',
							}}
							onClick={() => console.log('Close button has been clicked')}
						>
							<img src={closeIcon} alt='close-icon' />
						</button>
					</div>
				)}
			</div>
		);
	}
}

Notifications.propTypes = {
	displayDrawer: propTypes.bool,
	listNotifications: propTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
	displayDrawer: true,
	listNotifications: [],
};

const screenSize = {
	small: '@media screen and (max-width: 900px)',
};

const opacity = {
	from: {
		opacity: 0.5,
	},

	to: {
		opacity: 1,
	},
};

const translate = {
	'0%': {
		transform: 'translateY(0)',
	},

	'50%': {
		transform: 'translateY(-5px)',
	},

	'75%': {
		transform: 'translateY(5px)',
	},

	'100%': {
		transform: 'translateY(0)',
	},
};

const styles = StyleSheet.create({
	Noti: {
		position: 'absolute',
		right: '0',
		marginRight: '20px',
		backgroundColor: 'white',
		[screenSize.small]: {
			position: 'fixed',
			margin: 0,
			top: 0,
			zIndex: 100,
			width: '100%',
		},
	},
	menuItem: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		marginTop: '20px',
		marginBottom: '20px',
		right: 0,
		zIndex: 1,
		':hover': {
			cursor: 'pointer',
			animationName: [opacity, translate],
			animationDuration: '1s, 0.5s',
			animationIterationCount: 3,
		},
		[screenSize.small]: {
			position: 'inherit',
		},
	},
	Notifications: {
		position: 'relative',
		border: '1px dashed #e1484c',
		padding: '10px',
		width: '100%',
		fontWeight: 'bold',
		animationDuration: '0.8s',
		animationIterationCount: 1,
		animationFillMode: 'forwards',
		[screenSize.small]: {
			height: '100vh',
		},
	},
	ul: {
		marginLeft: '20px',
		marginTop: '20px',
		[screenSize.small]: {
			listStyle: 'none',
			margin: '20px 0 0 0',
		},
	},
});
