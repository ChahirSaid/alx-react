import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { defaultUser } from './AppContext';
import {
	displayNotificationDrawer,
	hideNotificationDrawer,
	loginRequest,
	logout,
} from '../actions/uiActionCreators';

const listCourses = [
	{ id: 1, name: 'Cource 1', credit: 60 },
	{ id: 2, name: 'Cource 2', credit: 20 },
	{ id: 3, name: 'Cource 3', credit: 40 },
];

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: defaultUser,
		};

		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	handleKeyPress = (event) => {
		if (event.key === 'h' && event.ctrlKey) {
			alert('Logging you out');
			this.state.logout();
		}
	};

	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyPress);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyPress);
	}

	render() {
		const { user } = this.state;

		const {
			isLoggedIn,
			displayDrawer,
			displayNotificationDrawer,
			hideNotificationDrawer,
			login,
			logout,
		} = this.props;

		return (
			<>
				<Notifications
					displayDrawer={displayDrawer}
					handleDisplayDrawer={displayNotificationDrawer}
					handleHideDrawer={hideNotificationDrawer}
				/>
				<div className='App'>
					<Header />
					<div className={css(styles['App-body'])}>
						{isLoggedIn ? (
							<BodySectionWithMarginBottom title='Course list'>
								<CourseList listCourses={listCourses} />
							</BodySectionWithMarginBottom>
						) : (
							<BodySectionWithMarginBottom title='Log in to continue'>
								<Login logIn={login} />
							</BodySectionWithMarginBottom>
						)}
						<BodySection title='News from the School'>
							<p className={css(styles.p)}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Repellat delectus possimus dignissimos architecto reiciendis
								enim minus animi vitae maiores. Quam inventore nisi totam, dolor
								tenetur dicta maiores dolores at quidem.
							</p>
						</BodySection>
					</div>
					<div className={css(styles['App-footer'])}>
						<Footer />
					</div>
				</div>
			</>
		);
	}
}

const screenSize = {
	small: '@media screen and (max-width: 900px)',
};

const styles = StyleSheet.create({
	'App-body': {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',
		flexDirection: 'column',
		padding: '2rem',
		fontSize: '2rem',
		margin: '30px 0 60px 0',
	},
	'App-footer': {
		backgroundColor: 'white',
		position: 'fixed',
		bottom: '0',
		display: 'flex',
		width: '100%',
		padding: '20px 0',
		justifyContent: 'center',
		alignItems: 'center',
		borderTop: '#e11d3f 5px solid',
		fontSize: '1.5rem',
	},
	p: {
		[screenSize.small]: {
			fontSize: '1.5rem',
		},
	},
});

App.propTypes = {
	isLoggedIn: PropTypes.bool,
	login: PropTypes.func,
	displayDrawer: PropTypes.bool,
	displayNotificationDrawer: PropTypes.func,
	hideNotificationDrawer: PropTypes.func,
};

App.defaultProps = {
	isLoggedIn: false,
	login: () => {},
	displayDrawer: false,
	displayNotificationDrawer: () => {},
	hideNotificationDrawer: () => {},
};

export const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.get('isUserLoggedIn'),
		displayDrawer: state.get('isNotificationDrawerVisible'),
	};
};

const mapDispatchToProps = {
	displayNotificationDrawer,
	hideNotificationDrawer,
	login: loginRequest,
	logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
