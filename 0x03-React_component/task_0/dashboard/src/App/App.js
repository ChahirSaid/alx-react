import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';

const listCourses = [
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

const listNotifications = [
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

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<>
				<Notifications listNotifications={listNotifications} />
				<div className='App'>
					<Header />
					<div className='App-body'>
						{this.props.isLoggedIn ? (
							<CourseList listCourses={listCourses} />
						) : (
							<Login />
						)}
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
};

App.defaultProps = {
	isLoggedIn: false,
};
