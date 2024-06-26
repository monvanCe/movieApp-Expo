import React from 'react';
import { Text, View } from 'react-native';

import Atoms from '@components/atoms';
import Molecules from '@components/molecules';
import useToggle from '@hooks/useToggle';
import Header from '@layout/ListsScreenHeader';
import { fetchMovieDetail } from '@service/externalServices';
import actions from '@store/actions';
import { setAppLanguageAction } from '@store/actions/appConfigActions';
import { useAppSelector } from '@store/store';
import { useRouter } from 'expo-router';

export default function List() {
  const appConfigActions = actions.appConfigActions;
  const appLanguage = useAppSelector(state => state.appConfig.appLanguage);
  const route = useRouter();

  const { open, close, isToggle } = useToggle();

  const fetchMovie = React.useCallback(async () => {
    const movie = await fetchMovieDetail(14);
    console.log(movie);
  }, []);

  return (
    <>
      <Header />
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Atoms.Button text='toggle theme' onPress={() => appConfigActions.toggleTheme()} />
        <Atoms.Button
          text='toggle language'
          onPress={() => setAppLanguageAction(appLanguage === 'en' ? 'tr' : 'en')}
        />
        <Atoms.Button text='open modal' onPress={open} />
        <Atoms.Button text='fetch movie' onPress={fetchMovie} />
        <Atoms.Button text='route' onPress={() => route.replace('ss')} />
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
