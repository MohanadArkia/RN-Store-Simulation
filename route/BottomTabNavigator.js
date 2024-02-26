import React from 'react';
import {Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ScreenNames from './ScreenNames';

import ContactScreen from '../src/screens/ContactScreen';
import AboutScreen from '../src/screens/AboutScreen';
import MyCartScreen from '../src/screens/MyCartScreen';
import HomeScreen from '../src/screens/HomeScreen';

import Icons from '../src/assets/images/images';
import Styles from '../src/styles/BottomNavigatorStyle';

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {fontSize: 20},
        tabBarActiveTintColor: '#FF5722',
        tabBarInactiveTintColor: '#757575',
        tabBarStyle: {height: 50, backgroundColor: '#121212'},
      }}>
      <Tab.Screen
        name={ScreenNames.Home}
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Image source={Icons.homeIcon()} style={Styles.icon} />
          ),
        }}
      />

      <Tab.Screen
        name={ScreenNames.Contact}
        component={ContactScreen}
        options={{
          tabBarIcon: () => (
            <Image source={Icons.contactIcon()} style={Styles.icon} />
          ),
        }}
      />

      <Tab.Screen
        name={ScreenNames.About}
        component={AboutScreen}
        options={{
          tabBarIcon: () => (
            <Image source={Icons.aboutIcon()} style={Styles.icon} />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.MyCart}
        component={MyCartScreen}
        options={{
          tabBarIcon: () => (
            <Image source={Icons.shoppingCartIcon()} style={Styles.icon} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
