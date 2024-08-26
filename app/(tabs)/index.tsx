import React from 'react';
import { View } from 'react-native';

import Friendlist from '@components/organism/friendList';
import UserLists from '@components/organism/userLists';
import { paddings } from '@styles/sizes';

export default function List() {
  return (
    <>
      <View style={{ flex: 1, padding: paddings.small, gap: paddings.medium }}>
        <UserLists />
        <Friendlist />
      </View>
    </>
  );
}
