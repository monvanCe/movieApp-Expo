import { fetchMovieDetail } from '@service/externalServices';
import {
  addOrUpdateMovieService,
  getFriendWatchedMoviesService,
  getFriendWatchlistService,
  getFriendsService,
  getSearchedUsersService,
  getUserWatchedMoviesService,
  getUserWatchlistService,
  sendFriendshipRequestService,
} from '@service/internalServices';
import {
  addFriend,
  addUserWatched,
  addUserWatchlist,
  removeUserWatched,
  removeUserWatchlist,
  setFriendWatched,
  setFriendWatchlist,
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

  const loadFriends = async () => {
    const state = store.getState();
    const friends = state.movies.friends;
    if (friends.length) return;

    try {
      const response = await getFriendsService();
      response.forEach(async (friend: any) => {
        const friendWatchlist = await getFriendWatchlistService(friend._id);
        const friendWatched = await getFriendWatchedMoviesService(friend._id);
        dispatch(addFriend({ id: friend.friends._id, name: friend.friends.userName }));
        dispatch(setFriendWatchlist({ id: friend.friends._id, movies: friendWatchlist }));
        dispatch(setFriendWatched({ id: friend.friends._id, movies: friendWatched }));
      });
    } catch (error) {
      throw error;
    }
  };

  const searchUsers = async (search: string) => {
    try {
      const response = await getSearchedUsersService(search);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const sendFriendshipRequest = async (friendId: string) => {
    try {
      const response = await sendFriendshipRequestService(friendId);
      return response;
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
    loadFriends,
    searchUsers,
    sendFriendshipRequest,
    addMovieToWatchList,
    addMovieToWatched,
  };
}
