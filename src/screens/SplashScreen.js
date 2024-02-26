import {Image, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import ScreenNames from '../../route/ScreenNames';
import styles from '../styles/SplashStyle';
import Images from '../assets/images/images';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace(ScreenNames.Tabs, {screen: ScreenNames.Home});
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.splashLogo} source={Images.logo()} />
    </View>
  );
};

export default SplashScreen;
