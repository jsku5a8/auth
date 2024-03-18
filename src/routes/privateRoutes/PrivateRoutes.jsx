// PrivateRoute.js
import React, { useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { checkAuth } from './AuthService';

const PrivateRoute = ({ path, element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const { isAuth } = await checkAuth();
        setIsAuthenticated(isAuth);
      } catch (error) {
        console.error('Error checking authentication:', error);
        setIsAuthenticated(false);
      }
    };

    checkAuthentication();
  }, []);

  if (isAuthenticated === null) {
    // Пока происходит проверка аутентификации, можно отобразить заглушку или загрузочный экран
    return <div>Loading...</div>;
  }

  return (
    <Route
      path={path}
      element={isAuthenticated ? element : <Navigate to="/" />} // Если не аутентифицирован, отправить на главную страницу
    />
  );
};

export default PrivateRoute;
