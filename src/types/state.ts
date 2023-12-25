import { store } from '../store';
import { Film, FilmList } from './film';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export interface MainInitialState {
  films: FilmList[];
  genre: string;
  genreFilms: FilmList[];
  isFilmsLoading: boolean;
  film: Film | null;
  promo: Film | null;
  isFilmLoading: boolean;
}
