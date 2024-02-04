import React from 'react';
import {View} from 'react-native';

import style from './src/styles/AppStyle';

import MainNavigation from './route/MainNavigation';
import MyProvider from './src/store/MyProvider';

const App = () => {
  return (
    <MyProvider>
      <View style={style.container}>
        <MainNavigation />
      </View>
    </MyProvider>
  );
};

export default App;
