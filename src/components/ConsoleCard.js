import {Text, View, TouchableOpacity, Image, Button} from 'react-native';
import React, {useContext} from 'react';
import style from '../styles/ConsolesSectionStyle';
import {useNavigation} from '@react-navigation/native';
import ScreenNames from '../../route/ScreenNames';
import MyContext from '../store/MyContext';

const ConsoleCard = props => {
  const {brand, release, price, img, hideButton} = props;
  const {setCart} = useContext(MyContext);

  const navigation = useNavigation();

  const consoleCards = {
    brand: brand,
    release: release,
    price: price,
    img: img,
  };

  const onConsoleCardPress = () => {
    navigation.navigate(ScreenNames.ProductInfo, {consoleCards: consoleCards});
  };

  const onAddToCartPress = () => {
    setCart(prevCart => [...prevCart, consoleCards]);
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
        <Image style={style.consoleImg} source={img} />
      </View>
    </TouchableOpacity>
  );
};

export default ConsoleCard;
