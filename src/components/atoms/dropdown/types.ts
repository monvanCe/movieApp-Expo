export interface IDropdown {
  items: string[];
  value?: string;
  onChange: (value: string) => void;
}
