import { FC, ReactNode, memo } from 'react';
import { FilmInfoProps } from '../../../mocs/films';
interface FilmDetailsItemProps {
  name: string;
  children: ReactNode;
}

const FilmDetailsItemComponent: FC<FilmDetailsItemProps> = ({
  name,
  children,
}) => (
  <p className="film-card__details-item">
    <strong className="film-card__details-name">{name}</strong>
    <span className="film-card__details-value">{children}</span>
  </p>
);

const FilmDetailsItem = memo(FilmDetailsItemComponent);

interface DetailsProps {
  film: FilmInfoProps;
}

const FilmDetailsComponent: FC<DetailsProps> = ({ film }) => {
  const { genre, year: released, description, totalTime } = film;
  const { director, starring } = description;

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <FilmDetailsItem name="Director">{director}</FilmDetailsItem>
        <FilmDetailsItem name="Starring">{starring}</FilmDetailsItem>
      </div>

      <div className="film-card__text-col">
        <FilmDetailsItem name="Run Time">{totalTime}</FilmDetailsItem>
        <FilmDetailsItem name="Genre">{genre}</FilmDetailsItem>
        <FilmDetailsItem name="Released">{released}</FilmDetailsItem>
      </div>
    </div>
  );
};

export const Details = memo(FilmDetailsComponent);
