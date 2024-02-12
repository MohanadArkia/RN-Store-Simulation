import {Text, View, Image} from 'react-native';
import React from 'react';

import styles from '../styles/ProductInfoStyle';

const ProductInfo = props => {
  const {pcCardsAsText, consoleCardsAsText, mobileCardsAsText, img} =
    props.route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.productSpecs}>{pcCardsAsText}</Text>
      <Text style={styles.productSpecs}>{consoleCardsAsText}</Text>
      <Text style={styles.productSpecs}>{mobileCardsAsText}</Text>
      <Image style={styles.img} source={img} />
    </View>
  );
};

export default ProductInfo;
