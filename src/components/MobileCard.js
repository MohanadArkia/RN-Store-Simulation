import {Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import style from '../styles/MobileSectionStyle';

import {useNavigation} from '@react-navigation/native';
import ScreenNames from '../../route/ScreenNames';

const MobileCard = props => {
  const {brand, release, price} = props;

  const navigation = useNavigation();

  const onMobileCardPress = () => {
    const mobileCards = {
      brand: props.brand,
      release: props.release,
      price: props.price,
      img: props.img,
    };
    navigation.navigate(ScreenNames.MyCart, {mobileCards: mobileCards});
  };

  return (
    <TouchableOpacity onPress={onMobileCardPress}>
      <View style={style.card}>
        <Text style={style.addProductPlus}>+</Text>
        <Text style={style.title}>{`Brand: ${brand}`}</Text>
        <Text style={style.text}>{`Release: ${release}`}</Text>
        <Text style={style.text}>{`Price: ${price}`}</Text>
        <Image style={style.mobileImage} source={props.img} />
      </View>
    </TouchableOpacity>
  );
};

export default MobileCard;
