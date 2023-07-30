import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
import User from '../components/user/User';
import '../components/dashboard/dashboard.css';

const isAuthenticated = true;
const AuthenticatedRoute = () => {
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="authenticated__route">
      <Dashboard />
      <Routes>
        <Route path="/" element={<User />} />
      </Routes>
    </div>
  );
};

export default AuthenticatedRoute;
