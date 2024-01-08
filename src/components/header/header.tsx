import React from 'react';
import { Logo } from '../logo';
import { Link } from 'react-router-dom';
import { RouteLinks } from '../../router/consts';

const enum ImgStyles {
  WIDTH = 63,
  HEIGHT = 63,
}

interface HeaderProps {
  children?: JSX.Element;
  className?: string;
}

const HeaderComponent: React.FC<HeaderProps> = ({
  children,
  className = '',
}) => (
  <header className={`page-header ${className}`}>
    <Logo />

    {children}

    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img
            src="img/avatar.jpg"
            alt="User avatar"
            width={ImgStyles.WIDTH}
            height={ImgStyles.HEIGHT}
          />
        </div>
      </li>
      <li className="user-block__item">
        <Link to={RouteLinks.LOGIN} className="user-block__link">
          Sign out
        </Link>
      </li>
    </ul>
  </header>
);

export const Header = React.memo(HeaderComponent);
