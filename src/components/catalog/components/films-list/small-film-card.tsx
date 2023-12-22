import React, {useState} from 'react';
import {FilmInfoProps} from '../../../../mocs/films';
import { Link } from 'react-router-dom';
import { RouteLinks } from '../../../../router/consts';
import {VideoPlayer} from '../../../video-player/video-player.tsx';

interface SmallFilmCardProps {
  film: FilmInfoProps;
}
const DEFAULT_WIDTH = 218;
const DEFAULT_HEIGHT = 327;
const SmallFilmCardComponent: React.FC<SmallFilmCardProps> = ({
  film,
}) => {
  const { title, imageSrc, alt, id,video, bgSrc } = film;
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleHover = () => {
    setIsActive(true);
  };

  const handleLeave = () => {
    setIsActive(false);
  };

  return (
    <article
      className={'small-film-card catalog__films-card'}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      data-active={Boolean(isActive)}
    >

      <div className="small-film-card__image">
        {isActive ? (
          <VideoPlayer src={video} poster={bgSrc} isActive={isActive}/>
        ) : (
          <img src={imageSrc} alt={alt} width={DEFAULT_WIDTH} height={DEFAULT_HEIGHT} />
        )}
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
