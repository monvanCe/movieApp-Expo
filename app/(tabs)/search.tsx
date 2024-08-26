import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Dropdown from '@components/atoms/dropdown';
import SearchButton from '@components/atoms/searchButton';
import CustomModal from '@components/molecules/customModal';
import BannerMovies from '@components/organism/bannerMovies';
import { highResImage, lowResImage } from '@const/imageSources';
import { Ionicons } from '@expo/vector-icons';
import useMovies from '@hooks/useMovies';
import useToggle from '@hooks/useToggle';
import { searchMovies } from '@service/externalServices';
import { FlashList } from '@shopify/flash-list';
import { useAppSelector } from '@store/store';
import { borderRadius, fontSizes, margins, paddings } from '@styles/sizes';
import theme from '@styles/theme';

export default function Search() {
  const { addMovieToWatchList, addMovieToWatched } = useMovies();
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);
  const { toggle, isToggle, close } = useToggle();
  const colors = theme.useTheme();
  const flatListRef = useRef<FlatList>(null);
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const width = Dimensions.get('window').width;
  const friends = useAppSelector(state => state.movies.friends);
  const dropdownItems = [
    { name: 'Watchlist', type: 0 },
    { name: 'Watched', type: 1 },
    ...friends.map(friend => ({ name: friend.name + 'watchlist', type: 2, id: friend.id })),
    ...friends.map(friend => ({ name: friend.name + 'watched', type: 3, id: friend.id })),
  ];

  useEffect(() => {
    if (searchTerm.length < 3) {
      setSearchedMovies([]);
      return;
    }

    const time = setTimeout(async () => {
      const movies = await searchMovies(searchTerm);
      setSearchedMovies(movies);
    }, 1000);

    return () => clearTimeout(time);
  }, [searchTerm]);

  const renderMovieList = () => (
    <FlashList
      data={searchedMovies}
      renderItem={({ item, index }: { item: IMovie; index: number }) => (
        <>
          <TouchableOpacity
            onPress={() => {
              setSelectedMovie(item);
              flatListRef.current?.scrollToIndex({ index: 1 });
              setCurrentPage(1);
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: index === 0 ? margins.small : 0,
            }}>
            <Image
              source={{ uri: lowResImage(item.posterPath) }}
              style={{
                height: 75,
                aspectRatio: 9 / 13.5,
                marginRight: paddings.small,
              }}
            />
            <View>
              <Text style={{ color: colors.primaryText, fontWeight: 'bold' }}>{item.title}</Text>
              <Text style={{ color: colors.secondaryText }}>{item.releaseDate}</Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              height: 1,
              backgroundColor: colors.divider,
              marginVertical: margins.small,
            }}
          />
        </>
      )}
      keyExtractor={item => item.id.toString()}
      estimatedItemSize={100}
    />
  );

  const renderMovieDetail = () => (
    <View style={{ flex: 1 }}>
      {selectedMovie && (
        <>
          <TouchableOpacity
            onPress={() => {
              flatListRef.current?.scrollToIndex({ index: 0 });
              setCurrentPage(0);
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
          <View
            style={{
              flexDirection: 'row',
              zIndex: 10,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: fontSizes.large,
                color: colors.primaryText,
                marginTop: margins.medium,
                flex: 1,
              }}>
              {selectedMovie.title}
            </Text>

            <TouchableOpacity onPress={handleAddButton}>
              <Ionicons
                name='add-circle'
                size={30}
                color={colors.primary}
                style={{ marginLeft: 'auto', margin: paddings.medium }}
              />
            </TouchableOpacity>
            <View style={{ width: '33%' }}>
              <Dropdown
                text={selectedItem?.name}
                texts={dropdownItems.map(item => item.name)}
                onPress={(item: string) => {
                  const selectedItem = dropdownItems.find(i => i.name === item);
                  if (selectedItem) setSelectedItem(selectedItem);
                }}
              />
            </View>
          </View>
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

  const handleAddButton = () => {
    if (!selectedMovie) return;
    if (!selectedItem) return;
    if (selectedItem?.type === 0) {
      addMovieToWatchList(selectedMovie);
    }

    if (selectedItem?.type === 1) {
      addMovieToWatched(selectedMovie);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchButton onPress={toggle} />
      <BannerMovies />
      <CustomModal visible={isToggle} onPress={close} height={'100%'}>
        <TextInput
          style={{
            marginTop: 16,
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            width: '100%',
            borderRadius: 8,
            paddingHorizontal: 16,
            color: colors.primaryText,
          }}
          placeholder='Search'
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
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
                {item.key === 'list' ? renderMovieList() : renderMovieDetail()}
              </View>
            )}
          />
        </View>
      </CustomModal>
    </View>
  );
}
