import { MD3LightTheme, MD3DarkTheme, MD3Theme } from 'react-native-paper';

export const darkTheme: MD3Theme = {
  ...MD3DarkTheme,

  colors: {
    ...MD3DarkTheme.colors,
    background: '#202020',
    primary: '#D42026',
    secondary: '#700906',
    tertiary: '#F25A55',
    onPrimary: '#fafafa',
    onPrimaryContainer: '#fafafa',
    error: '#ef9a9a',
  },
};

export const lightTheme: MD3Theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#D42026',
    secondary: '#700906',
    tertiary: '#F25A55',
    background: '#fafafa',
    onPrimaryContainer: '#fafafa',
    onPrimary: '#060606',
    error: '#ef9a9a',
  },
};
