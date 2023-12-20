import Catalog from '../../components/catalog/catalog.tsx';
import FilmCard from '../../components/film-card/film-card.tsx';
import Footer from '../../components/footer/footer.tsx';
import { smallCardList } from '../../data/constants/small-card-list.ts';

const Main: React.FC = () => (
  <>
    <FilmCard
      myListCount={9}
      film={{
        poster: { src: 'img/bg-the-grand-budapest-hotel.jpg', alt: 'The Grand Budapest Hotel' },
        title: 'The Grand Budapest Hotel',
        genre: 'Drama',
        year: 2014
      }}
    />

    <div className="page-content">
      <Catalog showGenres cardList={smallCardList}/>
      <Footer/>
    </div>
  </>
);

export default Main;
