import {Text, View, Image, TouchableOpacity, Button} from 'react-native';
import React, {useContext} from 'react';

import style from '../styles/MobileSectionStyle';

import {useNavigation} from '@react-navigation/native';
import ScreenNames from '../../route/ScreenNames';
import MyContext from '../store/MyContext';

const MobileCard = props => {
  const {brand, release, price, img, id} = props;

  const navigation = useNavigation();
  const {cart, setCart, setQuantity} = useContext(MyContext);

  const mobileCards = {
    brand: brand,
    release: release,
    price: price,
    img: img,
    id: id,
  };

  const onMobileCardPress = () => {
    const mobileCardsAsText = `
        Brand: ${brand}
        Release: ${release}
        Price: ${price}
    `;
    navigation.navigate(ScreenNames.ProductInfo, {
      mobileCardsAsText: mobileCardsAsText,
      img: img,
    });
  };

  const checkIfExist = () => {
    const isExist = cart.find(product => product.id === mobileCards.id);
    return !!isExist;
  };

  const onAddToCartPress = () => {
    checkIfExist()
      ? setQuantity(prevQuantity => prevQuantity + 1)
      : setCart(prevCart => [...prevCart, mobileCards]);
  };

  return (
    <TouchableOpacity onPress={onMobileCardPress}>
      <View style={style.card}>
        <Button title="Add to cart" onPress={onAddToCartPress} />
        <Text style={style.title}>{`Brand: ${brand}`}</Text>
        <Text style={style.text}>{`Release: ${release}`}</Text>
        <Text style={style.text}>{`Price: ${price}`}</Text>
        <Image style={style.mobileImage} source={props.img} />
      </View>
    </TouchableOpacity>
  );
};

export default MobileCard;
