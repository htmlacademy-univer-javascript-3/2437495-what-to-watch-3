import * as React from 'react';
import { CatalogType } from '../../types/catalog.type.ts';


type GenresItemProps = {
  catalog: CatalogType;
};

const GenresItem: React.FC<GenresItemProps> = ({ catalog }) => (
  <li
    className="catalog__genres-item catalog__genres-item--active"
    key={catalog.title}
  >
    <a href={catalog.link} className="catalog__genres-link">
      {catalog.title}
    </a>
  </li>
);

export default GenresItem;
