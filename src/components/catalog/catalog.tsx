import React from 'react';
import { GenreList } from './components/genre-list';
import { FilmsList } from './components/films-list';

interface CatalogProps {
  withoutGenre?: boolean;
  withoutButton?: boolean;
  listLength?: number;
}

const CatalogComponent: React.FC<CatalogProps> = ({
  withoutGenre = false,
  withoutButton = false,
  listLength
}) => (
  <section className="catalog">
    <h2 className="catalog__title visually-hidden">Catalog</h2>

    {!withoutGenre ? <GenreList /> : null}

    <FilmsList length={listLength} />

    {!withoutButton ? (
      <div className="catalog__more">
        <button className="catalog__button" type="button">
          Show more
        </button>
      </div>
    ) : null}
  </section>
);

export const Catalog = React.memo(CatalogComponent);
