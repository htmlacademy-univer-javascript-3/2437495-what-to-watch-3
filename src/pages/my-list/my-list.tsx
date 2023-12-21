import React from 'react';
import { Catalog } from '../../components/catalog';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';

const LIST_LENGTH = 9;

const MyListPage: React.FC = () => (
  <div className="user-page">
    <Header className="user-page__head">
      <h1 className="page-title user-page__title">
        My list <span className="user-page__film-count">{LIST_LENGTH}</span>
      </h1>
    </Header>

    <Catalog withoutButton withoutGenre listLength={LIST_LENGTH} />

    <Footer />
  </div>
);
export const MyList = React.memo(MyListPage);
