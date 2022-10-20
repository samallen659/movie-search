import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
	name: 'profile',
	initialState: {
		currentProfile: {},
	},
	reducers: {},
});

export default profileSlice.reducer;
