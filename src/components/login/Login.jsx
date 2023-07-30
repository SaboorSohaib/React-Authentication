import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/user/authentication';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    if (event.cancelable) {
      event.preventDefault();
    }
    const reqBody = {
      email,
      password,
    };
    await dispatch(login(reqBody));
  };

  return (
    <div className="form__container">
      <form className="login__form" onSubmit={handleSubmit}>
        <h1 className="form__title">Login Here!</h1>
        <div>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit__btn">Login</button>
        <div className="welcome__page">
          <h5 className="add-new">Create New Account</h5>
          <button type="button" className="signup__page" onClick={() => navigate('/signup')}>
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
