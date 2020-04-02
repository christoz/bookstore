import createReducer from 'utils/createReducer';

import { SHOW_ALL, SET_FILTER } from 'constants/ActionTypes';

const initialState = {
	filter: 'SHOW_ALL'
};

export default createReducer(initialState, {
	[SHOW_ALL]: (state) => ({
		...state
	}),
	[SET_FILTER]: (state, filter) => ({
		...state,
		filter
	})
});
