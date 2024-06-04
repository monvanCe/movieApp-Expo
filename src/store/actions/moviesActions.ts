import * as externalServices from '@service/externalServices';
import {
  setNowPlayingMovies,
  setPopularMovies,
  setTopRatedMovies,
  setUpComingMovies,
} from '@store/slices/moviesSlice';

import { store } from '../store';

export const loadBannerMovies = async () => {
  const dispatch = store.dispatch;

  const nowPlaying = await externalServices.fetchNowPlayingMovies();
  const popular = await externalServices.fetchPopularMovies();
  const topRated = await externalServices.fetchTopRatedMovies();
  const upComing = await externalServices.fetchUpComingMovies();

  dispatch(setNowPlayingMovies(nowPlaying));
  dispatch(setPopularMovies(popular));
  dispatch(setTopRatedMovies(topRated));
  dispatch(setUpComingMovies(upComing));
};
