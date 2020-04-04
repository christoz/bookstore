import createReducer from 'utils/createReducer';

import { SHOW_ALL, SET_FILTER, SET_QUERY } from 'constants/ActionTypes';

const initialState = {
	filter: 'SHOW_ALL'
};

export const getSelectedFilter = state => state.filter;
export const getBookQuery = state => state.query;

export default createReducer(initialState, {
	[SHOW_ALL]: (state) => ({
		...state
	}),
	[SET_FILTER]: (state, action) => ({
		...state,
		filter: action.filter
	}),
	[SET_QUERY]: (state, action) => ({
		...state,
		query: action.query
	})
});
