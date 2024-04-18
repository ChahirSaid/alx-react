import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import App from './App/App';
import './index.css';
import { initialState } from './reducers/uiReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	combineReducers(rootReducer),
	initialState,
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
