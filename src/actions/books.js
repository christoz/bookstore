import { GET_BOOKS } from 'constants/ActionTypes';

export const getBooks = () => (dispatch) => {
	dispatch({
		type: GET_BOOKS
	});
}
