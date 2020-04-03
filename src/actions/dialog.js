import { SHOW_DIALOG, HIDE_DIALOG } from 'constants/ActionTypes';

export const showDialog = payload => ({
	type: SHOW_DIALOG,
	payload: {
		...payload
	}
});

export const hideDialog = () => ({ type: HIDE_DIALOG });
