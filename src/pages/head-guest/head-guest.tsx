import React from 'react';
import { Link } from 'react-router-dom';

const HeadGuestPage: React.FC = () => (
  <section className="film-card">
    <div className="film-card__bg">
      {/* <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />  */}
      <img src="img/bg-header.jpg" />
    </div>

    <header className="page-header">
      <div className="logo">
        <Link className="logo__link" to={''}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <div className="user-block">
        <Link to="sign-in.html" className="user-block__link">
          Sign in
        </Link>
      </div>
    </header>
  </section>
);
export const HeadGuest = React.memo(HeadGuestPage);
