import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './features/Movies/movieSlice';
import profileReducer from './features/Profile/profileSlice';

export const store = configureStore({
	reducer: {
		movie: movieReducer,
		profile: profileReducer,
	},
});
