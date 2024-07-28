import React from 'react';
import { ScrollView, View } from 'react-native';

import MoviesSlider from '@components/molecules/moviesSlider';
import i18n from '@localization/index';
import actions from '@store/actions';
import { useAppSelector } from '@store/store';

export default function BannerMovies() {
  const { topRated, upComing, nowPlaying, popular } = useAppSelector(state => state.movies);
  const { moviesActions } = actions;

  React.useEffect(() => {
    moviesActions.loadBannerMovies();
  }, []);

  return (
    <ScrollView style={{ flex: 1, marginBottom: 10 }}>
      <MoviesSlider movies={topRated ?? []} text={i18n.t('topRated')} />
      <MoviesSlider movies={popular ?? []} text={i18n.t('popular')} />
      <MoviesSlider movies={upComing ?? []} text={i18n.t('upComing')} />
      <MoviesSlider movies={nowPlaying ?? []} text={i18n.t('nowPlaying')} />
    </ScrollView>
  );
}
