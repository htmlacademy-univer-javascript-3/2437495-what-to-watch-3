import { useMemo } from 'react';
import { FilmInfoProps, filmsInfo } from '../mocs/films.ts';

const findFilmById = (films: FilmInfoProps[], id: string) => films.find((film) => film.id === +id);

export const useFilmById = (id = '') => {
  const film = useMemo(() => findFilmById(filmsInfo, id), [id]);

  return film;
};

export const useFilmRating = (rating = 0) => {
  if (rating >= 9) {
    return 'Excellent';
  } else if (rating >= 8) {
    return 'Very good';
  } else if (rating >= 7) {
    return 'Good';
  } else if (rating >= 6) {
    return 'Average';
  } else {
    return 'Below average';
  }
};

export const formatTime = (timeInSeconds: number) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = Math.floor(timeInSeconds % 60);

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};
