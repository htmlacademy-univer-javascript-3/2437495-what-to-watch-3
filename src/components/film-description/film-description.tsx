import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Tabs } from './tabs';
import { Overview } from './tab-panels/overview';
import { Details as FilmDetails } from './tab-panels/details';
import { Reviews as FilmReviews } from './tab-panels/reviews';
import { Film } from '../../types/film';

interface FilmDescriptionProps {
  film: Film;
}

const TAB_TYPES = ['Overview', 'Details', 'Reviews'] as const;

export type TTabs = typeof TAB_TYPES[number];

const FilmDescriptionComponent: FC<FilmDescriptionProps> = ({ film }) => {
  const [activeTab, setActiveTab] = useState<string>(TAB_TYPES[0]);

  const handleTabClick = useCallback((tab: string) => {
    const foundTab = TAB_TYPES.find((currentTab) => tab === currentTab);
    if (foundTab) {
      setActiveTab(tab);
    }
  }, []);

  const panel = useMemo(() => {
    switch (activeTab) {
      case TAB_TYPES[0]:
        return <Overview film={film} />;
      case TAB_TYPES[1]:
        return <FilmDetails film={film} />;
      case TAB_TYPES[2]:
        return <FilmReviews />;
      default:
        return null;
    }
  }, [activeTab, film]);

  useEffect(() => {
    setActiveTab(TAB_TYPES[0]);
  }, [film.id]);

  return (
    <div className="film-card__desc">
      <Tabs onClick={handleTabClick} active={activeTab} />

      {panel}
    </div>
  );
};

export const FilmDescription = memo(FilmDescriptionComponent);
