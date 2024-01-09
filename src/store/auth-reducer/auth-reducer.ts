import { createSlice } from '@reduxjs/toolkit';
import { ReducerName } from '../../types/reducer-name';
import { dropToken, saveToken } from '../../services/auth-token.ts';
import { checkAuth, login, logout } from '../api-actions';
import { AuthReducerState } from '../../types/auth-reducer-state.ts';
import { AuthStatus } from '../../types/auth-status.ts';

const initialState: AuthReducerState = {
  authorizationStatus: AuthStatus.IDLE,
  user: null,
};

export const authReducer = createSlice({
  name: ReducerName.Authorzation,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logout.fulfilled, (state) => {
        dropToken();
        state.user = null;
        state.authorizationStatus = AuthStatus.NOT_AUTHORIZED;
      })
      .addCase(login.fulfilled, (state, action) => {
        saveToken(action.payload.token);
        state.user = action.payload;
        state.authorizationStatus = AuthStatus.AUTHORIZED;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authorizationStatus = AuthStatus.AUTHORIZED;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.authorizationStatus = AuthStatus.NOT_AUTHORIZED;
      });
  },
});
