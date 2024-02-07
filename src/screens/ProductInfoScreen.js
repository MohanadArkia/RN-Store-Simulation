import {Text, View, Image} from 'react-native';
import React from 'react';

import styles from '../styles/ProductInfoStyle';

const ProductInfo = props => {
  const {pcCardsAsText, consoleCardsAsText, mobileCardsAsText, img} =
    props.route.params;

  return (
    <View style={styles.container}>
      {pcCardsAsText && (
        <Text style={styles.productSpecs}>{pcCardsAsText}</Text>
      )}

      {consoleCardsAsText && (
        <Text style={styles.productSpecs}>{consoleCardsAsText}</Text>
      )}

      {mobileCardsAsText && (
        <Text style={styles.productSpecs}>{mobileCardsAsText}</Text>
      )}

      {img && <Image style={styles.img} source={img} />}
    </View>
  );
};

export default ProductInfo;
