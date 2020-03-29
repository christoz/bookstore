import createReducer from 'utils/createReducer';
import { INIT_DEMO } from 'constants/ActionTypes';

const initialState = {
	loading: false,
};

export default createReducer(initialState, {
	[INIT_DEMO]: (state, action) => ({
		...state,
		loading: action.payload,
		id: action.id
	})
});
