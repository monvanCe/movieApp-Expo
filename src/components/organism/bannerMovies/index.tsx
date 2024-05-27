import React from 'react';
import { ScrollView, View } from 'react-native';

import Molecules from '@components/molecules';
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
    <ScrollView style={{ flex: 1 }}>
      <Molecules.MoviesSlider movies={topRated ?? []} title={i18n.t('topRated')} />
      <Molecules.MoviesSlider movies={popular ?? []} title={i18n.t('popular')} />
      <Molecules.MoviesSlider movies={upComing ?? []} title={i18n.t('upComing')} />
      <Molecules.MoviesSlider movies={nowPlaying ?? []} title={i18n.t('nowPlaying')} />
    </ScrollView>
  );
}
