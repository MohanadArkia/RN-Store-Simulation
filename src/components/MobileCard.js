import {Text, View, Image, TouchableOpacity, Button} from 'react-native';
import React from 'react';

import style from '../styles/MobileSectionStyle';

import {useNavigation} from '@react-navigation/native';
import ScreenNames from '../../route/ScreenNames';

const MobileCard = props => {
  const {brand, release, price, hideButton} = props;

  const navigation = useNavigation();

  const onMobileCardPress = () => {
    const mobileCards = {
      brand: props.brand,
      release: props.release,
      price: props.price,
      img: props.img,
    };
    navigation.navigate(ScreenNames.ProductInfo, {mobileCards: mobileCards});
  };

  const onAddToCartPress = () => {
    console.log('Product is added to cart');
  };

  return (
    <TouchableOpacity onPress={onMobileCardPress}>
      <View style={style.card}>
        {!hideButton && (
          <Button title="Add to cart" onPress={onAddToCartPress} />
        )}
        <Text style={style.title}>{`Brand: ${brand}`}</Text>
        <Text style={style.text}>{`Release: ${release}`}</Text>
        <Text style={style.text}>{`Price: ${price}`}</Text>
        <Image style={style.mobileImage} source={props.img} />
      </View>
    </TouchableOpacity>
  );
};

export default MobileCard;
