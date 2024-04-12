import React from 'react';
import propTypes from 'prop-types';

export default function NotificationItem({ type, value, html }) {
	if (
		type &&
		value &&
		typeof type === 'string' &&
		typeof value === 'string' &&
		!html
	) {
		return <li data-notification-type={type}>{value}</li>;
	}

	if (!type && html && html.__html) {
		return (
			<li data-notification-type='default' dangerouslySetInnerHTML={html}></li>
		);
	}

	if (type && html && html.__html) {
		return (
			<li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
		);
	}

	return (
		<li data-notification-type='default'>NotificationItem: invalid props</li>
	);
}

NotificationItem.propTypes = {
	type: propTypes.string.isRequired,
	value: propTypes.string,
	html: propTypes.shape({ __html: propTypes.string }),
};
