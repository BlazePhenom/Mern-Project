// client/src/components/PrivateRoute.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const { isAuthenticated, isLoading } = useContext(AuthContext);

  // 1. Show a loading message while auth status is being checked
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // 2. If the user is authenticated, show the child component
  //    (The <Outlet /> is a placeholder for the page we are protecting)
  if (isAuthenticated) {
    return <Outlet />;
  }

  // 3. If not authenticated, redirect to the /login page
  return <Navigate to="/login" />;
};

export default PrivateRoute;