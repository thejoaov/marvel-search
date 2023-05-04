import { renderHook } from '@testing-library/react-hooks';
import { useColorScheme } from 'react-native';
import useTheme, { useNavigationTheme } from '../useTheme';
import { darkTheme, lightTheme } from '../../styles/themes';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import merge from 'deepmerge';
import { adaptNavigationTheme } from 'react-native-paper';

jest.mock('react-native', () => ({
  ...jest.requireActual('react-native'),
  useColorScheme: jest.fn(),
}));

jest.mock('react-native/Libraries/EventEmitter/RCTDeviceEventEmitter', () => {
  const { EventEmitter } = require('events');
  return new EventEmitter();
});

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('react-native/Libraries/Settings/Settings.ios', () => {
  return {
    set: () => {},
    get: () => {},
  };
});

jest.mock('react-native/Libraries/TurboModule/TurboModuleRegistry', () => {
  return {
    getEnforcing: () => ({
      getConstants: () => ({
        Dimensions: {
          window: {
            window: 200,
            width: 480,
            height: 720,
            scale: 1,
            fontScale: 1,
          },
          screen: {
            window: 200,
            width: 480,
            height: 720,
            scale: 1,
            fontScale: 1,
          },
          windowPhysicalPixels: {
            width: 200,
            height: 720,
            scale: 1,
            fontScale: 1,
            densityDpi: 200,
          },
          screenPhysicalPixels: {
            width: 200,
            height: 720,
            scale: 1,
            fontScale: 1,
            densityDpi: 200,
          },
        },
        isIPhoneX_deprecated: false,
      }),
    }),
    get: () => {},
  };
});

jest.mock('react-native/Libraries/Utilities/Dimensions', () => ({
  get: jest.fn(() => {
    return {
      width: 375,
      height: 667,
      scale: 2,
      fontScale: 2,
    };
  }),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
}));

jest.mock('react-native/Libraries/Utilities/PixelRatio', () => ({
  get: jest.fn(() => 2),
  roundToNearestPixel: jest.fn(size => size),
}));

jest.mock(
  'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView',
  () => {
    const View = require('react-native/Libraries/Components/View/View');

    return {
      __esModule: true,
      default: View,
    };
  },
);

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: merge(NavigationDefaultTheme, lightTheme),
  reactNavigationDark: merge(NavigationDarkTheme, darkTheme),
});

describe('useTheme', () => {
  it('returns dark theme when color scheme is dark', () => {
    (useColorScheme as jest.Mock).mockReturnValue('dark');
    const { result } = renderHook(() => useTheme());
    expect(result.current).toEqual(darkTheme);
  });

  it('returns light theme when color scheme is light', () => {
    (useColorScheme as jest.Mock).mockReturnValue('light');
    const { result } = renderHook(() => useTheme());
    expect(result.current).toEqual(lightTheme);
  });
});

describe('useNavigationTheme', () => {
  it('returns navigation dark theme when color scheme is dark', () => {
    (useColorScheme as jest.Mock).mockReturnValue('dark');
    const { result } = renderHook(() => useNavigationTheme());

    expect(result.current).toEqual(expect.objectContaining(DarkTheme));
  });

  it('returns navigation light theme when color scheme is light', () => {
    (useColorScheme as jest.Mock).mockReturnValue('light');
    const { result } = renderHook(() => useNavigationTheme());

    expect(result.current).toEqual(expect.objectContaining(LightTheme));
  });
});
