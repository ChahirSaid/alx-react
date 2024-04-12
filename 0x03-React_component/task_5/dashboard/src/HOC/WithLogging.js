import React, { Component } from 'react';

export default WithLogging = ({ WrappedComponet }) => {
	const getDisplayName = (WrappedComponent) =>
		WrappedComponent.displayName || WrappedComponent.name || 'Component';

	WithLogging.displayName = `WithLogging(${getDisplayName(WrappedComponent)})`;

	return class extends Component {
		componentDidMount() {
			console.log(`Component ${getDisplayName(WrappedComponent)} is mounted`);
		}

		componentWillUnmount() {
			console.log(
				`Component ${getDisplayName(WrappedComponent)} is going to unmount`
			);
		}

		render() {
			return <WrappedComponent {...this.props} />;
		}
	};
};
