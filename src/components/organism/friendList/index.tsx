import { useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, Text, TouchableOpacity, View } from 'react-native';

import ImageStack from '@components/atoms/imageStack';
import PrimaryText from '@components/atoms/primary-text';
import SecondaryText from '@components/atoms/secondary-text';
import AddFriend from '@components/molecules/addFriend';
import CustomModal from '@components/molecules/customModal';
import MovieList from '@components/molecules/movieList';
import { highResImage, lowResImage } from '@const/imageSources';
import { Ionicons } from '@expo/vector-icons';
import useToggle from '@hooks/useToggle';
import useUser from '@hooks/useUser';
import { FlashList } from '@shopify/flash-list';
import { useAppSelector } from '@store/store';
import { borderRadius, borderWidths, fontSizes, margins, paddings } from '@styles/sizes';
import theme from '@styles/theme';
import { Image } from 'expo-image';

const { width } = Dimensions.get('window');

export default function Friendlist() {
  const friends = useAppSelector(state => state.movies.friends);
  const { loadFriends } = useUser();
  const { toggle, isToggle } = useToggle();
  const colors = theme.useTheme();
  const flatListRef = useRef<FlatList>(null);
  const [selectedFriend, setSelectedFriend] = useState<any>(null);
  const [modalContent, setModalContent] = useState<number>(0);
  const [selectedMovie, setSelectedMovie] = useState<any>(null);

  useEffect(() => {
    loadFriends();
  }, []);

  const renderMovieDetail = () => (
    <View style={{ flex: 1 }}>
      {selectedMovie && (
        <>
          <TouchableOpacity
            onPress={() => {
              flatListRef.current?.scrollToIndex({ index: 0 });
            }}>
            <Ionicons
              name='chevron-back'
              size={30}
              color={colors.primary}
              style={{ margin: paddings.medium }}
            />
          </TouchableOpacity>
          <Image
            source={{ uri: highResImage(selectedMovie.posterPath) }}
            style={{
              width: '100%',
              aspectRatio: 2,
              borderRadius: borderRadius.medium,
            }}
          />
          <Text
            style={{
              fontSize: fontSizes.large,
              color: colors.primaryText,
              marginTop: margins.medium,
            }}>
            {selectedMovie.title}
          </Text>
          <Text
            style={{
              fontSize: fontSizes.medium,
              color: colors.secondaryText,
              marginTop: margins.small,
            }}>
            {selectedMovie.overview}
          </Text>
        </>
      )}
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', marginBottom: margins.small }}>
        <AddFriend />
        <PrimaryText>Friend List</PrimaryText>
      </View>
      <FlashList
        data={friends}
        renderItem={({ item, index }) => (
          <View
            style={{
              borderWidth: borderWidths.small,
              padding: paddings.small,
              borderColor: colors.border,
              alignItems: 'center',
              borderRadius: borderRadius.medium,
            }}>
            <PrimaryText>{item.name}</PrimaryText>
            <View
              style={{
                height: 1,
                width: '95%',
                backgroundColor: colors.border,
                marginTop: margins.small,
              }}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                style={{ alignItems: 'center' }}
                onPress={() => {
                  setSelectedFriend(item);
                  setModalContent(0);
                  toggle();
                }}>
                <View style={{ width: '35%', aspectRatio: 1, margin: paddings.medium }}>
                  <ImageStack images={item.watchlist.map(el => lowResImage(el.posterPath))} />
                </View>
                <SecondaryText>Watch List</SecondaryText>
              </TouchableOpacity>

              <View
                style={{
                  width: 1,
                  height: '85%',
                  backgroundColor: colors.border,
                }}
              />

              <TouchableOpacity
                style={{ alignItems: 'center' }}
                onPress={() => {
                  setSelectedFriend(item);
                  setModalContent(1);
                  toggle();
                }}>
                <View style={{ width: '35%', aspectRatio: 1, margin: paddings.medium }}>
                  <ImageStack images={item.watched.map(el => lowResImage(el.posterPath))} />
                </View>
                <SecondaryText>Watched List</SecondaryText>
              </TouchableOpacity>
            </View>
          </View>
        )}
        estimatedItemSize={20}
      />
      <CustomModal height='100%' visible={isToggle} onPress={toggle}>
        <View style={{ marginVertical: margins.medium }}>
          <PrimaryText>
            {selectedFriend?.name} {modalContent === 0 ? 'Watch List' : 'Watched List'}
          </PrimaryText>
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            ref={flatListRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEnabled
            data={[{ key: 'list' }, { key: 'details' }]}
            renderItem={({ item }) => (
              <View style={{ width: width - 2 * paddings.medium }}>
                {item.key === 'list' ? (
                  <MovieList
                    movies={
                      modalContent === 0 ? selectedFriend?.watchlist : selectedFriend?.watched
                    }
                    onPress={movie => {
                      setSelectedMovie(movie);
                      flatListRef.current?.scrollToIndex({ index: 1 });
                    }}
                  />
                ) : (
                  renderMovieDetail()
                )}
              </View>
            )}
          />
        </View>
      </CustomModal>
    </View>
  );
}
