import { useEffect, useState } from 'react';
import { View } from 'react-native';

import PrimaryText from '@components/atoms/primary-text';
import SecondaryText from '@components/atoms/secondary-text';
import { lowResImage } from '@const/imageSources';
import { Ionicons } from '@expo/vector-icons';
import useMovies from '@hooks/useMovies';
import useUser from '@hooks/useUser';
import { FlashList } from '@shopify/flash-list';
import { useAppSelector } from '@store/store';
import { borderRadius, borderWidths, paddings } from '@styles/sizes';
import theme from '@styles/theme';
import { Image } from 'expo-image';

export default function Profile() {
  const userId = useAppSelector(state => state.auth.currentUser?._id);
  const colors = theme.useTheme();
  const [requests, setRequests] = useState<any>([]);

  const {
    getAllRequests,
    acceptFriendshipRequest,
    rejectFriendshipRequest,
    cancelFriendshipRequest,
  } = useUser();

  const { answerFriendMovieRequest } = useMovies();

  const { getMovie } = useMovies();

  const loadRequests = () => {
    getAllRequests().then(requests => {
      const newRequests = requests.map(async (request: any) => {
        if (request.type === 'friendshipMovies') {
          const movie = await getMovie(request.movie);
          return { ...request, image: movie.posterPath, subTitle: movie.title };
        }

        if (request.type === 'friendship') {
          const image = request.from._id === userId ? request.to.avatarId : request.from.avatarId;

          return { ...request, image, subTitle: 'Friendship request' };
        }

        return request;
      });

      Promise.all(newRequests).then(setRequests);
    });
  };

  useEffect(() => {
    loadRequests();
  }, []);

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

  const isSent = (item: any) => {
    if (item.status !== 'send') return false;

    return item.from._id === userId;
  };

  const movieIconRenderer = (item: any) => {
    if (item.type === 'friendshipMovies') {
      switch (item.movieType) {
        case 'towatched':
          return 'add';
        case 'watched':
          return 'checkmark';
      }
    }

    if (item.type === 'friendship') {
      return 'add';
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Ionicons name='reload' size={24} color={colors.primary} onPress={loadRequests} />

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
            <View style={{ position: 'relative' }}>
              <Image
                source={{ uri: item.type === 'friendship' ? item.image : lowResImage(item.image) }}
                style={{ height: 50, aspectRatio: 1 }}
              />

              <View
                style={{
                  position: 'absolute',
                  borderRadius: 50,
                  right: 0,
                  bottom: 0,
                  backgroundColor: item.movieType === 'towatched' ? colors.warning : colors.success,
                }}>
                <Ionicons name={movieIconRenderer(item)} size={16} color={colors.primaryText} />
              </View>
            </View>
            <View style={{ marginRight: 'auto' }}>
              <PrimaryText>{nameRenderer(item)}</PrimaryText>
              <SecondaryText>{item.subTitle}</SecondaryText>
            </View>
            {isReceived(item) && (
              <>
                <Ionicons
                  name='checkmark-circle'
                  size={32}
                  color={colors.success}
                  onPress={() =>
                    item.type === 'friendshipMovies'
                      ? answerFriendMovieRequest(item._id, 'accept')
                      : acceptFriendshipRequest(item._id)
                  }
                />
                <Ionicons
                  name='close-circle'
                  size={32}
                  color={colors.error}
                  onPress={() =>
                    item.type === 'friendshipMovies'
                      ? answerFriendMovieRequest(item._id, 'reject')
                      : rejectFriendshipRequest(item._id)
                  }
                />
              </>
            )}
            {isSent(item) && (
              <>
                <Ionicons
                  name='close-circle'
                  size={32}
                  color={colors.error}
                  onPress={() => {
                    item.type === 'friendshipMovies'
                      ? answerFriendMovieRequest(item._id, 'cancelled')
                      : cancelFriendshipRequest(item._id);
                  }}
                />
              </>
            )}
          </View>
        )}
        estimatedItemSize={100}
      />
    </View>
  );
}
