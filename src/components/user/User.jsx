import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersThunk } from '../../redux/userSlice';
import './user.css';

const User = () => {
  const users = useSelector((state) => state.users.users);
  const userId = parseInt(localStorage.getItem('user_id'), 10);
  const currentUser = users.find((user) => user.id === userId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersThunk());
  });

  return (
    <div className="user__contaier">
      <h2>User Information</h2>
      <div>
        {currentUser ? (
          <div key={currentUser.id} className="user__info">
            <div>
              <h4>Current User:</h4>
              <h4>Email:</h4>
              <h4>Age:</h4>
              <h4>Gender:</h4>
            </div>
            <div>
              <p>{currentUser.name}</p>
              <p>{currentUser.email}</p>
              <p>{currentUser.age}</p>
              <p>{currentUser.gender}</p>
            </div>

          </div>
        ) : (
          <p>User not found or not logged in.</p>
        )}
      </div>
    </div>
  );
};

export default User;
