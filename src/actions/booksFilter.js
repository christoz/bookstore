import { SET_QUERY, SET_FILTER, SHOW_ALL } from 'constants/ActionTypes';

export const setFilter = (filter) => dispatch => {
	dispatch({
		type: SET_FILTER,
		filter: filter || SHOW_ALL,
	})
};

export const setQuery = (query = '') => dispatch => {
	dispatch({
		type: SET_QUERY,
		query
	})
};
