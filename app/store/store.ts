import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { authSlice } from './userSlice';
import { bannerMoviesSlice } from './bannerMoviesSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    bannerMovies: bannerMoviesSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
