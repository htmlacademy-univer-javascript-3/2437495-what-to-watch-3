import { createReducer } from '@reduxjs/toolkit';
import { setGenre } from './actions';
import { filmsInfo } from '../mocs/films';


export const DEFAULT_GENRE = 'All genres';

const initialState = {
  films: filmsInfo,
  genre: DEFAULT_GENRE,
  genreFilms: filmsInfo,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setGenre, (state, action) => {
    const { genre } = action.payload;

    state.genre = genre;
    state.genreFilms =
      genre === DEFAULT_GENRE
        ? filmsInfo
        : filmsInfo.filter((film) => film.genre === genre);
  });
});

export { reducer };
