import { createSlice } from '@reduxjs/toolkit';

export const darkmodeSlice = createSlice({
	name: 'darkmode',
	initialState: false,
	reducers: {
		toggle: (state, action) => {
			if (state) {
				state = !state;
				document.body.style.backgroundColor = '#f5f5f7';
				return state;
			} else {
				state = !state;
				document.body.style.backgroundColor = '#171725';
				return state;
			}
		},
	},
});

export const selectDarkmode = (state) => state.darkmode;
export const { toggle } = darkmodeSlice.actions;
export default darkmodeSlice.reducer;
