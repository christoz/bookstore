const isDev = process.env.NODE_ENV === 'development';

const logger = store => next => action => {
	isDev && typeof action !== 'function' && console.log('dispatching', action);

	return next(action);
};

export default logger;
