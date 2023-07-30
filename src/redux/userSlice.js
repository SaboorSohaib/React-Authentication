import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import APIUrl from './url';

export const getUsersThunk = createAsyncThunk('users/getUsers', async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${APIUrl}users`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const data = response.data ?? [];
    return data;
  } catch (error) {
    toast.error(error);
    throw new Error('Failed to fetch User');
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState: { users: [], status: 'idle' },
  extraReducers: (builder) => {
    builder.addCase(getUsersThunk.fulfilled, (state, action) => {
      state.status = 'success';
      state.users = action.payload;
    });
  },
});

export default usersSlice.reducer;
