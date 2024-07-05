import { View } from 'react-native';

import { useAppSelector } from '@store/store';
import metricEngine from '@styles/metricEngine';
import sizes from '@styles/sizes';
import { Skeleton } from 'moti/skeleton';

export default function SkeletonItem() {
  const appTheme = useAppSelector(state => state.appConfig.appTheme);

  return (
    <View
      style={{
        height: '100%',
        aspectRatio: 9 / 13.5,
        marginHorizontal: metricEngine.horizontalScale(sizes.paddings.small),
      }}>
      <Skeleton colorMode={appTheme} height={'100%'} width={'100%'} />
    </View>
  );
}
