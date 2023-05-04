import 'react-native';
import './src/i18n';
import { setUpTests } from 'react-native-reanimated/lib/reanimated2/jestUtils';
import 'react-native-gesture-handler/jestSetup';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

setUpTests();

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'ios',
  select: () => {},
}));
