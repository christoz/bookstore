import { combineReducers } from 'redux';
import books, * as fromBooks from 'reducers/books';
import booksFilter, * as fromBooksFilter from 'reducers/booksFilter'
import dialog from 'reducers/dialog';

/**
 * This function is used to colocate getVisibleBooks selector with books reducer
 * @param {Object} state
 * @param {String} filter
 *
 * @returns {Function}
 */
export const getVisibleBooks = (state, filter) => fromBooks.getVisibleBooks(state.books.list, filter);

/**
 * This function is used to colocate getSelectedFilter selector with bookFilters reducer
 * @param {Object} state
 * @parem {String} query
 *
 * @returns {Function}
 */
export const getSelectedFilter = (state) => fromBooksFilter.getSelectedFilter(state.booksFilter);

/**
 * This function is used to colocate getBookQuery selector with bookFilters reducer
 * @param {Object} state
 * @parem {String} query
 *
 * @returns {Function}
 */
export const getBookQuery = (state) => fromBooksFilter.getBookQuery(state.booksFilter);

export default combineReducers({
	books,
	dialog,
	booksFilter
});
