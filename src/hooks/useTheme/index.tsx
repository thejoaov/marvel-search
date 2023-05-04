import { useColorScheme } from 'react-native';
import { darkTheme, lightTheme } from '../../styles/themes';
import { adaptNavigationTheme } from 'react-native-paper';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import merge from 'deepmerge';

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: merge(NavigationDefaultTheme, lightTheme),
  reactNavigationDark: merge(NavigationDarkTheme, darkTheme),
});

export const useNavigationTheme = () => {
  const colorScheme = useColorScheme();

  return colorScheme === 'dark' ? DarkTheme : LightTheme;
};

const useTheme = () => {
  const colorScheme = useColorScheme();

  return colorScheme === 'dark' ? darkTheme : lightTheme;
};

export default useTheme;
