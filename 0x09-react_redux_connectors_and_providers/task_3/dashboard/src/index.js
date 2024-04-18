import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Map } from 'immutable';
import thunk from 'redux-thunk';
import App from './App/App';
import './index.css';
import uiReducer, { initialState } from './reducers/uiReducer';
import { applyMiddleware } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	uiReducer,
	Map(initialState),
	composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
