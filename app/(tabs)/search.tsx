import React from 'react';
import { View } from 'react-native';

import Molecules from '@components/molecules';
import actions from '@store/actions';
import { useAppSelector } from '@store/store';

export default function Search() {
  const { topRated, popular, upComing, nowPlaying } = useAppSelector(state => state.movies);
  const { moviesActions } = actions;

  React.useEffect(() => {
    moviesActions.loadBannerMovies();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View>
        <View style={{ height: 150 }}>
          <Molecules.HorizontalList movies={topRated} />
        </View>
      </View>
    </View>
  );
}
