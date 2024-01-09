import { Navigate } from 'react-router-dom';
import { FC } from 'react';
import { useAppSelector } from '../hooks/store';
import { AuthStatus } from '../types/auth-status.ts';
import { ReducerName } from '../types/reducer-name';

interface PrivateRouteProps {
  children: React.ReactElement;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const authorizationStatus = useAppSelector(
    (state) => state[ReducerName.Authorzation].authorizationStatus
  );
  const notAuth = authorizationStatus === AuthStatus.NOT_AUTHORIZED;

  return !notAuth ? children : <Navigate to={'/login'} />;
};

export default PrivateRoute;
