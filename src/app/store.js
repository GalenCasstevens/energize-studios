import { configureStore } from '@reduxjs/toolkit';
import toggleHamburgerReducer from '../features/toggleHamburger/toggleHamburgerSlice';

export const store = configureStore({
	reducer: {
		toggled: toggleHamburgerReducer,
	},
});
