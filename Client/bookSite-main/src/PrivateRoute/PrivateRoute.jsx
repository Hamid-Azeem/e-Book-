import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';

const PrivateRoute = ({ children }) => {
  const checkAuth = useIsAuthenticated();
  const isAuthenticated = typeof checkAuth === 'function' ? checkAuth() : false;
  const location = useLocation();

  if (isAuthenticated) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;