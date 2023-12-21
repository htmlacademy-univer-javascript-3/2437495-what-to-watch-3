import React, { useState } from 'react';
import { filmsInfo } from '../../../../mocs/films.ts';
import { SmallFilmCard } from './small-film-card';

interface FilmsListComponentProps {
  length?: number;
}

const FilmsListComponent: React.FC<FilmsListComponentProps> = ({
  length = filmsInfo.length,
}) => {
  const [activeFilm, setActiveFilm] = useState<number | null>(null);

  const handleCardHover = (filmId: number) => {
    setActiveFilm(filmId);
  };

  const handleCardLeave = () => {
    setActiveFilm(null);
  };

  return (
    <div className="catalog__films-list">
      {filmsInfo.slice(0, length).map((film) => (
        <SmallFilmCard
          film={film}
          key={film.id}
          isActive={film.id === activeFilm}
          onMouseEnter={handleCardHover}
          onMouseLeave={handleCardLeave}
        />
      ))}
    </div>
  );
};

export const FilmsList = React.memo(FilmsListComponent);
