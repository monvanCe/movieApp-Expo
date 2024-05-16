import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Movie {
  id: number;
  isAdult: boolean;
  backdropPath: string;
  genreIds: number[];
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
}

interface BannerMoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upComing: Movie[];
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
    setNowPlaying: (state, action: PayloadAction<Movie[]>) => {
      state.nowPlaying = action.payload;
    },
    setPopular: (state, action: PayloadAction<Movie[]>) => {
      state.popular = action.payload;
    },
    setTopRated: (state, action: PayloadAction<Movie[]>) => {
      state.topRated = action.payload;
    },
    setUpComing: (state, action: PayloadAction<Movie[]>) => {
      state.upComing = action.payload;
    },
  },
});

export const { setNowPlaying, setPopular, setTopRated, setUpComing } =
  bannerMoviesSlice.actions;
export default bannerMoviesSlice.reducer;
