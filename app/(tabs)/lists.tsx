import { Text, View } from 'react-native';

import Atoms from '@components/atoms';
import Header from '@layout/ListsScreenHeader';
import actions from '@store/actions';
import { useAppSelector } from '@store/store';

export default function List() {
  const appConfigActions = actions.appConfigActions;
  const appLanguage = useAppSelector(state => state.appConfig.appLanguage);

  return (
    <>
      <Header />
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Atoms.button text='toggle theme' onPress={() => appConfigActions.toggleTheme()} />
        <Atoms.button
          text='toggle language'
          onPress={() => appConfigActions.setAppLanguage(appLanguage === 'en' ? 'tr' : 'en')}
        />
      </View>
    </>
  );
}
