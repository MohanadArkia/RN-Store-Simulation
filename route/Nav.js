import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ScreenNames from './ScreenNames';

import HomeScreen from '../src/screens/HomeScreen';
import ContactScreen from '../src/screens/ContactScreen';
import AboutScreen from '../src/screens/AboutScreen';
import ProductInfoScreen from '../src/screens/ProductInfoScreen';

import icon from '../src/assets/images/images';

import NavStyle from '../src/styles/NavigationStyle';

const Nav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ScreenNames.Home}
          component={HomeScreen}
          options={{
            title: 'Home',
            headerTitle: () => (
              <Image style={NavStyle.navIcons} source={icon.shoppingCart()} />
            ),
          }}
        />
        <Stack.Screen name={ScreenNames.Contact} component={ContactScreen} />
        <Stack.Screen name={ScreenNames.About} component={AboutScreen} />
        <Stack.Screen
          name={ScreenNames.ProductInfo}
          component={ProductInfoScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
