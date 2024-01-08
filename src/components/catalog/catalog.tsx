import * as React from 'react';
import GENRES from '../../data/constants/genres';
import SmallFilmCard from '../small-film-card/small-film-card.tsx';
import GenresItem from './genres-item.tsx';
import { SmallFilmCardProps } from '../small-film-card/small-film-card.types.ts';

export type CatalogProps = {
  showGenres?: boolean;
  cardList: SmallFilmCardProps[];
};


const Catalog: React.FC<CatalogProps> = ({showGenres, cardList}) => (
  <section className="catalog">
    <h2 className="catalog__title visually-hidden">
      Catalog
    </h2>

    {showGenres ?
      <ul className="catalog__genres-list">
        {GENRES.map((catalog) => (
          <GenresItem catalog={catalog} key={catalog.title} />
        ))}
      </ul>
      : null}

    <div className="catalog__films-list">
      {cardList.map((card) => <SmallFilmCard {...card} key={card.title} />)}
    </div>

    {cardList.length >= 20 ?
      <div className="catalog__more">
        <button className="catalog__button" type="button">
          Show more
        </button>
      </div> : null}
  </section>

);

export default Catalog;
