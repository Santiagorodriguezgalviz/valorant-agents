export type ThemeColor = 'red' | 'blue' | 'green' | 'purple' | 'orange';
export type ThemeMode = 'light' | 'dark';

export interface Theme {
  mode: ThemeMode;
  color: ThemeColor;
}