import React, { useLayoutEffect } from 'react';
import { FilmCard } from '../../components/film-card';
import { Catalog } from '../../components/catalog';
import { Footer } from '../../components/footer';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { Spinner } from '../../components/spinner/spinner';
import { ReducerName } from '../../types/reducer-name';
import { fetchPromo } from '../../store/api-actions';

const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const promo = useAppSelector((state) => state[ReducerName.Main].promo);

  useLayoutEffect(() => {
    dispatch(fetchPromo());
  }, [dispatch]);

  if(!promo) {
    return <Spinner />;
  }

  return (
    <>
      <FilmCard film={promo} />
      <div className="page-content">
        <Catalog />
        <Footer />
      </div>
    </>
  );
};
export const Main = React.memo(MainPage);
