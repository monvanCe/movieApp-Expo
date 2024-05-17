import {
  popularApi,
  topRatedApi,
  upComingApi,
  nowPlayingApi,
} from '../const/api';
import {
  setNowPlayingMovies,
  setPopularMovies,
  setTopRatedMovies,
  setUpComingMovies,
} from '../store/bannerMoviesSlice';
import { useAppDispatch } from '../store/store';

const dispatch = useAppDispatch();

export const fetchBannerMovies = async () => {
  const popular = await fetch(popularApi).then((res) => res.json());
  const topRated = await fetch(topRatedApi).then((res) => res.json());
  const upComing = await fetch(upComingApi).then((res) => res.json());
  const nowPlaying = await fetch(nowPlayingApi).then((res) => res.json());

  dispatch(setPopularMovies(popular.results));
  dispatch(setTopRatedMovies(topRated.results));
  dispatch(setUpComingMovies(upComing.results));
  dispatch(setNowPlayingMovies(nowPlaying.results));
};
