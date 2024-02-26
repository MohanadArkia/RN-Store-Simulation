import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ScreenNames from './ScreenNames';

import ProductInfoScreen from '../src/screens/ProductInfoScreen';
import SplashScreen from '../src/screens/SplashScreen';
import BottomTabNavigator from './BottomTabNavigator';

const MainNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ScreenNames.Splash} component={SplashScreen} />
        <Stack.Screen
          name={ScreenNames.ProductInfo}
          component={ProductInfoScreen}
        />
        <Stack.Screen name={ScreenNames.Tabs} component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
