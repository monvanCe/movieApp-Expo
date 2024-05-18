export interface IButton {
  text: string;
  onPress: () => void;
}

export interface IDropdown {
  items: string[];
  value?: string;
  onChange: (value: string) => void;
}
