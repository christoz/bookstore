import createReducer from 'utils/createReducer';
import { INIT_DEMO } from 'constants/ActionTypes';

const initialState = {
	loading: false,
};

export default createReducer(initialState, {
	[INIT_DEMO]: state => ({
		...state,
		loading: true
	})
});
