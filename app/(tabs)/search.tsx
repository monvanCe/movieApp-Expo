import React, { useEffect, useState } from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';

import SearchButton from '@components/atoms/searchButton';
import CustomModal from '@components/molecules/customModal';
import BannerMovies from '@components/organism/bannerMovies';
import { lowResImage } from '@const/imageSources';
import useToggle from '@hooks/useToggle';
import { searchMovies } from '@service/externalServices';
import { FlashList } from '@shopify/flash-list';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);
  const { toggle, isToggle, close } = useToggle();

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
          }}
          placeholder='Search'
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <FlashList
          data={searchedMovies}
          renderItem={({ item }: { item: IMovie }) => (
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderRadius: 8,
                borderColor: 'gray',
                marginVertical: 4,
                display: 'flex',
                overflow: 'hidden',
              }}>
              <Image
                source={{ uri: lowResImage(item.posterPath) }}
                style={{
                  height: 75,
                  aspectRatio: 9 / 13.5,
                }}
              />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
          estimatedItemSize={100}
        />
      </CustomModal>
    </View>
  );
}
