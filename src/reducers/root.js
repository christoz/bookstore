import { combineReducers } from 'redux';
import books, * as fromBooks from 'reducers/books';
import dialog from 'reducers/dialog';


/**
 * This function is used to colocate getBooksByIsbn selector with message reducer
 * this helps consumer to not have to remember the state structure if changes
 * @param {*} state
 * @param {*} isbn
 *
 * @returns function
 */

export const getBooksByIsbn = (state, isbn) => fromBooks.getBooksByIsbn(state.books.list, isbn);

export default combineReducers({
	books,
	dialog
});
