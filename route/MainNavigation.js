import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ScreenNames from './ScreenNames';

import HomeScreen from '../src/screens/HomeScreen';
import ContactScreen from '../src/screens/ContactScreen';
import AboutScreen from '../src/screens/AboutScreen';
import ProductInfoScreen from '../src/screens/ProductInfoScreen';
import MyCartScreen from '../src/screens/MyCartScreen';

const MainNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ScreenNames.Home} component={HomeScreen} />
        <Stack.Screen name={ScreenNames.Contact} component={ContactScreen} />
        <Stack.Screen name={ScreenNames.About} component={AboutScreen} />
        <Stack.Screen
          name={ScreenNames.ProductInfo}
          component={ProductInfoScreen}
        />
        <Stack.Screen name={ScreenNames.MyCart} component={MyCartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
