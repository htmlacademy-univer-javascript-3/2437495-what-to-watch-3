import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Film, FilmList } from '../types/film';

export const fetchFilms = createAsyncThunk<
  FilmList[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('/films', async (_arg, { extra: api }) => {
  const { data } = await api.get<FilmList[]>('/films');

  return data;
});

export const fetchFilm = createAsyncThunk<
  Film,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('/films/id', async (filmId: string, { extra: api }) => {
  const { data } = await api.get<Film>(`/films/${filmId}`);
  return data;
});

export const fetchPromo = createAsyncThunk<
  Film,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('/promo', async (_arg, { extra: api }) => {
  const { data } = await api.get<Film>('/promo');
  return data;
});
