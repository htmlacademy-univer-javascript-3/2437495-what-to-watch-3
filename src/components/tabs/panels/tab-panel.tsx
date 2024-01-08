import {TabsEnum} from '../tabs.tsx';
import {FilmInfoProps} from '../../../mocs/films.ts';
import React from 'react';
import {Overview} from './overview.tsx';
import {Details} from './details.tsx';
import {Reviews} from './reviews.tsx';

type TabPanelProps = {
    tab: TabsEnum;
    film: FilmInfoProps;
}

const TabPanelComponent:React.FC<TabPanelProps> = ({
  tab,
  film
}) => {

  switch (tab) {
    case TabsEnum.Overview:
      return <Overview film={film} />;
    case TabsEnum.Details:
      return <Details film={film} />;
    case TabsEnum.Reviews:
      return <Reviews />;
    default:
      return null;
  }
};


export const TabPanel = React.memo(TabPanelComponent);

