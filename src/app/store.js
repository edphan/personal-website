import { configureStore } from '@reduxjs/toolkit';
import darkmodeReducer from '../components/darkmodeSlice';

export const store = configureStore({
	reducer: {
		darkmode: darkmodeReducer,
	},
});
