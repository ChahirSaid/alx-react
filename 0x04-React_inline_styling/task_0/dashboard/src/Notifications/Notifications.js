import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Notifications.css';
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
			<div className='Noti'>
				<div className='menuItem'>
					<p>Your notifications</p>
				</div>
				{this.props.displayDrawer && (
					<div className='Notifications'>
						<p>Here is the list of notifications</p>
						<ul>
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
