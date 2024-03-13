import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import {
  authWithFacebook,
  authWithGoogle,
  logOut,
  resetPassrord,
  signIn,
  signUp,
} from '@services/auth';
import { InitialValuesType, InitialState } from '@ts/interfaces';
import { RootState } from '../store';
import { NavigateFunction } from 'react-router-dom';

export const signUpAsync = createAsyncThunk<
  void,
  { data: InitialValuesType; navigate: NavigateFunction },
  { state: RootState }
>('auth/signUp', async (userData, { dispatch }) => {
  await signUp(dispatch, userData);
});

export const signInAsync = createAsyncThunk<
  void,
  { data: InitialValuesType; navigate: NavigateFunction },
  { state: RootState }
>('auth/signIn', async (userData, { dispatch }) => {
  await signIn(dispatch, userData);
});
export const resetPasswordAsync = createAsyncThunk<
  void,
  { data: InitialValuesType; navigate: NavigateFunction },
  { state: RootState }
>('auth/ForgotPassword', async (userData, { dispatch }) => {
  await resetPassrord(dispatch, userData);
});
export const authWithGoogleAsync = createAsyncThunk<
  void,
  { navigate: NavigateFunction },
  { state: RootState }
>('auth/authWithGoogle', async (userData, { dispatch }) => {
  await authWithGoogle(dispatch, userData);
});
export const authWithFacebookAsync = createAsyncThunk<
  void,
  { navigate: NavigateFunction },
  { state: RootState }
>('auth/authWithFacebook', async (userData, { dispatch }) => {
  await authWithFacebook(dispatch, userData);
});
export const logOutAsync = createAsyncThunk('auth/logOut', async () => {
  await logOut();
});

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: <InitialState>{
    loading: false,
    error: '',
  },
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = '';
    },
  },
});
export const { setLoading, setError, clearError } = AuthSlice.actions;

export default AuthSlice.reducer;
