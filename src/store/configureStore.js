import { createStore, compose } from 'redux';

import rootReducer from 'reducers/root';

/**
 * It is is used to configure our redux store
 *
 * @param {Object} initialState,
 * @returns {Object} A Redux store that lets you read the state, dispatch actions and subscribe to changes.
 */
export default function configureStore(initialState = {}) {
	const isDev = process.env.NODE_ENV === 'development';
	const composeEnhancers = (isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
	const store = createStore(rootReducer, composeEnhancers());

	// Exposes store via window object in development mode to engage with it via the browser as well
	if (isDev) {
		window.store = store;
	}

	return store;
};
