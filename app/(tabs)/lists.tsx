import { Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Atoms from '@components/atoms';
import Molecules from '@components/molecules';
import routeNames from '@const/routeNames';
import { Ionicons } from '@expo/vector-icons';
import useToggle from '@hooks/useToggle';
import Header from '@layout/ListsScreenHeader';
import actions from '@store/actions';
import { useAppSelector } from '@store/store';
import { Link, router } from 'expo-router';

export default function List() {
  const appConfigActions = actions.appConfigActions;
  const appLanguage = useAppSelector(state => state.appConfig.appLanguage);

  const { open, close, isToggle } = useToggle();

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
        <Molecules.CustomModal height={'50%'} visible={isToggle} onClose={close}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              backgroundColor: 'red',
            }}>
            <Text>Modal Content</Text>
          </View>
        </Molecules.CustomModal>
      </View>
    </>
  );
}
