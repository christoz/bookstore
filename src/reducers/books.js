import createReducer from 'utils/createReducer';
import { INIT_BOOKS, ADD_BOOK, RATE_BOOK } from 'constants/ActionTypes';

import { books } from 'data/books';

const initialState = {
	list: books,
	searchList: books,
	loading: false
};

/**
 * State selector for books filtering category attribute
 * @param {Array} state
 * @param {String} filter
 * @returns {Array)
 */

export const getVisibleBooks = (state, filter) => {

	switch (filter) {
		case 'beginner':
			return state.filter(b => b.category === 'beginner')
		case 'intermediate':
			return state.filter(b => b.category === 'intermediate')
		case 'expert':
			return state.filter(b => b.category === 'expert')
		default:
			return state;
	}
};

export default createReducer(initialState, {
	[INIT_BOOKS]: () => ({
		...initialState
	}),
	[ADD_BOOK]: (state, action) => {
		// TODO: Check for duplicates before merging
		return {
			...state,
			list: [
				...state.list,
				action.payload
			]
		}
	},
	[RATE_BOOK]: (state, action) => {
		const { isbn, rating } = action.payload;

		return {
			...state,
			list: state.list
				.map((book, index) => {
					if (book.isbn === isbn) {
						return {
							...book,
							rating
						}
					}

					return book;
				})
		}
	}
});
