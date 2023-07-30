import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authenticationReducer } from './user/authentication';
import userSlice from './userSlice';

const token = localStorage.getItem('token');
const initialState = {
  auth: {
    token: token || null,
    isAuthenticated: !!token,
  },
};

const rootReducer = combineReducers({
  auth: authenticationReducer,
  users: userSlice,
});

export default configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});
