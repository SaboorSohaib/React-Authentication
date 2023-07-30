import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../redux/user/authentication';
import './signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const success = useSelector((state) => state.auth.success);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    if (event.cancelable) {
      event.preventDefault();
    }
    if (password !== confirmPassword) {
      toast.error('Confirmation Passwords do not match');
      return;
    }
    const reqBody = {
      name,
      gender,
      age,
      email,
      password,
    };
    await dispatch(signup(reqBody));
  };

  useEffect(() => {
    if (success) {
      navigate('/');
    }
  }, [success, navigate]);

  return (
    <div className="form__container">
      <form className="signup__form" onSubmit={handleSubmit}>
        <h2 className="form__title">Create Your Account Here!</h2>
        <div>
          <input
            type="name"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>

        <div>
          <select
            value={gender}
            onChange={(event) => setGender(event.target.value)}
            required
          >
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <input
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            required
          />
        </div>

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
        <div>
          <input
            type="password"
            placeholder="Password Confirmation"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="signup__btn">Create</button>
        <div className="welcome__page">
          <h5 className="add-new">Already have an account? Click here to</h5>
          <button type="button" className="login__page" onClick={() => navigate('/')}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
