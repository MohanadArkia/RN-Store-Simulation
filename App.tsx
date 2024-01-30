import React from 'react';
import {View} from 'react-native';

import style from './src/styles/AppStyle';

import Nav from './route/Nav';

const App = () => {
  return (
    <View style={style.container}>
      <Nav />
    </View>
  );
};

export default App;
