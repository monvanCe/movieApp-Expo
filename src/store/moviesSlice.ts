import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMovie } from './types';

interface moviesState {
  nowPlaying: IMovie[];
  popular: IMovie[];
  topRated: IMovie[];
  upComing: IMovie[];
  owner: {
    watchlist: IMovie[];
    watched: IMovie[];
  };
  friends: {
    id: number;
    name: string;
    watchlist: IMovie[];
    watched: IMovie[];
  }[];
}

const initialState: moviesState = {
  nowPlaying: [],
  popular: [],
  topRated: [],
  upComing: [],
  owner: {
    watchlist: [],
    watched: [],
  },
  friends: [],
};

export const moviesSlice = createSlice({
  name: 'movies',
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
    setOwnerWatchlist: (state, action: PayloadAction<IMovie[]>) => {
      state.owner.watchlist = action.payload;
    },
    addOwnerWatchlist: (state, action: PayloadAction<IMovie>) => {
      state.owner.watchlist.push(action.payload);
    },
    removeOwnerWatchlist: (state, action: PayloadAction<number>) => {
      state.owner.watchlist = state.owner.watchlist.filter(
        (movie) => movie.id !== action.payload
      );
    },
    setOwnerWatched: (state, action: PayloadAction<IMovie[]>) => {
      state.owner.watched = action.payload;
    },
    addOwnerWatched: (state, action: PayloadAction<IMovie>) => {
      state.owner.watched.push(action.payload);
    },
    removeOwnerWatched: (state, action: PayloadAction<number>) => {
      state.owner.watched = state.owner.watched.filter(
        (movie) => movie.id !== action.payload
      );
    },
    setFriendWatchlist: (
      state,
      action: PayloadAction<{ id: number; movies: IMovie[] }>
    ) => {
      const friend = state.friends.find((f) => f.id === action.payload.id);
      if (friend) {
        friend.watchlist = action.payload.movies;
      }
    },
    addFriendWatchlist: (
      state,
      action: PayloadAction<{ id: number; movie: IMovie }>
    ) => {
      const friend = state.friends.find((f) => f.id === action.payload.id);
      if (friend) {
        friend.watchlist.push(action.payload.movie);
      }
    },
    removeFriendWatchlist: (
      state,
      action: PayloadAction<{ id: number; movieId: number }>
    ) => {
      const friend = state.friends.find((f) => f.id === action.payload.id);
      if (friend) {
        friend.watchlist = friend.watchlist.filter(
          (movie) => movie.id !== action.payload.movieId
        );
      }
    },
    setFriendWatched: (
      state,
      action: PayloadAction<{ id: number; movies: IMovie[] }>
    ) => {
      const friend = state.friends.find((f) => f.id === action.payload.id);
      if (friend) {
        friend.watched = action.payload.movies;
      }
    },
    addFriendWatched: (
      state,
      action: PayloadAction<{ id: number; movie: IMovie }>
    ) => {
      const friend = state.friends.find((f) => f.id === action.payload.id);
      if (friend) {
        friend.watched.push(action.payload.movie);
      }
    },
    removeFriendWatched: (
      state,
      action: PayloadAction<{ id: number; movieId: number }>
    ) => {
      const friend = state.friends.find((f) => f.id === action.payload.id);
      if (friend) {
        friend.watched = friend.watched.filter(
          (movie) => movie.id !== action.payload.movieId
        );
      }
    },
  },
});

export const {
  setNowPlayingMovies,
  setPopularMovies,
  setTopRatedMovies,
  setUpComingMovies,
  setOwnerWatchlist,
  addOwnerWatchlist,
  removeOwnerWatchlist,
  setOwnerWatched,
  addOwnerWatched,
  removeOwnerWatched,
  setFriendWatchlist,
  addFriendWatchlist,
  removeFriendWatchlist,
  setFriendWatched,
  addFriendWatched,
  removeFriendWatched,
} = moviesSlice.actions;
export default moviesSlice.reducer;
