import createReducer from 'utils/createReducer';
import { INIT_BOOKS, ADD_BOOK, RATE_BOOK } from 'constants/ActionTypes';

import { books } from 'data/books';

const initialState = {
	list: books,
	loading: false
};


export const getBooksByIsbn = (state, isbn) => {
	return state.filter(b => b.isbn === isbn);
};

export default createReducer(initialState, {
	[INIT_BOOKS]: () => ({
		...initialState
	}),
	[ADD_BOOK]: (state, action) => {
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
