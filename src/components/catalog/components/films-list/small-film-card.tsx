import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { RouteLinks } from '../../../../router/consts';
import { VideoPlayer } from '../../../videoplayer';
import { Film } from '../../../../types/film';

interface SmallFilmCardProps {
  film: Film;
  isActive?: boolean;
  onMouseEnter: (id: string) => void;
  onMouseLeave: () => void;
}

const SmallFilmCardComponent: React.FC<SmallFilmCardProps> = ({
  film,
  isActive,
  onMouseEnter,
  onMouseLeave,
}) => {
  const { id, name, previewImage, previewVideoLink } = film;

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
        {isActive ? (
          <VideoPlayer src={previewVideoLink} poster={previewImage} />
        ) : (
          <img src={previewImage} alt={name} />
        )}
      </div>
      <h3 className="small-film-card__title">
        <Link
          className="small-film-card__link"
          to={`${RouteLinks.FILMS}/${id}`}
        >
          {name}
        </Link>
      </h3>
    </article>
  );
};

export const SmallFilmCard = React.memo(SmallFilmCardComponent);
