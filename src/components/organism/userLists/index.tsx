import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, Text, TouchableOpacity, View } from 'react-native';

import CustomModal from '@components/molecules/customModal';
import MovieList from '@components/molecules/movieList';
import UserList from '@components/molecules/userList';
import { highResImage, lowResImage } from '@const/imageSources';
import { Ionicons } from '@expo/vector-icons';
import useMovies from '@hooks/useMovies';
import useToggle from '@hooks/useToggle';
import { FlashList } from '@shopify/flash-list';
import { useAppSelector } from '@store/store';
import { borderRadius, borderWidths, fontSizes, margins, paddings } from '@styles/sizes';
import theme from '@styles/theme';
import { Image } from 'expo-image';

const { width } = Dimensions.get('window');

export default function UserLists() {
  const [modalContent, setModalContent] = useState<number>(0);
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);

  const { toggle, isToggle } = useToggle();
  const { loadUserWatchList, loadUserWatched } = useMovies();
  const userWatchlist = useAppSelector(state => state.movies.user.watchlist);
  const userWatched = useAppSelector(state => state.movies.user.watched);
  const watchListImages = userWatchlist.map(movie => lowResImage(movie.posterPath));
  const watchedImages = userWatched.map(movie => lowResImage(movie.posterPath));
  const colors = theme.useTheme();

  useEffect(() => {
    loadUserWatchList();
    loadUserWatched();
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

  const flatListRef = useRef<FlatList>(null);

  return (
    <View style={{ flexDirection: 'row', gap: paddings.small }}>
      <View style={{ width: '33%' }}>
        <UserList
          images={watchListImages}
          text='İzlenecekler'
          onPress={() => {
            setModalContent(0);
            toggle();
          }}
        />
      </View>
      <View style={{ width: '33%' }}>
        <UserList
          images={watchedImages}
          text='İzlenenler'
          onPress={() => {
            setModalContent(1);
            toggle();
          }}
        />
      </View>
      <CustomModal height='100%' visible={isToggle} onPress={toggle}>
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
                    movies={modalContent === 0 ? userWatchlist : userWatched}
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
