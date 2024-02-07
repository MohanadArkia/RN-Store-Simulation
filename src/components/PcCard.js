import {Text, View, Image, TouchableOpacity, Button} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';

import styles from '../styles/PcSectionStyle';

import ScreenNames from '../../route/ScreenNames';

import MyContext from '../store/MyContext';

const PcCard = props => {
  const {brand, cpu, ram, gpu, storage, price, img} = props;
  const navigation = useNavigation();
  const {setCart} = useContext(MyContext);

  const pcCards = {
    brand: brand,
    cpu: cpu,
    ram: ram,
    gpu: gpu,
    storage: storage,
    price: price,
    img: img,
  };

  const onPcCardPress = () => {
    const pcCardsAsText = `
      Brand: ${pcCards.brand}
      Cpu: ${pcCards.cpu}
      Ram: ${pcCards.ram}
      Gpu: ${pcCards.gpu}
      Storage: ${pcCards.storage}
      Price: ${pcCards.price}
   `;
    navigation.navigate(ScreenNames.ProductInfo, {
      pcCardsAsText: pcCardsAsText,
      img: img,
    });
  };

  const onAddToCartPress = () => {
    setCart(prevCart => [...prevCart, pcCards]);
  };

  return (
    <TouchableOpacity onPress={onPcCardPress}>
      <View style={styles.card}>
        <Button title="Add to cart" onPress={onAddToCartPress} />
        <Text style={styles.title}>{`Brand: ${brand}`}</Text>
        <Text style={styles.text}>{`Cpu: ${cpu}`}</Text>
        <Text style={styles.text}>{`Ram: ${ram}`}</Text>
        <Text style={styles.text}>{`Gpu: ${gpu}`}</Text>
        <Text style={styles.text}>{`Storage: ${storage}`}</Text>
        <Text style={styles.text}>{`Price: ${price}`}</Text>
        <Image style={styles.pcImage} source={props.img} />
      </View>
    </TouchableOpacity>
  );
};

export default PcCard;
