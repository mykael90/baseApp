import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';

function RequireAuth({ allowedRoles }) {
  const { auth } = useAuth();
  const location = useLocation();

  // eslint-disable-next-line no-nested-ternary
  return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/Login" state={{ from: location }} replace />
  );
}

RequireAuth.defaultProps = {
  allowedRoles: [],
};

RequireAuth.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  allowedRoles: PropTypes.array,
};

export default RequireAuth;
