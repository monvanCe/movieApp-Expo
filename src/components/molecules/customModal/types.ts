import { DimensionValue } from 'react-native';

export interface ICustomModal {
  height: DimensionValue;
  children: React.ReactNode;
  visible: boolean;
  onClose: () => void;
}
