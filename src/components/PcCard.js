import {Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../styles/PcSectionStyle';
import {useNavigation} from '@react-navigation/native';
import ScreenNames from '../../route/ScreenNames';

const PcCard = props => {
  const {brand, cpu, ram, gpu, storage, price, hidePlus} = props;
  const navigation = useNavigation();

  const onPcCardPress = () => {
    const pcCards = {
      brand: props.brand,
      cpu: props.cpu,
      ram: props.ram,
      gpu: props.gpu,
      storage: props.storage,
      price: props.price,
      img: props.img,
    };
    navigation.navigate(ScreenNames.ProductInfo, {pcCards: pcCards});
  };

  return (
    <TouchableOpacity onPress={onPcCardPress}>
      <View style={styles.card}>
        {!hidePlus && <Text style={styles.addProductPlus}>+</Text>}
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
