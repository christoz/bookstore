import createReducer from 'utils/createReducer';
import { INIT_BOOKS } from 'constants/ActionTypes';

import { books } from 'data/books';

const initialState = {
	list: books,
	loading: false
};

export default createReducer(initialState, {
	[INIT_BOOKS]: () => ({
		...initialState
	})
});
