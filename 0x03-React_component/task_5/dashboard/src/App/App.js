import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

class App extends Component {
	constructor(props) {
		super(props);
		this.handleKeyPress = this.handleKeyPress.bind(this);
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

	listNotifications = [
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
	];

	handleKeyPress = (event) => {
		if (event.key === 'h' && event.ctrlKey) {
			alert('Logging you out');
			this.props.logOut();
		}
	};

	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyPress);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyPress);
	}

	render() {
		return (
			<>
				<Notifications listNotifications={this.listNotifications} />
				<div className='App'>
					<Header />
					<div className='App-body'>
						{this.props.isLoggedIn ? (
							<BodySectionWithMarginBottom title='Course list'>
								<CourseList listCourses={this.listCourses} />
							</BodySectionWithMarginBottom>
						) : (
							<BodySectionWithMarginBottom title='Log in to continue'>
								<Login />
							</BodySectionWithMarginBottom>
						)}
						<BodySection title='News from the School'>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Repellat delectus possimus dignissimos architecto reiciendis
								enim minus animi vitae maiores. Quam inventore nisi totam, dolor
								tenetur dicta maiores dolores at quidem.
							</p>
						</BodySection>
					</div>
					<div className='App-footer'>
						<Footer />
					</div>
				</div>
			</>
		);
	}
}

export default App;

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
