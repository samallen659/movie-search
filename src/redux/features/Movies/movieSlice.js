import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
	name: 'movie',
	initialState: {
		movieList: [],
		page: 1,
		movieDetail: {},
	},
	reducers: {},
});

export default movieSlice.reducer;
