import React from 'react';
import propTypes from 'prop-types';

export default class NotificationItem extends React.Component {
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
					data-notification-type='default'
					dangerouslySetInnerHTML={this.props.html}
				></li>
			);
		}

		if (this.props.type && this.props.html && this.props.html.__html) {
			return (
				<li
					onClick={() => markAsRead(this.props.id)}
					data-notification-type={this.props.type}
					dangerouslySetInnerHTML={this.props.html}
				></li>
			);
		}

		return (
			<li
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
