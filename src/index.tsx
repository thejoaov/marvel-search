import React, { useCallback, useEffect, useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Router from './router/router';
import useTheme from './hooks/useTheme';
import { generateHash } from './services/hash';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  const theme = useTheme();

  useEffect(() => {
    async function prepare() {
      try {
        await generateHash();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View
      testID="app-container"
      onLayout={onLayoutRootView}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{ flex: 1 }}>
      <PaperProvider theme={theme}>
        <Router />
      </PaperProvider>
    </View>
  );
};

export default App;
