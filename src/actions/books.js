import { ADD_BOOK, RATE_BOOK } from 'constants/ActionTypes';

/**
 * This action creator creates an action to add a book,
 * We return a promise as it fits well to know when it's done to perform UX actions
 *
 * @param {Object} book
 * @returns {Promise}, resolved promise
 */
export const addBook = book => dispatch => {
	return Promise.resolve(
		dispatch({
			type: ADD_BOOK,
			payload: book
		})
	);
}

/**
 * This action creator creates and dispatches an action to rate a book,
 *
 * @param {Number} isbn
 * @param {Intege} rating
 * @returns {Object}
 */
export const rateBook = (isbn, rating) => dispatch => {
	dispatch({
		type: RATE_BOOK,
		payload: {
			isbn,
			rating
		}
	});
}
