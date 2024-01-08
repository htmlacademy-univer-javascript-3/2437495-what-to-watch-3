import { FC, memo } from 'react';
import { useFilmRating } from '../../../hooks/films';
import { FilmInfoProps } from '../../../mocs/films';

interface OverviewProps {
  film: FilmInfoProps;
}

const OverviewComponent: FC<OverviewProps> = ({ film }) => {
  const {
    rating,
    ratingCount,
    description: { info, director, starring },
  } = film;

  const filmRatingLevel = useFilmRating(rating);

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{filmRatingLevel}</span>
          <span className="film-rating__count">{ratingCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p style={{ whiteSpace: 'pre-wrap' }}>{info}</p>

        <p className="film-card__director">
          <strong>Director: {director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>Starring: {starring}</strong>
        </p>
      </div>
    </>
  );
};

export const Overview = memo(OverviewComponent);
