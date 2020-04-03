import createReducer from 'utils/createReducer';
import { SHOW_DIALOG, HIDE_DIALOG } from 'constants/ActionTypes';

export const initialState = {
	visible: false
};

export default createReducer(initialState, {
	[SHOW_DIALOG]: (state, payload) => ({
		...state,
		...payload,
		visible: true
	}),
	[HIDE_DIALOG]: state => ({
		...initialState
	})
});
