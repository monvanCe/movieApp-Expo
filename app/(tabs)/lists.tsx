import React from 'react';
import { Text, View } from 'react-native';

import Atoms from '@components/atoms';
import Molecules from '@components/molecules';
import useToggle from '@hooks/useToggle';
import Header from '@layout/ListsScreenHeader';
import { fetchMovieDetail } from '@service/externalServices';
import actions from '@store/actions';
import { useAppSelector } from '@store/store';

export default function List() {
  const [movie, setMovie] = React.useState();
  const appConfigActions = actions.appConfigActions;
  const appLanguage = useAppSelector(state => state.appConfig.appLanguage);

  const { open, close, isToggle } = useToggle();

  const fetchMovie = React.useCallback(async () => {
    const movie = await fetchMovieDetail(14);
    console.log(movie);
    setMovie(movie);
  }, []);

  return (
    <>
      <Header />
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Atoms.Button text='toggle theme' onPress={() => appConfigActions.toggleTheme()} />
        <Atoms.Button
          text='toggle language'
          onPress={() => appConfigActions.setAppLanguage(appLanguage === 'en' ? 'tr' : 'en')}
        />
        <Atoms.Button text='open modal' onPress={open} />
        <Atoms.Button text='fetch movie' onPress={fetchMovie} />
        <Molecules.CustomModal height={'50%'} visible={isToggle} onClose={close}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}>
            <Text>Modal Content</Text>
          </View>
        </Molecules.CustomModal>
      </View>
    </>
  );
}
