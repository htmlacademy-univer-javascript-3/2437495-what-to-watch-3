import React from 'react';
import { FilmCard } from '../../components/film-card';
import { Catalog } from '../../components/catalog';
import { Footer } from '../../components/footer';

const MainPage: React.FC = () => {
  const film = {
    img: {
      src: 'img/the-grand-budapest-hotel-poster.jpg',
      alt: 'The Grand Budapest Hotel',
      bgSrc: 'img/bg-the-grand-budapest-hotel.jpg',
    },
    title: 'The Grand Budapest Hotel',
    genre: 'Drama',
    year: 2014,
  };
  return (
    <>
      <FilmCard film={film} />
      <div className="page-content">
        <Catalog />
        <Footer />
      </div>
    </>
  );
};
export const Main = React.memo(MainPage);
