import React from 'react';
import { filmsInfo } from '../../../../mocs/films';
import { SmallFilmCard } from './small-film-card';

interface FilmsListComponentProps {
  length?: number;
}

const FilmsListComponent: React.FC<FilmsListComponentProps> = ({
  length = filmsInfo.length,
}) => (
  <div className="catalog__films-list">
    {filmsInfo.slice(0, length).map((film) => (
      <SmallFilmCard
        film={film}
        key={film.id}
      />
    ))}
  </div>
);

export const FilmsList = React.memo(FilmsListComponent);
