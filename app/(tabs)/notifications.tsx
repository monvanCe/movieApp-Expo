import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import PrimaryText from '@components/atoms/primary-text';
import { Ionicons } from '@expo/vector-icons';
import useRequest from '@hooks/useRequest';
import { FlashList } from '@shopify/flash-list';
import { useAppSelector } from '@store/store';
import { borderRadius, borderWidths, paddings } from '@styles/sizes';
import theme from '@styles/theme';

export default function Profile() {
  const userId = useAppSelector(state => state.auth.currentUser?._id);
  const colors = theme.useTheme();
  const [requests, setRequests] = useState([]);
  const { getAllRequests } = useRequest();

  useEffect(() => {
    getAllRequests().then(setRequests);
  }, []);

  const iconRenderer = (type: string) => {
    switch (type) {
      case 'friendship':
        return 'person';
      case 'friendshipMovies':
        return 'film';
    }
  };

  const colorRenderer = (type: string) => {
    switch (type) {
      case 'send':
        return colors.warning;
      case 'accept':
        return colors.success;
      case 'reject':
        return colors.error;
      case 'cancelled':
        return colors.border;
      case 'removing':
        return colors.border;
    }
  };

  const nameRenderer = (item: any) => {
    if (item.from._id === userId) {
      return item.to.userName;
    } else {
      return item.from.userName;
    }
  };

  const isReceived = (item: any) => {
    if (item.status !== 'send') return false;

    return item.to._id === userId;
  };

  return (
    <View style={{ flex: 1 }}>
      <FlashList
        data={requests}
        renderItem={({ item, index }: { item: any; index: number }) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: paddings.medium,
              borderWidth: borderWidths.small,
              borderColor: colorRenderer(item.status),
              margin: paddings.medium,
              gap: paddings.medium,
              borderRadius: borderRadius.medium,
              opacity: item.status === 'send' ? 1 : 0.5,
            }}>
            <Ionicons name={iconRenderer(item.type)} size={20} color={'white'} />
            <View style={{ marginRight: 'auto' }}>
              <PrimaryText>{nameRenderer(item)}</PrimaryText>
            </View>
            {isReceived(item) && (
              <>
                <Ionicons name='checkmark-circle' size={32} color={colors.success} />
                <Ionicons name='close-circle' size={32} color={colors.error} />
              </>
            )}
          </View>
        )}
        estimatedItemSize={100}
      />
    </View>
  );
}
