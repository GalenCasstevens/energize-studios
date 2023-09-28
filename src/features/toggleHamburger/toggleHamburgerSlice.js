import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	toggled: false,
};

export const toggleHamburgerSlice = createSlice({
	name: 'toggle',
	initialState,
	reducers: {
		toggleHamburger: (state) => {
			if (state.toggled) state.toggled = false;
			else state.toggled = true;
		},
	},
});

export const { toggleHamburger } = toggleHamburgerSlice.actions;
export default toggleHamburgerSlice.reducer;
