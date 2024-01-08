import React, { useCallback } from 'react';
import { FilmProps } from '../../../../mocs/films.ts';
import { Link } from 'react-router-dom';
import { RouteLinks } from '../../../../router/consts';

interface SmallFilmCardProps {
  film: FilmProps;
  isActive?: boolean;
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
}

const SmallFilmCardComponent: React.FC<SmallFilmCardProps> = ({
  film,
  isActive,
  onMouseEnter,
  onMouseLeave,
}) => {
  const { title, imageSrc, alt, width, height, id } = film;

  const handleMouseEnter = useCallback(() => {
    onMouseEnter(id);
  }, [id, onMouseEnter]);

  return (
    <article
      className={'small-film-card catalog__films-card'}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onMouseLeave}
      data-active={isActive}
    >
      <div className="small-film-card__image">
        <img src={imageSrc} alt={alt} width={width} height={height} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${RouteLinks.FILMS}/${id}`}>
          {title}
        </Link>
      </h3>
    </article>
  );
};

export const SmallFilmCard = React.memo(SmallFilmCardComponent);
