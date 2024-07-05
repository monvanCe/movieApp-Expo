import { useEffect, useMemo, useRef, useState } from 'react';
import { View } from 'react-native';

import theme from '@styles/theme';
import { Image } from 'expo-image';

import { styles } from './styles';
import { IImageStack } from './types';

export default function ImageStack({ images }: IImageStack) {
  const [margin, setMargin] = useState(100);
  const [width, setWidth] = useState(0);
  const containerRef = useRef(null);
  const colors = theme.useTheme();
  const style = useMemo(() => styles(colors), [colors]);

  useEffect(() => {
    if (containerRef.current) {
      const container: any = containerRef.current;
      container.measure((x: any, y: any, width: any, height: any, pageX: any, pageY: any) => {
        setWidth(width);
        setMargin(-(width / 3));
      });
    }
  }, [containerRef.current, images]);
  return (
    <View ref={containerRef} style={style.container}>
      {images.map((image, index) => (
        <Image
          key={index}
          source={{ uri: image }}
          style={[
            style.item,
            {
              width: width / 2,
              marginLeft: index === 0 ? 0 : margin,
              zIndex: images.length - index,
              transform: [{ scale: 1 - index * 0.1 }],
            },
          ]}
        />
      ))}
    </View>
  );
}
