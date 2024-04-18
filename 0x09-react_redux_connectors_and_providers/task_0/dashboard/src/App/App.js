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
import { AppContext, defaultUser } from './AppContext';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayDrawer: false,
			user: defaultUser,
			logout: () => {
				this.setState({ user: defaultUser });
			},
			listNotifications: [
				{
					id: 1,
					type: 'default',
					value: 'New course available',
				},
				{
					id: 2,
					type: 'urgent',
					value: 'New resume available',
				},
				{
					id: 3,
					html: {
						__html: getLatestNotification(),
					},
					type: 'urgent',
				},
			],
		};

		this.handleKeyPress = this.handleKeyPress.bind(this);

		this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
		this.handleHideDrawer = this.handleHideDrawer.bind(this);
		this.logIn = this.logIn.bind(this);
		this.markNotificationsAsRead = this.markNotificationsAsRead.bind(this);
	}

	listCourses = [
		{
			id: 1,
			name: 'ES6',
			credit: '60',
		},
		{
			id: 2,
			name: 'Webpack',
			credit: '20',
		},
		{
			id: 3,
			name: 'React',
			credit: '40',
		},
	];

	handleKeyPress = (event) => {
		if (event.key === 'h' && event.ctrlKey) {
			alert('Logging you out');
			this.state.logout();
		}
	};

	handleDisplayDrawer() {
		this.setState({ displayDrawer: true });
	}

	handleHideDrawer() {
		this.setState({ displayDrawer: false });
	}

	logIn(email, password) {
		this.setState({
			user: {
				email,
				password,
				isLoggedIn: true,
			},
		});
	}

	markNotificationsAsRead(id) {
		this.setState({
			listNotifications: this.state.listNotifications.filter(
				(notification) => notification.id !== id
			),
		});
	}

	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyPress);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyPress);
	}

	render() {
		const { user, logout } = this.state;
		return (
			<AppContext.Provider value={{ user, logOut: logout }}>
				<Notifications
					listNotifications={this.state.listNotifications}
					markNotificationsAsRead={this.markNotificationsAsRead}
					displayDrawer={this.state.displayDrawer}
					handleDisplayDrawer={this.handleDisplayDrawer}
					handleHideDrawer={this.handleHideDrawer}
				/>
				<div className='App'>
					<Header />
					<div className={css(styles['App-body'])}>
						{this.state.user.isLoggedIn ? (
							<BodySectionWithMarginBottom title='Course list'>
								<CourseList listCourses={this.listCourses} />
							</BodySectionWithMarginBottom>
						) : (
							<BodySectionWithMarginBottom title='Log in to continue'>
								<Login logIn={this.logIn} />
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
			</AppContext.Provider>
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
	logOut: PropTypes.func,
};

App.defaultProps = {
	isLoggedIn: false,
	logOut: () => {
		return;
	},
};

export const mapStateToProps = (state) => {
	return { isLoggedIn: state.get('isUserLoggedIn') };
};

export default connect(mapStateToProps)(App);
