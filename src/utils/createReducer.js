/**
 * Utility method to create a reducer from a map,
 * with initial state
 *
 * @param initialState
 * @param reducerMap
 * @returns {Function}
 */
export default (initialState, reducerMap) => {
	return (state = initialState, action) => {
		const reducer = reducerMap[action.type];
		return reducer ? reducer(state, action) : state;
	};
};
