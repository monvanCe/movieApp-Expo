import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 390;
const guidelineBaseHeight = 844;

const defaultFactor = width > guidelineBaseWidth ? 0.5 : 1.25;

const moderateScale = (size: number, factor = defaultFactor) =>
  size + (horizontalScale(size) - size) * factor;

const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;

export default {
  moderateScale,
  horizontalScale,
  verticalScale,
};
