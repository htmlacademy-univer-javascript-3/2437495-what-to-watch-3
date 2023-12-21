import React from 'react';
import { Header } from '../header';
import { FilmCardButtons } from './components/film-card-buttons';
import { FilmProps } from './types';
import { Poster } from '../poster';

interface FilmCardProps {
  film: FilmProps;
}
const WIDTH = 218;
const HEIGHT = 327;

const FilmCardComponent: React.FC<FilmCardProps> = ({ film }) => {
  const { img, title, genre, year } = film;

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={img.bgSrc} alt={img.alt} />
      </div>

      <Header className="film-card__head" />

      <div className="film-card__wrap">
        <div className="film-card__info">
          <Poster src={img.src} alt={img.alt} width={WIDTH} height={HEIGHT} />

          <div className="film-card__desc">
            <h2 className="film-card__title">{title}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{year}</span>
            </p>

            <FilmCardButtons />
          </div>
        </div>
      </div>
    </section>
  );
};

export const FilmCard = React.memo(FilmCardComponent);
