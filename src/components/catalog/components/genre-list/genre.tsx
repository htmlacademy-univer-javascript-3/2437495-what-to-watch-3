import React from 'react';
import { Link } from 'react-router-dom';

interface GenreProps {
  genre: string;
  isActive: boolean;
}
const GenreComponent: React.FC<GenreProps> = ({ genre, isActive }) => (
  <li
    className={`catalog__genres-item catalog__genres-item${
      isActive ? '--active' : ''
    }`}
  >
    <Link to="#" className="catalog__genres-link">
      {genre}
    </Link>
  </li>
);

export const Genre = React.memo(GenreComponent);
