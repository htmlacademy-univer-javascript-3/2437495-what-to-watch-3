import React from 'react';
import { GENRE_LIST } from '../../../../data/genreList';
import { Genre } from './genre';

const GenreListComponent: React.FC = () => (
  <ul className="catalog__genres-list">
    {GENRE_LIST.map((genre) => (
      <Genre genre={genre.name} isActive={genre.isActive} key={genre.id} />
    ))}
  </ul>
);

export const GenreList = React.memo(GenreListComponent);
