import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigationTheme } from '../hooks/useTheme';
import { RootStackParamList } from './types';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Settings from '../pages/Settings';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
  const navigationTheme = useNavigationTheme();

  return (
    <NavigationContainer theme={navigationTheme}>
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name="Home" component={Home} />

        <RootStack.Group screenOptions={{ presentation: 'modal' }}>
          <RootStack.Screen name="Details" component={Details} />
          <RootStack.Screen name="Settings" component={Settings} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
