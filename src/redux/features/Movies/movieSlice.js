import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
	name: 'movie',
	initialState: {
		movieList: [],
		page: 1,
		movieDetail: {},
	},
	reducers: {
		addMovie: (state, action) => {
			action.payload.map((movie) => state.movieList.push(movie));
		},
	},
});

export const { addMovie } = movieSlice.actions;
export default movieSlice.reducer;
