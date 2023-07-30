import React from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import AuthenticatedRoute from './routes/AuthenticatedRoute';
import UnAuthenticatedRoute from './routes/UnAuthenticatedRoute';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div>
      <ToastContainer theme="colored" position="top-right" />
      {!isAuthenticated ? (
        <UnAuthenticatedRoute />
      ) : (
        <AuthenticatedRoute />
      )}
    </div>
  );
};

export default App;
