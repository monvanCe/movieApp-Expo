import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { authSlice } from './userSlice';
import { moviesSlice } from './moviesSlice';
import { appConfigSlice } from './appConfigSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    movies: moviesSlice.reducer,
    appConfig: appConfigSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
