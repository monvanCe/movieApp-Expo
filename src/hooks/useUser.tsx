import {
  getAllRequestsService,
  getFriendWatchedMoviesService,
  getFriendWatchlistService,
  getFriendsService,
  getSearchedUsersService,
  sendFriendshipAnswerService,
  sendFriendshipRequestService,
} from '@service/internalServices';
import { addFriend, setFriendWatched, setFriendWatchlist } from '@store/slices/moviesSlice';
import { store } from '@store/store';

export default function useUser() {
  const dispatch = store.dispatch;
  const getAllRequests = async () => {
    try {
      const response = await getAllRequestsService();
      return response;
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

  const acceptFriendshipRequest = async (RequestId: string) => {
    try {
      const response = await sendFriendshipAnswerService({ RequestId, status: 'accept' });
      return response;
    } catch (error) {
      throw error;
    }
  };

  const rejectFriendshipRequest = async (RequestId: string) => {
    try {
      const response = await sendFriendshipAnswerService({ RequestId, status: 'reject' });
      return response;
    } catch (error) {
      throw error;
    }
  };

  const cancelFriendshipRequest = async (RequestId: string) => {
    try {
      const response = await sendFriendshipAnswerService({
        RequestId,
        status: 'cancelled',
      });
      return response;
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

  return {
    getAllRequests,
    searchUsers,
    sendFriendshipRequest,
    loadFriends,
    acceptFriendshipRequest,
    rejectFriendshipRequest,
    cancelFriendshipRequest,
  };
}
