import * as externalServices from '@service/externalServices';

import slices from '../slices';
import { store } from '../store';

const moviesSlice = slices.moviesSlice.actions;

export const loadBannerMovies = async () => {
  const dispatch = store.dispatch;

  const nowPlaying = await externalServices.fetchNowPlayingMovies();
  const popular = await externalServices.fetchPopularMovies();
  const topRated = await externalServices.fetchTopRatedMovies();
  const upComing = await externalServices.fetchUpComingMovies();

  dispatch(moviesSlice.setNowPlayingMovies(nowPlaying));
  dispatch(moviesSlice.setPopularMovies(popular));
  dispatch(moviesSlice.setTopRatedMovies(topRated));
  dispatch(moviesSlice.setUpComingMovies(upComing));
};
