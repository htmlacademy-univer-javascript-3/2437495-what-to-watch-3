import React from 'react';
import { Link } from 'react-router-dom';
import { RouteLinks } from '../../router/consts';

interface LogoProps {
  className?: string;
}

const LogoComponent: React.FC<LogoProps> = ({ className }) => (
  <div className="logo">
    <Link className={`logo__link ${className ? className : ''}`} to={RouteLinks.MAIN}>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  </div>
);

export const Logo = React.memo(LogoComponent);
