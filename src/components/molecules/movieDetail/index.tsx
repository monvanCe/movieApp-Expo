import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { highResImage } from '@const/imageSources';
import { Ionicons } from '@expo/vector-icons';
import { borderRadius, fontSizes, margins, paddings } from '@styles/sizes';
import theme from '@styles/theme';
import { Image } from 'expo-image';

interface RenderMovieDetailProps extends IMovie, IOnPress {}

const RenderMovieDetail: React.FC<RenderMovieDetailProps> = props => {
  const colors = theme.useTheme();
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={props.onPress}>
        <Ionicons
          name='chevron-back'
          size={30}
          color={colors.primary}
          style={{ margin: paddings.medium }}
        />
      </TouchableOpacity>
      <Image
        source={{ uri: highResImage(props.posterPath) }}
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
        {props.title}
      </Text>
      <Text
        style={{
          fontSize: fontSizes.medium,
          color: colors.secondaryText,
          marginTop: margins.small,
        }}>
        {props.overview}
      </Text>
    </View>
  );
};

export default RenderMovieDetail;
