import { createSlice } from '@reduxjs/toolkit';

export const darkmodeSlice = createSlice({
	name: 'darkmode',
	initialState: false,
	reducers: {
		toggle: (state, action) => (state = !state),
	},
});

export const selectDarkmode = (state) => state.darkmode;
export const { toggle } = darkmodeSlice.actions;
export default darkmodeSlice.reducer;
