import { combineReducers } from '@reduxjs/toolkit';
import { ReducerName } from '../types/reducer-name';
import { authReducer } from './auth-reducer/auth-reducer.ts';
import { filmReducer } from './film-reducer/film-reducer';
import { mainReducer } from './main-reducer/main-reducer';

export const reducer = combineReducers({
  [ReducerName.Film]: filmReducer.reducer,
  [ReducerName.Main]: mainReducer.reducer,
  [ReducerName.Authorzation]: authReducer.reducer
});
