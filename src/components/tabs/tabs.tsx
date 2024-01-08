import React, {memo, useCallback, useEffect, useState} from 'react';
import {FilmInfoProps} from '../../mocs/films.ts';
import {Link} from 'react-router-dom';
import {TabPanel} from './panels/tab-panel.tsx';

export enum TabsEnum {
  'Overview' = 'Overview',
  'Details' = 'Details',
  'Reviews' = 'Reviews',
}

const TABS: TabsEnum[] = [
  TabsEnum.Overview,
  TabsEnum.Details,
  TabsEnum.Reviews,
];


type TabsProps = {
  film : FilmInfoProps;
}

const TabsComponent: React.FC<TabsProps> = ({film}) => {
  const [activeTab, setActiveTab] = useState<TabsEnum>(TabsEnum.Overview);
  useEffect(() => {
    setActiveTab(TabsEnum.Overview);
  }, [film]);

  const handleTabClick = useCallback(
    (event: React.MouseEvent<HTMLLIElement>) => {
      const { innerText } = event.currentTarget;
      switch (innerText) {
        case TabsEnum.Overview:
          setActiveTab(TabsEnum.Overview);
          break;
        case TabsEnum.Details:
          setActiveTab(TabsEnum.Details);
          break;
        case TabsEnum.Reviews:
          setActiveTab(TabsEnum.Reviews);
          break;
      }
    },
    []
  );


  return (
    <div className={'film-card__desc'}>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {TABS.map((tab) => (
            <li
              key={tab}
              className={`film-nav__item ${
                tab === activeTab ? 'film-nav__item--active' : ''
              }`}
              onClick={handleTabClick}
            >
              <Link to="#" className="film-nav__link">
                {tab}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <TabPanel tab={activeTab} film={film}/>
    </div>

  );
};

export const Tabs = memo(TabsComponent);
