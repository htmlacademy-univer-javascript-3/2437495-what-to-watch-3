import React from 'react';
import { Header } from '../../components/header';
import { FilmCardButtons } from '../../components/film-card/components/film-card-buttons';
import { FilmsList } from '../../components/catalog/components/films-list';
import { Footer } from '../../components/footer';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useFilmById, useFilmRating } from '../../hooks/films';
import { RouteLinks } from '../../router/consts';
import { Poster } from '../../components/poster';

const FEW_FILM_LIST = 4;

const FilmPage: React.FC = () => {
  const { id } = useParams();
  const film = useFilmById(id);
  const filmRatingLevel = useFilmRating(film?.rating);

  if (!film) {
    return <Navigate to={RouteLinks.NOT_FOUND} />;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.bgSrc} alt={film.imageSrc} />
          </div>

          <Header className="film-card__head" />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.year}</span>
              </p>

              <FilmCardButtons reviewButton />
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <Poster
              src={film.imageSrc}
              alt={film.alt}
              width={film.width}
              height={film.height}
              className="film-card__poster--big"
            />

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <Link to="#" className="film-nav__link">
                      Overview
                    </Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to="#" className="film-nav__link">
                      Details
                    </Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to="#" className="film-nav__link">
                      Reviews
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{film.rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">{filmRatingLevel}</span>
                  <span className="film-rating__count">
                    {film.ratingCount} ratings
                  </span>
                </p>
              </div>

              <div className="film-card__text">
                <p style={{ whiteSpace: 'pre-wrap' }}>
                  {film.description?.info}
                </p>

                <p className="film-card__director">
                  <strong>Director: {film.description?.director}</strong>
                </p>

                <p className="film-card__starring">
                  <strong>Starring: {film.description?.starring}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList length={FEW_FILM_LIST} />
        </section>

        <Footer />
      </div>
    </>
  );
};
export const Film = React.memo(FilmPage);
