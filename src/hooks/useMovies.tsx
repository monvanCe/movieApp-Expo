import { fetchMovieDetail } from '@service/externalServices';
import {
  addOrUpdateMovieService,
  getUserWatchedMoviesService,
  getUserWatchlistService,
} from '@service/internalServices';
import {
  addUserWatched,
  addUserWatchlist,
  removeUserWatched,
  removeUserWatchlist,
} from '@store/slices/moviesSlice';
import { store } from '@store/store';

const dispatch = store.dispatch;

export default function useMovies() {
  const loadUserWatchList = async () => {
    const state = store.getState();
    const userWatchlist = state.movies.user.watchlist;
    if (userWatchlist.length) return;
    try {
      const response = await getUserWatchlistService();
      response.forEach(async (movie: any) => {
        const res = await fetchMovieDetail(movie.movieId);
        dispatch(addUserWatchlist(res));
      });
    } catch (error) {
      throw error;
    }
  };

  const loadUserWatched = async () => {
    const state = store.getState();
    const userWatched = state.movies.user.watched;
    if (userWatched.length) return;
    try {
      const response = await getUserWatchedMoviesService();
      response.forEach(async (movie: any) => {
        const res = await fetchMovieDetail(movie.movieId);
        dispatch(addUserWatched(res));
      });
    } catch (error) {
      throw error;
    }
  };

  const addMovieToWatchList = async (movie: IMovie) => {
    try {
      const response = await addOrUpdateMovieService({
        movieId: movie.id.toString(),
        type: 'towatched',
      });
      dispatch(removeUserWatched(movie.id));
      dispatch(addUserWatchlist(movie));
      return response;
    } catch (error) {
      throw error;
    }
  };

  const addMovieToWatched = async (movie: IMovie) => {
    try {
      const response = await addOrUpdateMovieService({
        movieId: movie.id.toString(),
        type: 'watched',
      });
      dispatch(removeUserWatchlist(movie.id));
      dispatch(addUserWatched(movie));
      return response;
    } catch (error) {
      throw error;
    }
  };

  return {
    loadUserWatchList,
    loadUserWatched,

    addMovieToWatchList,
    addMovieToWatched,
  };
}
