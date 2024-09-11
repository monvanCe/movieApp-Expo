import { TouchableOpacity } from 'react-native';

import { lowResImage } from '@const/imageSources';
import { FlashList } from '@shopify/flash-list';
import { borderRadius, borderWidths } from '@styles/sizes';
import theme from '@styles/theme';
import { Image } from 'expo-image';

interface MovieListProps extends IMovies, IOnPressWithParam {}

const MovieList: React.FC<MovieListProps> = ({ movies, onPress }) => {
  const colors = theme.useTheme();

  return (
    <FlashList
      numColumns={3}
      data={movies}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }: { item: IMovie }) => (
        <TouchableOpacity
          onPress={() => onPress(item)}
          style={{
            borderWidth: borderWidths.small,
            borderRadius: borderRadius.small,
            borderColor: colors.divider,
            margin: '1%',
            overflow: 'hidden',
          }}>
          <Image
            source={{ uri: lowResImage(item.posterPath) }}
            style={{
              width: '100%',
              aspectRatio: 9 / 13.5,
            }}
          />
        </TouchableOpacity>
      )}
      estimatedItemSize={100}
    />
  );
};

export default MovieList;
