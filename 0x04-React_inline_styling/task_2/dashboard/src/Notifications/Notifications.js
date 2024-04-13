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
	displayDrawer: false,
	listNotifications: [],
};

const styles = StyleSheet.create({
	Noti: {
		position: 'absolute',
		right: '0',
		marginRight: '20px',
		backgroundColor: 'white',
	},
	menuItem: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		marginTop: '20px',
		marginBottom: '20px',
	},
	Notifications: {
		position: 'relative',
		border: '1px dashed #e1484c',
		padding: '10px',
		width: '100%',
	},
	ul: {
		marginLeft: '20px',
		marginTop: '20px',
	},
});
