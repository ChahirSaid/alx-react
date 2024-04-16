import React, { Component } from 'react';

export default WithLogging = (WrappedComponet) => {
	const getDisplayName = (WrappedComponet) =>
		WrappedComponet.displayName || WrappedComponet.name || 'Component';

	WithLogging.displayName = `WithLogging(${getDisplayName(WrappedComponet)})`;

	return class extends Component {
		componentDidMount() {
			console.log(`Component ${getDisplayName(WrappedComponet)} is mounted`);
		}

		componentWillUnmount() {
			console.log(
				`Component ${getDisplayName(WrappedComponet)} is going to unmount`
			);
		}

		render() {
			return <WrappedComponet {...this.props} />;
		}
	};
};
