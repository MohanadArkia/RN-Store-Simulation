import {Text, View, Image, TouchableOpacity, Button} from 'react-native';
import React, {useContext} from 'react';

import style from '../styles/MobileSectionStyle';

import {useNavigation} from '@react-navigation/native';
import ScreenNames from '../../route/ScreenNames';
import MyContext from '../store/MyContext';

const MobileCard = props => {
  const {brand, release, price, img, hideButton} = props;

  const navigation = useNavigation();
  const {setCart} = useContext(MyContext);

  const mobileCards = {
    brand: brand,
    release: release,
    price: price,
    img: img,
  };

  const onMobileCardPress = () => {
    navigation.navigate(ScreenNames.ProductInfo, {mobileCards: mobileCards});
  };

  const onAddToCartPress = () => {
    setCart(prevCart => [...prevCart, mobileCards]);
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
