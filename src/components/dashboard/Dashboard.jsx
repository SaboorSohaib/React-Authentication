import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/user/authentication';
import './dashboard.css';

const Dashboard = () => {
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const [showDashboard, setShowDashboard] = useState(true);

  const handleButtonClick = () => {
    dispatch(logout());
    redirect('/');
  };

  const handleMenuClick = () => {
    setShowDashboard(!showDashboard);
  };

  return (
    <section className="container dashboard__container">
      <button type="button" onClick={handleMenuClick} className="dashboard__button">
        {showDashboard ? 'Hide Dashboard' : 'Show Dashboard'}
      </button>
      {showDashboard && (
        <>
          <h1 className="dashboard__title">Dashboard</h1>
          <nav className="sidebar__content">
            <NavLink to="/" className="nav--link">Home</NavLink>
          </nav>
          <div className="logout__container">
            <button type="button" onClick={handleButtonClick} className="logout__button">
              <BiLogOut />
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Dashboard;
