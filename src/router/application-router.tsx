import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from '.';
import React from 'react';
import { AddReview } from '../pages/add-review';
import { Film } from '../pages/film';
import { Main } from '../pages/main';
import { MyList } from '../pages/my-list';
import { Player } from '../pages/player';
import { SignIn } from '../pages/sign-in';
import { NotFound404 } from '../pages/not-found-404';
import { RouteLinks } from './route-links.ts';
import { ScrollToTop } from '../components/scroll-to-top';

const ApplicationRouter: React.FC = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path={RouteLinks.MAIN} element={<Main />} />
      <Route path={RouteLinks.LOGIN} element={<SignIn />} />
      <Route
        path={RouteLinks.MY_LIST}
        element={
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        }
      />
      <Route path={RouteLinks.PLAYER} element={<Player />} />
      <Route path={RouteLinks.FILM}>
        <Route index element={<Film />} />
        <Route
          path={RouteLinks.REVIEW}
          element={
            <PrivateRoute>
              <AddReview />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path={RouteLinks.NOT_FOUND} element={<NotFound404 />} />
    </Routes>
  </BrowserRouter>
);

export default ApplicationRouter;
