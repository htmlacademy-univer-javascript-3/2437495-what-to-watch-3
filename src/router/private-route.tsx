import { Navigate } from 'react-router-dom';
import { FC } from 'react';
import { RouteLinks } from './consts';

interface PrivateRouteProps {
  children: JSX.Element;
  hasAccess?: boolean;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children, hasAccess = true }) => hasAccess ? children : <Navigate to={RouteLinks.LOGIN} />;

export default PrivateRoute;
