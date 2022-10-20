import { describe, expect, it } from 'vitest';
import { movieList, movieDetail } from '../../../../mocks/movieData';
import { addMovie } from './movieSlice';
import { store } from '../../store';

describe('movieSlice', () => {
	describe('addMovie Reducer', () => {
		it('Should add the movie to the movieList array', () => {
			const movie = movieList[0];
			store.dispatch(addMovie([movie]));
			const state = store.getState().movie;

			expect(state.movieList).toContain(movie);
		});
	});
});
