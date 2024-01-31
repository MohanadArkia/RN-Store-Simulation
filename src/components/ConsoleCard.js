import {Text, View, TouchableOpacity, Image, Button} from 'react-native';
import React from 'react';
import style from '../styles/ConsolesSectionStyle';
import {useNavigation} from '@react-navigation/native';
import ScreenNames from '../../route/ScreenNames';

const ConsoleCard = props => {
  const {brand, release, price, hideButton} = props;

  const navigation = useNavigation();

  const onConsoleCardPress = () => {
    const consoleCards = {
      brand: props.brand,
      release: props.release,
      price: props.price,
      img: props.img,
    };
    navigation.navigate(ScreenNames.ProductInfo, {consoleCards: consoleCards});
  };
  const onAddToCartPress = () => {
    console.log('Product is added to cart');
  };
  return (
    <TouchableOpacity onPress={onConsoleCardPress}>
      <View style={style.card}>
        {!hideButton && (
          <Button title="Add to cart" onPress={onAddToCartPress} />
        )}
        <Text style={style.title}>{`Brand: ${brand}`}</Text>
        <Text style={style.text}>{`Release: ${release}`}</Text>
        <Text style={style.text}>{`Price: ${price}`}</Text>
        <Image style={style.consoleImg} source={props.img} />
      </View>
    </TouchableOpacity>
  );
};

export default ConsoleCard;
