import React, { memo } from 'react';

interface PosterProps {
  src: string;
  alt: string;
  className?: string;
}

const FilmPosterComponent: React.FC<PosterProps> = ({
  src,
  alt,
  className = '',
}) => (
  <div className={`film-card__poster ${className}`}>
    <img src={src} alt={alt} />
  </div>
);

export const Poster = memo(FilmPosterComponent);
