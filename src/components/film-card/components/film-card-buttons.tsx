import React from 'react';
import { Link } from 'react-router-dom';

const WIDTH = 19;
const HEIGHT = 19;

interface FilmCardButtonsProps {
  reviewButton?: boolean;
}

const ButtonsContainerComponent: React.FC<FilmCardButtonsProps> = ({
  reviewButton = false,
}) => (
  <div className="film-card__buttons">
    <button className="btn btn--play film-card__button" type="button">
      <svg viewBox="0 0 19 19" width={WIDTH} height={HEIGHT}>
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
    <button className="btn btn--list film-card__button" type="button">
      <svg viewBox="0 0 19 20" width={WIDTH} height={HEIGHT + 1}>
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">9</span>
    </button>
    {reviewButton ? (
      <Link to={'review'} className="btn film-card__button">
        Add review
      </Link>
    ) : null}
  </div>
);

export const FilmCardButtons = React.memo(ButtonsContainerComponent);
