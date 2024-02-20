import {Text, View, TouchableOpacity, Image, Button} from 'react-native';
import React, {useContext} from 'react';
import style from '../styles/ConsolesSectionStyle';
import {useNavigation} from '@react-navigation/native';
import ScreenNames from '../../route/ScreenNames';
import MyContext from '../store/MyContext';

const ConsoleCard = props => {
  const {brand, release, price, img, id, quantity} = props;

  const navigation = useNavigation();
  const {cart, setCart} = useContext(MyContext);

  const consoleCards = {
    brand: brand,
    release: release,
    price: price,
    img: img,
    id: id,
    quantity: quantity,
  };

  const onConsoleCardPress = () => {
    const consoleCardsAsText = `
        Brand: ${brand}
        release: ${release}
        price: ${price}
    `;
    navigation.navigate(ScreenNames.ProductInfo, {
      consoleCardsAsText: consoleCardsAsText,
      img: img,
    });
  };

  const checkIfExist = () => {
    const isExist = cart.find(product => product.id === consoleCards.id);
    return !!isExist;
  };

  const onAddToCartPress = () => {
    checkIfExist()
      ? console.log('Product exist')
      : setCart(prevCart => [...prevCart, consoleCards]);
  };

  return (
    <TouchableOpacity onPress={onConsoleCardPress}>
      <View style={style.card}>
        <Button title="Add to cart" onPress={onAddToCartPress} />
        <Text style={style.title}>{`Brand: ${brand}`}</Text>
        <Text style={style.text}>{`Release: ${release}`}</Text>
        <Text style={style.text}>{`Price: ${price}`}</Text>
        <Image style={style.consoleImg} source={img} />
      </View>
    </TouchableOpacity>
  );
};

export default ConsoleCard;
