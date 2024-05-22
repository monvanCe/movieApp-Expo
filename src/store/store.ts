import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';

import { appConfigSlice } from './appConfigSlice';
import { moviesSlice } from './moviesSlice';
import { authSlice } from './userSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    movies: moviesSlice.reducer,
    appConfig: appConfigSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
