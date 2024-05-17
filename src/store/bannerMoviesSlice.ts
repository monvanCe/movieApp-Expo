import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMovie } from './types';

interface BannerMoviesState {
  nowPlaying: IMovie[];
  popular: IMovie[];
  topRated: IMovie[];
  upComing: IMovie[];
}

const initialState: BannerMoviesState = {
  nowPlaying: [],
  popular: [],
  topRated: [],
  upComing: [],
};

export const bannerMoviesSlice = createSlice({
  name: 'bannerMovies',
  initialState,
  reducers: {
    setNowPlayingMovies: (state, action: PayloadAction<IMovie[]>) => {
      state.nowPlaying = action.payload;
    },
    setPopularMovies: (state, action: PayloadAction<IMovie[]>) => {
      state.popular = action.payload;
    },
    setTopRatedMovies: (state, action: PayloadAction<IMovie[]>) => {
      state.topRated = action.payload;
    },
    setUpComingMovies: (state, action: PayloadAction<IMovie[]>) => {
      state.upComing = action.payload;
    },
  },
});

export const {
  setNowPlayingMovies,
  setPopularMovies,
  setTopRatedMovies,
  setUpComingMovies,
} = bannerMoviesSlice.actions;
export default bannerMoviesSlice.reducer;
