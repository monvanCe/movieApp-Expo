import {
  popularApi,
  topRatedApi,
  upComingApi,
  nowPlayingApi,
} from '../const/api';
import { getRequest } from '../service/config';
import {
  setNowPlayingMovies,
  setPopularMovies,
  setTopRatedMovies,
  setUpComingMovies,
} from '../store/moviesSlice';
import { store } from '../store/store';

export const fetchBannerMovies = async () => {
  const dispatch = store.dispatch;

  const nowPlaying: any = await getRequest('external', nowPlayingApi);
  const popular: any = await getRequest('external', popularApi);
  const topRated: any = await getRequest('external', topRatedApi);
  const upComing: any = await getRequest('external', upComingApi);

  dispatch(setNowPlayingMovies(nowPlaying.results));
  dispatch(setPopularMovies(popular.results));
  dispatch(setTopRatedMovies(topRated.results));
  dispatch(setUpComingMovies(upComing.results));
};
