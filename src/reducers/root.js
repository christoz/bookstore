import { combineReducers } from 'redux';
import books from 'reducers/books';
import dialog from 'reducers/dialog';

export default combineReducers({
	books,
	dialog
});
